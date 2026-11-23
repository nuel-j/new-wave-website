# New Wave project backlog

> Version 1.6 · Updated 2026-11-18

## Discovery — answered 2026-11-18

The owner defined the lifestyle/culture purpose, removed Lagos as a location association, confirmed all functionality must work at launch, described the customizable surfer guide, chose the nested New Wave subsections pattern, authorized supplied client content, and delegated the technical stack choice. See `README.md` and `docs/DECISIONS.md`.

### Remaining inputs required before final product integration

- [ ] Logo options previously shared: they were not present in the recovered workspace files or accessible conversation preview. Obtain the source options before selection.
- [ ] Brand color concepts, references, imagery, and typography choices: owner plans to provide ideas; preserve blue-led max-five-color constraint until then.
- [ ] Actual commerce, events/ticketing, music, newsletter, submission, and editorial provider/accounts; payment and email credentials must be supplied by the owner at integration time.
- [ ] Approved launch content: owner authorizes all supplied content, but actual product/event/artist/editorial data and social/contact URLs were not attached in this workspace.
- [x] Admin scope: edit all site content, including the surfer's name, products, events, artists, playlists, submissions/newsletter settings, and editorial content.
- [ ] Backend provisioning: no Supabase projects currently exist; the connected account has one organization (EmmanuelJones's Org). Ask the owner to choose the organization and approve any quoted nonzero cost before creating a project.
- [ ] Payment and delivery services: no commerce, ticketing, email/newsletter, or payment provider accounts are selected. The in-site admin is the content management UI; actual payment processing and email delivery need a provider connection and credentials.

## Prioritized discovery — answer during design/integration

1. Share the missing logo choices and color concepts when ready.
2. Which commerce, ticketing, music, newsletter, artist submission, and publishing tools are already used, if any? If none, compare the simplest viable options before wiring payments or sending email.
3. Share actual product, event, artist, editorial, contact, and social materials when ready.
4. Clarify whether the admin panel needs to edit only the character name or also products, events, artists, music, and editorial content.

<!-- Previous questionnaire retained below for context -->

### Original full questionnaire

1. **Purpose and audience:** What should a first-time visitor understand or do, and who is the core audience? Any location or community focus to foreground?
2. **Launch scope:** Which parts must work at launch: online shop/checkout, event booking/tickets, music embeds/playlists, artist submissions, newsletter/contact, or editorial publishing? Which can be visual placeholders for now?
3. **Real content:** What are the correct brand story, contact/social links, shop products, upcoming events, featured artists, music, and first editorial/photo/interview pieces? Share source text or files, or tell us to use clearly marked placeholders.
4. **Surfer character:** Is there an existing approved character/model/reference, name, personality, or animation? Should we reuse the recovered sprite art as an interim asset, or should the surf character be newly designed in the anime-inspired 3D direction?
5. **Visual references:** Any brand marks, images, sites, color preferences within the five-color limit, or type styles to follow? Should the previous pixel-art prototype remain a reference, or should its pixel treatment give way to a more 3D anime look?
6. **“New Wave” organization:** Should Editorial, Photography, Interviews, and Culture appear as subsections/tabs within one New Wave destination, or as direct navigation links nested beneath it?
7. **Brand details:** Confirm exact display name (“New Wave” or “New Waves”), preferred tagline, and whether the example Lagos identity in the old prototype is accurate and should be retained.
8. **Build target:** Is this a visual prototype first, or should we wire real services now? If real integrations are needed, which platforms are already chosen for commerce, events, music, and publishing?
9. **Technical preferences:** Is there a required hosting platform, domain, framework, or account integration? If not, approve choosing the simplest path after inspecting the recovered source.
10. **Finishing format:** For review, is a locally running preview with screenshots sufficient, or is a shareable hosted preview expected? No deployment/publishing is assumed without confirmation.

These are prioritized. Existing visual direction and navigation are settled; questions below target choices not reliably recoverable from the brief or prototype. “Use your best judgment” is a valid answer for any item.

1. **Purpose and audience:** What should a first-time visitor understand or do, and who is the core audience? Any location or community focus to foreground?
2. **Launch scope:** Which parts must work at launch: online shop/checkout, event booking/tickets, music embeds/playlists, artist submissions, newsletter/contact, or editorial publishing? Which can be visual placeholders for now?
3. **Real content:** What are the correct brand story, contact/social links, shop products, upcoming events, featured artists, music, and first editorial/photo/interview pieces? Share source text or files, or tell us to use clearly marked placeholders.
4. **Surfer character:** Is there an existing approved character/model/reference, name, personality, or animation? Should we reuse the recovered sprite art as an interim asset, or should the surf character be newly designed in the anime-inspired 3D direction?
5. **Visual references:** Any brand marks, images, sites, color preferences within the five-color limit, or type styles to follow? Should the previous pixel-art prototype remain a reference, or should its pixel treatment give way to a more 3D anime look?
6. **“New Wave” organization:** Should Editorial, Photography, Interviews, and Culture appear as subsections/tabs within one New Wave destination, or as direct navigation links nested beneath it?
7. **Brand details:** Confirm exact display name (“New Wave” or “New Waves”), preferred tagline, and whether the example Lagos identity in the old prototype is accurate and should be retained.
8. **Build target:** Is this a visual prototype first, or should we wire real services now? If real integrations are needed, which platforms are already chosen for commerce, events, music, and publishing?
9. **Technical preferences:** Is there a required hosting platform, domain, framework, or account integration? If not, approve choosing the simplest path after inspecting the recovered source.
10. **Finishing format:** For review, is a locally running preview with screenshots sufficient, or is a shareable hosted preview expected? No deployment/publishing is assumed without confirmation.

## Assistant architecture — confirmed 2026-11-18

- [x] Choose the surfer-girl assistant as a permanent native feature of the New Wave website, mounted from the shared application layout and persistent across route changes.
- [x] Keep the standalone `assistant-widget.js` separate as a future reusable client-installation product; do not make it the primary New Wave implementation.
- [ ] Import and review the four supplied character-expression images; host optimized assets with the website rather than depending on an unverified third-party image host.
- [x] Build first native assistant UI with idle, talking, thinking, and pointing states, minimize/reopen controls, and delayed greeting. Expression image hosting and QA remain.
- [x] Connect prototype assistant prompts to site section states (Shop, Events, Sound/Music, Artists, About, and New Wave subsections).
- [ ] Make character name and assistant copy configurable through the admin panel.
- [ ] Add keyboard/accessibility support, reduced-motion behavior, mobile sizing, and performance safeguards.
- [ ] Consider secure AI chat through a backend only after the site's content model and service integrations are in place; never expose an API key in client-side JavaScript.

## Implementation backlog — start after discovery

- [ ] Inspect recovered source, package/configuration, design and sprite assets; note ownership and reuse permission. Existing surfer sprite is recovered as reference art; no approved logo files were found.
- [ ] Choose the shortest maintainable implementation path compatible with the recovered code and the user's integration/hosting answers.
- [x] Adapt first prototype to seven navigation destinations and four New Wave content areas.
- [x] Implement initial responsive layout, keyboard focus styling, and reduced-motion handling; full accessibility/performance verification remains.
- [ ] Replace unverified sample artists, events, places, links, and product details with owner-provided content or visibly marked placeholders.
- [ ] Run the project and verify routes/interactions plus desktop and mobile rendering; fix observed issues.
- [ ] Capture preview/screenshots and summarize what is built, what is verified, and the remaining finishing choices.

## Status

- [x] Confirm intended GitHub repository.
- [x] Record recovered design direction and earlier prototype state.
- [x] Create versioned project memory, decision log, and backlog.
- [ ] Complete discovery with owner.
- [x] Build first interactive MagicPath prototype and mirror component source to GitHub.
- [ ] Complete browser/device QA and wire real business services.
- [ ] Present preview and screenshots for finishing review.


## Modern Clippy-inspired surfer guide — implementation update
- [x] Keep the character present when the speech bubble is dismissed.
- [x] Add a delayed first greeting rather than immediately occupying the screen.
- [x] Make the speech bubble dismissible and reopenable by tapping the character.
- [x] Add subtle idle float, hover reaction, contextual prompts on navigation, and reduced-motion handling.
- [ ] Add richer character animation (sprite/rigged 2D or 3D) with blink, mouth movement, wave, surfboard movement and expressive transitions.
- [ ] Add a safe, page-aware suggestion engine that offers help only when relevant and never blocks content.
- [ ] Validate mobile safe-area placement and keyboard/screen-reader behaviour on real devices.


## Character animation — clarified requirements
- [x] Confirm the character is ambient and non-verbal by default; no auto-greeting, auto-chat, or unsolicited speech bubble.
- [x] Update prototype so only tapping/clicking the character opens communication; ordinary section navigation does not make her talk.
- [x] Record Rive recommendation, rig/artwork requirements, state machine contract and performance/accessibility checklist in `docs/CHARACTER_ANIMATION_SPEC.md`.
- [ ] Obtain approved layered character artwork (PSD/AI/SVG/Krita) or agree to reconstruct layers from the supplied flattened PNG references.
- [ ] Produce and integrate Rive `.riv` rig with layered idle motion and non-verbal randomised idle actions.
- [ ] Integrate click-only state machine and verify no uninvited communication can trigger.


## Reconstruction progress — 2026-11-18
- [x] User approved reconstruction from existing character references; user currently phone-only.
- [x] Generated turnaround, expression, layer-breakdown and animation-behaviour studies.
- [x] Generated nine-panel idle-action sprite study and looping GIF concept study.
- [x] Assembled reference and study starter pack (working-session artifact; binary pack not yet committed to repository).
- [ ] Produce clean transparent movable-part artwork; current generated boards are not production layers.
- [ ] Build and test actual skeletal/mesh rig and web runtime.
- [ ] Integrate fully animated guide with click-only communication and verify on mobile.

See `docs/CHARACTER_RECONSTRUCTION_PROGRESS.md` for current status and artifact details.


## Revised priority — 2026-11-23

### Explicitly paused
- [ ] 3D surfer-girl artwork, rigging, Rive integration, expressions, animation, and assistant interactions — **PAUSED by owner**. Do not work on this until explicitly resumed.
- [ ] Character assistant UI and assets — removed from the current website prototype.
- [ ] Final palette, typography, and visual interface redesign — **WAITING for owner direction**.

### Active: page-by-page build
- [ ] Create and verify the real application shell, shared navigation, footer, route handling, responsive behaviour, and error/loading states.
- [ ] Home: complete brand introduction, clear section entry points, featured content modules, and real calls to action.
- [ ] Shop: catalog, category/filter controls, product details, variants, stock, cart, checkout, payment integration, order confirmation, and admin product management.
- [ ] Events: event listing, event detail, availability/capacity, ticket selection, checkout, confirmation, and admin event/ticket management.
- [ ] Sound/Music: playlist and track catalogue, accessible player/embed integration, source links, and admin playlist management.
- [ ] Artists: artist directory, artist detail pages, submission form, submission status/consent, moderation workflow, and admin management.
- [ ] About: brand story, mission, contact methods, social links, FAQs, and policy links using owner-approved content.
- [ ] New Wave: Editorial, Photography, Interviews, and Culture archives; category navigation, individual content detail pages, and publishing workflow.
- [ ] Shared newsletter signup with validation, consent, duplicate handling, success/error states, and actual delivery provider.
- [ ] Admin: secure authentication and role protection; manage products, orders, events, artists, submissions, playlists, editorial content, media, newsletter subscribers, and site settings.
- [ ] Backend: define database schema, storage/media rules, server-side validation, permissions, audit trail, and integration secrets.
- [ ] QA: test every route and interaction on mobile and desktop; keyboard/accessibility, loading, empty, error, and success states.
- [ ] Deployment: environment configuration, domain, production build, smoke tests, backups, and launch checklist.

### Implementation rule
A page is not complete merely because it looks finished. Its controls must perform their stated action, data must be real or clearly identified as sample content, and any unavailable integration must be labelled honestly. Do not report a feature as live until it has been connected and tested.


## Art direction pass — 2026-11-23

- [x] Translate the Dribbble reference into an original New Wave visual language without reusing protected artwork.
- [x] Establish expressive display typography, editorial serif accents, mono micro-labels, more tactile buttons and asymmetrical card treatments.
- [x] Rewrite section headlines, descriptions and calls to action with a more distinctive, playful editorial voice.
- [ ] Review the visual pass in a real browser on mobile and desktop; adjust spacing, type wrapping and contrast from observed results.
- [ ] Replace prototype illustrations and product placeholders with approved original New Wave artwork and real content.
