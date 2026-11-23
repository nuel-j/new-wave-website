# New Wave website

> Version 1.3 · 2026-11-18 · Source of truth for the website project

New Wave is a lifestyle and culture brand whose website should let visitors feel its calm, relaxed, uplifting beach energy. It is not tied to Lagos or any specific location. The website should feel like a playful coastal club and independent culture publication: retro-futurist digital nostalgia, anime-inspired 3D character art, and a blue-led palette capped at five colors.

## Direction already agreed

- Voice and feeling: calm, relaxed, uplifting, warm, lively, welcoming, curious, creative, playful.
- Visual world: aquatic/surf theme; retro-futurist and digitally nostalgic; anime-inspired 3D.
- Palette: blue base; no more than five colors.
- Previously planned persistent surfer character/background: paused by owner on 2026-11-23; excluded from the current website until explicitly resumed.
- Navigation: **Home, Shop, Events, Sound/Music, Artists, About, New Wave**.
- The **New Wave** section covers Editorial, Photography, Interviews, and Culture.
- Never use the label “Journal”.
- All sections and business functions should work at launch. The owner's stated functional priorities are shop checkout, music, artist submissions, and newsletters; events/tickets and other sections must also be functional.
- Historical character concept only: a configurable 3D surfer-girl guide. This work is paused and the character has been removed from the current website.
- The pixel-art aesthetic may influence selected details but should not dominate or become visually blinding.
- Editorial, Photography, Interviews, and Culture are interactive subsections within one New Wave destination, revealed through polished nested/button interactions.
- The owner will supply color concepts. Logo options were previously shared, but are not present in the recovered local files or accessible preview; retrieve them before choosing.
- The requested review is a shareable preview suitable for showing clients.

## Owner discovery answers (2026-11-18)

The website's purpose is to express a calm, relaxed lifestyle and culture vibe that makes visitors feel they can leave their worries behind while still feeling inspired to keep going. It is not associated with Lagos. Everything should be functional for launch; no visual-only modules are accepted as final functionality. The owner authorizes the use of their client's content and says the client has permission for all supplied materials. Technical stack and hosting may be chosen for speed and maintainability, subject to later revision. No logo choice, color concepts, external reference sites/images, platform accounts, or operational credentials were available in this workspace at the time of the answers.

## Prior work recovered

The earlier project was prototyped in MagicPath as “New Wave - Website Prototype” (project ID `465104457697488896`), component “New Wave multi-page prototype” (ID `465104552639729664`, generated name `brightly-moon-1445`). Its first successful build produced revision `465104552639729665` and a share route at [designs.magicpath.ai/v1/brightly-moon-1445](https://designs.magicpath.ai/v1/brightly-moon-1445). That initial preview was verified at the time; its current availability has not been checked.

The recovered first prototype had seven interactive page states (Home, Shop, Events, Sound, Artists, New Wave, About), a pixel-art sunset/ocean panel, moving ticker, editorial cards, and an optional minimisable guide character. Its sample content was illustrative and needs owner review before launch. A later surfer/timeline redesign and sprite artwork were saved locally but the later revision was not uploaded or publicly verified.

Recovered local source and artwork from the previous workspace:
- `work/newwave-ocean/src/components/generated/NewWaveMultiPagePrototype.tsx`
- `work/newwave-ocean/src/components/generated/NewWaveMultiPagePrototype.css`
- `work/newwave-magicpath/build/src/components/generated/NewWaveMultiPagePrototype.tsx`
- `work/newwave-magicpath/build/src/components/generated/NewWaveMultiPagePrototype.css`
- `work/newwave-magicpath/build/assets/newwave-surf-sprites.png`
- Additional recovered files include `src/App.tsx`, `src/index.css`, sprite WebP previews, and MagicPath component archives. These live outside this repository until deliberately imported.

Known prior preview content includes Lagos coordinates, named example artists, and dated event listings. Treat those as prototype copy, not confirmed business facts.

## Fastest safe path

Use the empty `nuel-j/new-wave-website` repository as the project home. Reuse and adapt the recovered prototype and sprite art after checking the actual files; preserve the established direction and replace illustrative facts with confirmed content. Decide the implementation stack and page/content model from the available source and constraints, then build and run locally, verify desktop and mobile rendering and navigation, and only then present the preview/screenshots for finishing decisions.

## Current state

- Repository selected: `nuel-j/new-wave-website` (public, empty at discovery, writable).
- `nuel-j/ai-security-lab` is a separate security project and is not the website repository.
- Project memory, decisions, and backlog are recorded in `docs/DECISIONS.md` and `docs/BACKLOG.md`.
- First interactive website prototype has been built in MagicPath (component revision `465113707945541632`) and its source is mirrored under `prototype/components/generated/`.
- The first prototype has seven section states, nested New Wave subsections, responsive layout, newsletter interaction, and product preview interactions. The surfer-girl assistant has since been removed by owner instruction on 2026-11-23. Real commerce, ticketing, music playback, artist submissions, and newsletter delivery remain integration work.
- Older conversation history beyond the supplied reference preview was not retrievable in this session; the summary above uses available project memory and recovered local files.


### Historical assistant interaction direction (paused)
The earlier Clippy-inspired surfer-girl guide experiment is retained in project history only. It has been removed from the current website and must not be reintroduced until the owner explicitly resumes character work.


## Current development direction — 2026-11-23

- The 3D surfer-girl character and assistant are **paused**. They must not appear in the current website build. Do not spend implementation time on character art, rigging, animation, assistant UI, or character assets until the owner explicitly resumes that work.
- The current prototype has had the character UI, assistant state, remote expression-image dependencies, and assistant CSS removed.
- Visual redesign is intentionally on hold: do not finalise palette, typography, layout styling, or brand interface changes until the owner supplies updated colour and interface direction.
- Active work is page-by-page implementation and internal functionality. The page requirements and completion criteria are recorded in `docs/PAGE_BLUEPRINT.md`.
- Do not describe prototype-only interactions as live services. Commerce, ticketing, music, artist submissions, newsletter delivery, and admin workflows require real implementation and provider configuration.


## Run the current application shell

The repository now includes a Vite + React + TypeScript entry point that mounts the recovered New Wave prototype.

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

The application shell has been scaffolded but has not yet been run through a local dependency install/build in this session. Verify the build in Replit or another Node-enabled environment before treating it as production-ready.
