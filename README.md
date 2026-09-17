# Vulcan

Corporate site for Vulcan — software for range training complexes.

Static HTML with no build step and no dependencies beyond web fonts.
Everything lives in a single file.

## Run locally

```bash
python3 -m http.server 3100 --directory site
```

Then open <http://localhost:3100>.

## Layout

```
site/index.html      the entire site — hash-routed, 11 pages
.claude/launch.json  local dev-server configuration
```

## Status

Draft. Structure, hierarchy and copy are in place; photography, diagrams
and motion are not yet built. Image slots are marked in the markup with
their intended content.
