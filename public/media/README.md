# Media slots

Drop a file here, add its id to `MEDIA_READY` in `assets/data.js`, and the
page swaps the placeholder for the real asset. No build step.

Images: `<id>.jpg`   Video: `<id>.mp4`

| id                 | Kind  | Ratio | What it shows |
|--------------------|-------|-------|----------------|
| home-control-room  | Video | 4:3   | Range control room before a serial, operators at consoles, wall of lane displays |
| home-range-dawn    | Image | 3:2   | Indoor range, lanes receding to the target line, lights low, nobody present |
| rcs                | Video | 16:9  | Control room during a serial, slow push in, 12 seconds |
| vms                | Image | 3:2   | Four synchronised camera views of an empty range, over an operator shoulder |
| eva                | Image | 3:2   | Perimeter fenceline after dark, thin brand blue box over a distant figure |
| pwats              | Image | 4:3   | Facility layout map with position markers and movement paths |
| ewms               | Image | 4:3   | Bank of secure weapon lockers, one door open and empty |
| eams               | Image | 4:3   | Ammunition issue counter, shutter closed, scanner and terminal |
| hums               | Image | 4:3   | Engineering console in a plant room, health dashboard abstracted |
| as                 | Image | 4:3   | Self service registration kiosk in an arrival foyer, screen dark |
| integration-bench  | Image | 4:3   | Lab bench, rack mounted equipment, patch cables, two monitors |
| assurance-estop    | Image | 3:2   | Wall mounted emergency stop in a corridor, close crop, hard shadow |
| company-floor      | Image | 4:3   | Small engineering workspace, two people at monitors seen from behind |
| portrait-1..3      | Image | 1:1   | Leadership headshots. Photograph real people, do not generate these. |

## Shared direction

Append to every generation prompt, unchanged:

> Cold desaturated interior, near-black ground #08090B, steel grey surfaces, one
> accent of brand blue #5EA5FF and nothing else warm. Cinematic, restrained,
> architectural. Real depth of field, fine film grain. No text, no signage, no
> insignia, no identifiable faces, no weapons in frame.

Generate `home-control-room` first and use it as the reference image for the
rest. That is what keeps the light and colour consistent across the site.
