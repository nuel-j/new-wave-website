# New Wave Admin Control Room — Architecture & Content Model

Status: proposed implementation plan
Date: 2026-11-23

## Product decision

Build one private, authenticated Control Room for the owner. It is not a public marketing page and is never shown in the public navigation. The public website and Control Room consume the same content source, so publishing from the Control Room updates the public site without code edits or a rebuild.

The current website is a Vite + React static application deployed as Cloudflare Worker static assets. Its copy, page headings, product cards, event cards, artist cards, and listening collections are hard-coded in prototype/components/generated/NewWaveMultiPagePrototype.tsx. There is no CMS, database, authentication, media storage, order system, or payment/shipping integration in the repository today. A real admin therefore requires a content backend and secure server-side integration layer; a localStorage-only mock would not meet the requirement.

## Recommended stack

### Content and editorial CMS: Sanity Studio

Use Sanity Studio as the editorial/content engine, embedded or mounted at a private /admin route (not linked from public navigation), or hosted on its own Studio URL if that is simpler to deploy. Sanity Studio supports custom document schemas, image uploads, rich text blocks, reusable references, and authenticated roles.

Why this fits:
- The free plan is currently listed at $0 and includes 20 seats, 2 roles, 2 public datasets, 10,000 documents, 100 GB assets, 1 million API CDN requests/month, and hosted Studio. It is enough for a small initial brand site, subject to monitoring usage.
- Public dataset means content is publicly readable; only authenticated Studio users should have write access. Never put a write token in browser code.
- Sanity supports rich editorial page blocks and image uploads, which suit the custom About page and the content-heavy New Wave section.
- The owner can add/edit/publish content through a graphical interface without editing source files.

References:
- https://www.sanity.io/pricing
- https://www.sanity.io/docs/studio/embedding-sanity-studio
- https://www.sanity.io/docs/studio/image-type
- https://www.sanity.io/docs/studio/block-type
- https://www.sanity.io/docs/user-guides/roles

### Transactional commerce and integrations: Cloudflare Worker + D1

Keep secrets and transaction processing server-side in a Cloudflare Worker. Use D1 for orders, payment attempts, shipping records, inventory adjustments, and integration configuration metadata. Use R2 for any non-CMS operational uploads if needed. The public React app must never receive payment or shipping secret keys.

The existing Cloudflare Worker static-assets deployment can be extended with a Worker API, D1 binding, and environment secrets. A D1 database must be provisioned in the Cloudflare account before the live API can operate.

References:
- https://developers.cloudflare.com/workers/static-assets/
- https://developers.cloudflare.com/workers/static-assets/binding/
- https://developers.cloudflare.com/workers/runtime-apis/bindings/

## Admin navigation

1. Overview
2. Homepage
3. Shop
4. Orders
5. Events
6. Sound & Music
7. Artists
8. About
9. New Wave / Editorial
10. Media Library
11. Integrations
12. Settings & Admin Access

Every module should have list/search/filter, add, edit, duplicate where useful, preview, publish/unpublish, archive, and delete with confirmation. Draft and published states should be separate. Add a clear preview before publishing. Use soft-delete/archive for content where restoration matters.

## Content models

### Global site settings
- Site title and description
- Brand logo variants and favicon
- Main navigation labels/order/visibility
- Footer tagline, links, social links, copyright
- Brand colours and theme tokens (within the approved palette)
- Mascot display name, image/pose assets, guide messages, visibility
- SEO defaults and social sharing image
- Announcement bar and global CTA

### Homepage
- Hero eyebrow, headline, body, image/artwork, CTA label and destination
- Featured content slots (product, event, artist, playlist, editorial)
- Intro headline and text
- Feature cards with title, image, description, destination, order and visibility
- Newsletter headline and supporting copy
- Section order and visibility
- Draft/preview/publish

### Products
- Product name, slug, SKU, short and long descriptions
- One primary image and an image gallery
- Category, tags, collection/drop
- Price and currency; optional compare-at price
- Variants: size, colour, material, SKU, per-variant price and stock
- Stock quantity, low-stock threshold, availability and publication status
- Weight and parcel dimensions for shipping quotes
- Featured flag, sort order, SEO title/description
- Product status: draft, active, sold out, archived

Price and stock are operational data and must be validated server-side at checkout. Do not trust a price sent by the browser.

### Events
- Title, slug, event type/category
- Poster/cover and optional photo gallery
- Short and full description
- Start/end date and time with timezone
- Venue name, full address, city, country, map link
- Ticket type, price/currency, capacity, external booking URL or integrated ticket inventory
- Age/accessibility notes, organiser/contact, featured flag
- Status: draft, announced, sold out, completed, cancelled

### Sound / Music
- Track title, slug, primary artist and featured artists
- Single/EP/album/playlist type
- Cover artwork, optional gallery
- Release date, genre/mood, duration, track number
- Streaming links (Spotify, Apple Music, Audiomack, Boomplay, SoundCloud, YouTube, etc.)
- Optional audio preview/file only where New Wave has the rights to host and stream it
- Credits, label, producer, writer, explicit-content flag, ISRC if available
- Playlist track ordering and featured status

Do not upload full copyrighted audio without the necessary rights. Prefer official streaming/embed links or short authorised previews.

### Artists
- Artist/stage name, slug, profile image and banner/portrait gallery
- Short bio and long biography
- Location (city/country), disciplines, genres and tags
- Website, Instagram, TikTok, YouTube, SoundCloud, Spotify, Apple Music and other social/streaming links
- Featured releases/albums/tracks, portfolio images, credits
- Contact/booking link only if supplied and approved
- Featured flag, sort order and publication status

### About
Use a block-based page builder, not one large plain-text field. Supported blocks:
- Full-width hero image/video with title and subtitle
- Rich-text story section
- Split image + text (image left/right)
- Full-bleed photography
- Pull quote / manifesto
- Numbered values or principles
- Timeline / milestones
- Image gallery / collage
- Embedded video
- Highlight / callout panel
- CTA / social links

Each block should support background theme, alignment, spacing, optional image alt text, and ordering. Allow adding, removing, duplicating, and dragging blocks into a new order. Provide mobile preview.

### New Wave / Editorial
- Content type: Editorial, Photography, Interviews, Culture
- Title, slug, excerpt, cover image, gallery/media
- Rich text body and embedded media
- Author/photographer/interviewer/subject references
- Publish date, tags, featured flag, SEO fields
- Draft/published/archived status

### Media Library
- Reusable images, videos and approved documents
- Alt text, caption, credit/rights owner, source, upload date, dimensions
- Tags and usage references
- Never assume a supplied image is cleared for public use unless confirmed

## Orders and stock lifecycle

1. Customer submits checkout details.
2. Worker fetches the current product/variant price and checks stock.
3. Worker creates a pending order with a unique reference and initializes payment with the active provider.
4. Customer completes hosted checkout.
5. Payment provider sends a signed webhook to the Worker.
6. Worker verifies signature and amount/currency/reference server-side; only then marks the order paid and reserves/decrements stock exactly once.
7. Admin sees the order and can update fulfilment status.
8. Shipping provider creates a shipment/label and returns tracking details.
9. Admin and customer can see fulfilment and tracking status.

Use idempotency for webhook processing and stock changes. Never fulfil an order based only on a browser redirect or a client-side success message. Record payment attempts and webhook events for troubleshooting.

## Provider integrations

Build provider adapters so the owner can select one active provider per capability without changing page code.

### Payments
- First integration candidate: Paystack (strong fit for Nigerian checkout and NGN).
- Alternative adapter: Flutterwave.
- Admin settings: provider, test/live mode, connection status, supported currencies, callback/webhook status, checkout configuration.
- Secret keys must be entered/stored as Cloudflare Worker secrets, not Sanity fields or browser local storage. The panel can explain which secret name to add and show connection status, but it must never reveal an existing secret.
- Keep checkout hosted/redirected by the provider where possible.
- Verify webhook signature and transaction amount on the server.

Official references:
- https://paystack.com/docs/v2/payments/online/quickstart
- https://paystack.com/docs/v2/developer-tools/integration/webhooks
- https://developer.flutterwave.com/docs/quickstart
- https://developer.flutterwave.com/docs/webhooks

### Shipping
- First candidate to evaluate: Shipbubble, a Nigeria-focused multi-carrier shipping API with rates, shipment labels and tracking.
- Also evaluate Sendbox and GIG Logistics if their coverage, onboarding and pricing better fit the actual dispatch origin/destinations.
- Admin settings: provider, pickup address, parcel defaults, enabled carriers/services, free-shipping thresholds, flat-rate fallback, test/live credentials and tracking display.
- Shipping API credentials remain server-side Worker secrets.
- Provide manual shipping as a fallback so orders can still be fulfilled if an API is unavailable.

Official references:
- https://docs.shipbubble.com/
- https://docs.shipbubble.com/get-started
- https://docs.sendbox.co/shipping/introduction
- https://giglogistics.com/e-commerce/

Provider coverage, pricing, business onboarding, pickup availability, and API access must be confirmed with the provider before going live.

## Security and access

- Require authentication for all admin access and all write APIs.
- Start with one owner/admin account. Add editor and fulfilment roles later if needed.
- Do not rely on a hidden URL as security.
- Do not store secrets in Sanity documents, browser code, GitHub, or localStorage.
- Use server-side environment secrets for provider credentials.
- Validate all writes and uploads; restrict file types and sizes.
- Keep audit events for publishing, product price/stock changes, order changes, and integration settings.
- Add rate limiting and CSRF/session protections to any custom API endpoints.
- Use least-privilege provider keys where supported.
- Back up content and transactional records; test restore.

## Implementation phases

### Phase 0 — prerequisites
- Create/confirm a Sanity account and project.
- Confirm the project ID and dataset name.
- Confirm the owner email for admin access.
- Provision Cloudflare D1 and choose an R2 media strategy if operational uploads need it.
- Confirm whether the initial payment method is Paystack or Flutterwave.
- Confirm which shipping provider to onboard; begin with Shipbubble evaluation.

### Phase 1 — editable content
- Create Sanity schemas for global settings, homepage, products, events, music, artists, About blocks, editorial, and reusable media.
- Mount the authenticated Studio at /admin or host it privately as a Studio URL.
- Replace hard-coded public site constants with Sanity queries.
- Add draft preview and publish/unpublish.
- Confirm public pages reflect published content without redeploying.

### Phase 2 — commerce operations
- Add Worker API and D1 tables for orders, payments, stock adjustments, shipments, and webhook receipts.
- Add products/variants and server-side price/stock validation.
- Connect the first payment provider in test mode.
- Add orders dashboard and manual fulfilment.
- Connect the first shipping provider in test mode.
- Test paid, failed, abandoned, duplicate-webhook, out-of-stock, refund, cancellation, and delivery flows.

### Phase 3 — launch hardening
- Connect live provider keys through Cloudflare secrets.
- Verify webhook signatures in production.
- Complete mobile/desktop, accessibility, security, backups, and recovery checks.
- Publish final real content and test one low-value real transaction before public launch.

## Current blockers

- No Sanity project is connected or configured yet.
- No Supabase projects are connected (not selected for this architecture).
- No D1 database exists in the Cloudflare config.
- No payment provider account/keys or shipping provider credentials are configured in this repository.
- The existing public website still uses hard-coded prototype content.
- A panel UI alone would not be a real CMS. Do not label the admin fully functional until content persistence, authenticated access, public data fetching, and publishing have all been tested.
