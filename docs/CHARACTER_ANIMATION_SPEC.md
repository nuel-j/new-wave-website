# New Wave character companion — animation brief

> Version 1.0 · 2026-11-18  
> Status: production animation asset not yet supplied

## Experience rule

The surfer girl is a permanent, visible character in the New Wave experience. She is not a conventional always-open chatbot.

- On page load she is visibly present in a small, unobtrusive position, playing non-verbal idle animation.
- She does not open a speech bubble, display a greeting, speak, send a notification, or change into a talking state on her own.
- A visitor must deliberately click/tap her to open the assistant.
- Only after that explicit action may the speech bubble appear and the assistant communicate.
- Closing the bubble returns her to non-verbal idle. The character remains visible and clickable.
- Navigating between sections must not cause unsolicited assistant messages.
- Hover may trigger a subtle non-verbal look/reaction on desktop; it must never trigger dialogue. Touch must have equivalent click/tap affordance.
- No sound or voice is enabled by default.

## Recommended production tool: Rive

Use Rive for the character illustration, skeletal rig, animation timelines, and state machine. The web app uses Rive's React runtime to display one reusable .riv asset and send explicit interaction inputs.

Why this is the preferred fit:
- Rive can rig vector and raster artwork with bones, meshes, constraints, inverse kinematics and editable curves.
- Joystick inputs can drive eye direction, head turns and expressive poses.
- State machines and listeners can handle pointer, hover and click/tap interactions in the animation asset.
- One Rive asset can carry the artwork, animations and interaction logic; the same asset runs in React and other supported runtimes.
- The code can keep the character idle until a real click/tap event is received.

## State machine contract

Recommended state machine name: `NewWaveGuide`.

### Non-verbal states
- `Idle_Breath`: subtle body breathing, weight shift and gentle balance.
- `Idle_Blink`: natural irregular blink layered over idle; not a frequent metronomic blink.
- `Idle_LookAround`: glance towards the sea, horizon, board or nearby detail.
- `Idle_HairClothes`: small secondary motion in hair, loose clothing and accessories.
- `Idle_BoardBalance`: subtle board or body balance / foot adjustment.
- `Idle_FunAction`: occasional short non-verbal activity such as a relaxed stretch, checking the surf, adjusting sunglasses, sitting on the board, a tiny celebratory move, or a casual wave. These are occasional and should not all play in a predictable loop.
- `Hover_Notice`: subtle eye/head acknowledgement only; never dialogue.
- `Click_Greet`: one clear intentional wave/acknowledgement, entered only after click/tap.
- `Click_ReturnToIdle`: return to ambient non-verbal activity when the visitor closes the assistant.

These should be combined as animation layers/blends where possible (for example breathing + blinking + hair sway) so the character does not have to jump between disconnected full-body loops.

### Inputs / events
- `VisitorClicked` (trigger): the ONLY entry into the communication flow.
- `VisitorClosed` (trigger): closes dialogue and returns to idle.
- `PointerX` / `PointerY` (optional, desktop only): subtle eye/head gaze, clamped to a small range.
- `ReducedMotion` (boolean): switch to near-static idle / no secondary motion.
- `PageVisible` (boolean): pause or reduce animation when the document is hidden.
- Optional app-driven expression inputs for `thinking`, `pointing`, `talking` are only used after the visitor has opened the guide.

The React component owns dialogue open/close state and page-aware content. Rive owns the character's animation. Do not put AI credentials or secret keys in the browser runtime.

## Character art required

Best input: original layered PSD, AI, SVG, or Krita file with transparent canvas and the existing design intact. The four supplied expression images are useful visual references, but flattened expressions alone are not a proper animation rig.

Minimum separated pieces (or equivalent vector layers):
1. Head base / face, neck, back hair and front hair/fringe.
2. Eye whites, irises/pupils, eyelids, brows and glasses/sunglasses as separate layers where practical.
3. Mouth shapes: neutral/closed, smile, open, laugh; more visemes only if voiced dialogue is later approved.
4. Torso, clothing, shoulders and pelvis.
5. Left/right upper arms, forearms and hands separated at the joints.
6. Upper/lower legs and feet separated at knees/ankles.
7. Surfboard, leash and small accessories on separate layers.
8. Any loose clothing, hair strands, jewellery or accessories intended to sway.

Parts need overlap/hidden artwork at the joints so bends do not reveal gaps. Supply the highest-resolution source available and do not flatten shadows/lighting that must move with parts. If only flattened PNGs exist, the artwork must be separated and reconstructed by an animator; expect compromises and some repainting.

## Performance and accessibility requirements

- Keep the character small and fixed at the edge of the viewport; never cover key text or controls.
- Keep idle motion restrained and avoid constantly moving the whole screen.
- Use transform/opacity or the Rive runtime rather than expensive animated layout changes.
- Pause or throttle rendering when the page is hidden or the character is offscreen.
- Respect `prefers-reduced-motion`; offer a user-visible pause/disable motion setting.
- Provide a semantic button hit target, accessible label, visible keyboard focus, and keyboard activation.
- Test on mid-range mobile hardware and check battery, initial load size, frame rate, and layout safe areas.

## Candidate technology comparison

| Option | Strengths | Limits | Decision |
|---|---|---|---|
| Rive | Rigging, vector/raster mesh deformation, state machines, click listeners, React/web runtimes | Production .riv export needs a paid editor tier if shipping without Rive splash screen | Recommended |
| Spine | Mature 2D skeletal character animation, robust blending and physics constraints | More of the interaction/state logic is handled by application code; animation authoring/export is a separate paid tool | Strong alternative if a specialist Spine animator is already available |
| Live2D Cubism | Very expressive anime-style face/head/upper-body model; motion and expression system | Best suited to portrait/upper-body presentation; Web SDK/core licence needs separate attention; full-body prop-heavy surf action is not the easiest path | Not first choice |
| dotLottie | Compact animation bundle; web state machines can respond to pointer/click events | Better suited to vector UI/motion graphics than a complex, continuously rigged full-body character | Not first choice |
| CSS/static PNGs | Cheap and immediate for small hover/bob effects | Cannot provide convincing independent joints, facial rigging, layered secondary motion, or rich state transitions | Prototype only |

## Build phases

1. Collect and inspect original character artwork and confirm it is approved for modification/animation.
2. Separate/rebuild art layers and construct a clean Rive rig.
3. Create idle animation layers and a small pool of occasional, non-verbal activities.
4. Add the click-only state machine; verify that no autonomous dialogue path exists.
5. Integrate the .riv asset into the shared React layout; connect the explicit click event to the existing speech bubble.
6. QA desktop, iPhone/Android mobile, reduced-motion, keyboard and screen-reader behaviour.
7. Optimise asset size and verify performance before adding more animations or AI chat.

## Current prototype state

MagicPath component revision: `473783991951044608`.

The current web prototype now keeps the bubble closed by default, has no delayed auto-greeting, and does not open or speak when a visitor navigates sections. Clicking the character opens the speech bubble; closing it leaves the character present. The current character image still uses static image states with light CSS motion. This is not yet the fully rigged Rive character described above.
