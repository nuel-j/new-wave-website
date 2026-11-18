# New Wave character reconstruction — progress log

> Updated: 2026-11-18  
> Status: reconstruction studies underway; production rig not yet built.

## User-approved direction

The user explicitly approved reconstructing the New Wave surfer-girl from the supplied references because the laptop is currently unavailable and they are working from an iPhone. They asked ChatGPT to handle as much of the work as possible and guide them only when approval or a missing asset is genuinely required.

## Character identity to preserve

- Dark-skinned woman with long golden-brown braids.
- Sunglasses, hoop earrings and layered jewellery.
- Oversized light/cream New Wave T-shirt.
- Dark surf shorts, socks and sneakers.
- Striped New Wave surfboard with green rail.
- Relaxed, playful, confident coastal-club personality.

Keep the existing character recognisable. Do not redesign her as a generic chatbot or change her outfit without approval. Treat generated lettering/logos as approximate; place the official approved New Wave logo as a separate asset during final artwork cleanup.

## Interaction contract — non-negotiable

- Character remains visible as a permanent website companion.
- She performs non-verbal ambient activity while visitors browse.
- She does not open a speech bubble, greet, speak, send notifications, or start a conversation on her own.
- Only an intentional click/tap on the character opens communication.
- Closing the conversation returns her to non-verbal ambient activity.
- Page navigation must never trigger unsolicited dialogue.
- No sound/voice by default.
- Hover can trigger a subtle non-verbal acknowledgement on desktop only; it must never trigger dialogue.
- Respect reduced-motion preferences, mobile safe areas, keyboard access and performance.

## Work completed so far

1. Reviewed the supplied character reference material: original character photograph, expression sheets and previous design references.
2. Generated reconstruction studies including a turnaround, expression set, visual layer breakdown and animation-behaviour planning board.
3. Created a nine-panel idle-action sprite study showing a relaxed stance, blink/look variations, adjusting sunglasses, checking the board, a stretch/playful movement and a return to idle.
4. Created a small looping GIF study from the nine-panel sprite sheet. This is only a visual study, not a production rig.
5. Assembled a downloadable starter pack containing the source references, reconstruction boards, planning crops, sprite sheet, GIF study, preview and README.

## Current artifact locations in the working session

- `/mnt/data/new_wave_character_reconstruction_starter_pack.zip`
- `/mnt/data/new_wave_surfer_girl_idle_study.gif`
- `/mnt/data/new_wave_surfer_girl_turnaround.jpg`
- `/mnt/data/a_vibrant_comic_anime_style_illustration_in_a_3x3.png` (generated nine-panel sprite sheet)
- `/mnt/data/new_wave_character_reconstruction/` (source pack directory)

These are working-session artifacts. The zip is not yet committed as a binary asset to GitHub.

## Important honest status

The generated boards and sprite study are concept/reconstruction references. They are NOT yet:
- Clean production-ready separated transparent body-part layers.
- A weighted mesh or skeletal rig.
- A Rive `.riv` file.
- A fully integrated, verified website character animation.

Do not describe the character as fully rigged or alive in the production sense until those deliverables exist and have been tested.

## Next work

1. Prepare clean, consistent character artwork and transparent part layers (head/face, eyes/lids/brows, mouth shapes, front/back hair/braids, torso/clothing, upper/lower arms, hands, pelvis, upper/lower legs, feet, surfboard and accessories).
2. Preserve hidden overlap artwork at joints so bends do not reveal gaps.
3. Build a 2D skeletal/mesh rig using a free workflow where feasible; validate current free-tool export/runtime limitations before committing to a tool.
4. Create layered idle motion: breathing, irregular blinking, small gaze shifts, hair/clothing sway and weight shifts.
5. Add occasional non-verbal idle actions without a predictable repetitive loop.
6. Add click-only acknowledgement and connect the existing speech bubble. Test that no autonomous communication path exists.
7. Integrate the final character into the shared New Wave layout and test iPhone/mobile performance, reduced motion, accessibility and page navigation.

## User workflow constraint

User currently has only an iPhone and does not think they can perform the reconstruction/rigging steps themselves. ChatGPT should do the technical preparation and implementation wherever available; do not hand the user a complex animation-software workflow. Ask only for approvals or source material that cannot be obtained otherwise.
