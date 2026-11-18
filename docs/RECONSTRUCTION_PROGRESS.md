# Character reconstruction progress

> Updated 2026-11-18

## Completed in this work session
- Reviewed the existing New Wave character direction and reference boards.
- Generated multiple consistent turnaround studies (front, three-quarter, profile and back).
- Generated expression, pose, animation-behaviour and click-only interaction concept boards.
- Extracted a transparent WebP character cutout from the front-facing turnaround study for early layout/scale tests.
- Prepared a working asset pack containing original references and generated studies.

## Files available in the conversation
- `new_wave_character_reconstruction_starter_pack.zip` — working references and concept pack.
- `new_wave_surfer_girl_cutout.webp` — transparent single-image cutout.
- `new_wave_surfer_girl_turnaround.jpg` — turnaround preview.
- `new_wave_surfer_girl_idle_study.gif` — low-resolution idle-behaviour proof of concept.

## What is not complete
- The turnaround images and animation boards are flattened concept artwork, not editable source layers.
- The transparent WebP is also a single flattened cutout; it cannot provide independent limb, braid or facial animation.
- The GIF is a low-resolution study and is not suitable as the final website character.
- No production Rive/Spine/Live2D skeletal rig or exported animation file exists yet.
- The new visual assets have not yet been uploaded into the MagicPath site build because binary asset transfer from this execution environment was unavailable. Do not claim they are deployed.

## Next implementation steps
1. Create a clean, high-resolution master illustration based on the approved reference.
2. Reconstruct transparent layers with overlap at joints: head/face, eyes/eyelids, mouth shapes, front/back hair groups, torso, upper/lower arms, hands, pelvis, upper/lower legs, feet, surfboard and accessories.
3. Rig and weight the layers in a 2D skeletal editor.
4. Build layered non-verbal idle animation plus occasional activities.
5. Wire the Rive/web state machine so visitor click is the only entry to dialogue; close returns to silent idle.
6. Upload the production animation asset and integrate it in the shared layout; test iPhone/mobile performance.

## Behaviour remains non-negotiable
Always visible, quietly alive, never auto-speaks, never opens a bubble by itself, and never starts dialogue on navigation. Only an explicit click/tap starts communication.
