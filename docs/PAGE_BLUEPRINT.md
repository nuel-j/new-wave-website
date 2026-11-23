# New Wave page-by-page implementation blueprint

> Working specification · 2026-11-23  
> Scope: seven public destinations plus shared site systems. This is a functional specification, not a visual redesign.

## Non-negotiable project constraints
- The 3D surfer-girl character and assistant are paused and removed. Do not include character UI, image dependencies, rigging, animation, or assistant logic until the owner explicitly resumes that work.
- Palette, typography, and interface redesign are deferred until the owner supplies direction. Keep current styling temporary and easy to change.
- Existing artist, event, product, location, and editorial examples are placeholders unless confirmed by the owner.
- No button may pretend a transaction, submission, signup, or playback succeeded unless the relevant service actually completed it.
- Build and verify one page at a time, but keep shared data models and navigation consistent.

## Shared application foundation
- Public routes for Home, Shop, Events, Sound, Artists, About, and New Wave.
- Shared responsive header/navigation and footer; active-route indication; mobile menu; accessible keyboard operation.
- Consistent loading, empty, validation, error, and success states.
- Search/metadata/SEO foundations, 404 page, privacy/terms/cookie notices where required.
- Server-side validation for every write action; no private API keys in browser code.
- Reusable content, media, and form primitives. Admin routes must be protected independently of hiding links.

## 1. Home
Purpose: orient a first-time visitor and guide them into the rest of the New Wave world.
- Brand introduction and clear explanation of the platform.
- Featured shop products, upcoming events, music/playlists, artists, and latest New Wave stories.
- Each featured item links to its real detail page.
- Clear primary actions; no dead-end decorative buttons.
- Admin controls for featured content and homepage ordering.
- Acceptance: all featured modules load from managed content; empty modules are gracefully hidden or show an intentional empty state.

## 2. Shop
Purpose: let visitors discover products and complete a real purchase.
- Product catalogue with categories, search/filter/sort, pagination or incremental loading.
- Product detail pages with images, description, price/currency, variants, size/colour, stock, quantity, and shipping/returns details.
- Cart with quantity editing, removal, subtotal, shipping/tax calculation where applicable.
- Checkout with customer/contact/shipping details and payment-provider handoff.
- Verify payment server-side; create order only from trusted provider confirmation; send order confirmation.
- Admin: products, categories, variants, inventory, prices, images, orders, fulfilment and refunds/status.
- Acceptance: test unavailable/out-of-stock items, invalid details, abandoned checkout, failed payment, duplicate callback, successful order, and mobile checkout.
- No real products, prices, currency, delivery rules, or payment provider should be invented.

## 3. Events
Purpose: communicate upcoming gatherings and handle reservations/ticket sales.
- Event archive with upcoming/past filters and clear date, venue, status, and availability.
- Event detail with description, schedule, venue/location, age/access notes where applicable, ticket types and capacity.
- Booking flow, attendee details, payment if tickets are paid, confirmation and attendee record.
- Admin: event creation/editing, capacity, ticket inventory/prices, attendee list, cancellations/refunds and status.
- Acceptance: sold-out, cancelled, free RSVP, paid ticket, payment failure, duplicate booking and confirmation states.
- Do not publish unverified dates, venues, or ticket prices.

## 4. Sound / Music
Purpose: make New Wave mixes and selected music discoverable and playable.
- Playlist/mix index and individual playlist detail.
- Track metadata and artwork; accessible player or supported third-party embeds.
- Play/pause, progress and volume only when supported by the selected player; graceful fallback to source link.
- Admin: playlist/track metadata, artwork, ordering, visibility and source URLs.
- Acceptance: playback works on iOS Safari and Android/desktop browsers; blocked embeds and unavailable sources show clear alternatives.
- Use only audio the brand owns, has licensed, or embeds through an authorised provider. Do not host unlicensed tracks.

## 5. Artists
Purpose: showcase creatives and accept submissions safely.
- Artist directory with categories/tags and search.
- Individual profiles with approved bio, media, links and selected work.
- Submission form with contact details, discipline, portfolio/social links, message, consent and optional permitted file upload.
- Confirmation and reference/status mechanism; clear privacy and submission expectations.
- Admin moderation queue: review, request changes, approve/reject, publish profile, manage media.
- Acceptance: validation, spam/rate limiting, upload restrictions, consent capture and secure private submission storage.

## 6. About
Purpose: explain the brand and make it easy to contact the team.
- Approved brand story, mission, values and community description.
- Contact channels, social links, FAQ and relevant policy links.
- Contact form with validation, spam protection and clear delivery/error state if a form is selected.
- Admin-managed copy and links.
- Acceptance: all contact/social links verified; no placeholder addresses or invented claims.

## 7. New Wave
Purpose: publish the culture and editorial side of the brand.
- Four subsections: Editorial, Photography, Interviews, Culture.
- Each subsection has an archive/listing, filters/tags where useful, and individual content detail pages.
- Content records support title, slug, category, author/credit, publication date, excerpt, body, media, alt text, SEO metadata and draft/published status.
- Admin editorial workflow: draft, preview, publish, unpublish, schedule if supported, edit and archive.
- Acceptance: every card opens a real story; media has credits/alt text; unpublished content is not publicly accessible.

## Shared newsletter
- Email validation, consent statement, duplicate handling, unsubscribe path, privacy policy link and clear delivery status.
- Server-side integration with selected mailing provider; store only necessary subscriber data.
- Admin view/export and unsubscribe/suppression handling.
- A local “success” message is not proof of subscription until provider confirmation.

## Admin and backend
- Owner/admin authentication, role-based access, secure sessions and protected server actions.
- Content management for products, orders, events, artists, submissions, playlists, editorial, media and site settings.
- Database schema with timestamps, ownership, status fields, constraints and indexes.
- Private storage for submissions; public storage only for approved published media.
- Payment/email/music provider credentials stored as server-side secrets.
- Audit log for sensitive admin changes; backups and recovery plan.

## Build order
1. Confirm actual repository structure and recover the prototype into a runnable app.
2. Shared application shell and route structure.
3. Home page.
4. Shop catalogue and product details; cart/checkout after provider selection.
5. Events archive and details; ticketing after provider selection.
6. Sound/Music.
7. Artists and submissions.
8. About and contact.
9. New Wave archive and story pages.
10. Shared newsletter, admin, backend hardening, accessibility and cross-device QA.
11. Production deployment and launch checklist.

## Definition of done for every page
- Route loads directly and survives refresh.
- All visible links and controls do what their labels promise.
- Real data is connected or clearly marked as sample content.
- Loading, empty, error, and success states are handled.
- Mobile and desktop layouts are usable.
- Keyboard focus, labels, semantic structure and accessible names are present.
- No console errors or broken assets in the tested build.
- Admin content changes appear correctly on the public page.
