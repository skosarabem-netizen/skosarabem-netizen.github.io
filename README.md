# skosarabe.com

Portfolio of Swapnil Kosarabe, built with [Astro](https://astro.build) and published to GitHub Pages automatically on every push to `main`.

## Add or edit a project

Each project is one file in `src/content/projects/`. Copy an existing one, e.g. `rabble.mdx`, and change the top part:

```yaml
---
title: "Project name"
summary: "One sentence about it."
kind: "work"            # work = selected work, archive = older, sub = deep dive inside another project
order: 2                # position in the list
path: "project/my-project"   # the page's address
org: "Company"
years: "2025 – 2026"
role: "Lead Designer"
tags: ["Mobile", "AI"]
cover: "my-project-cover.webp"   # a file in public/assets/media
---
```

Then write the story below it. Every `## Heading` becomes a chapter with its title pinned on the left.

Building blocks you can use in the story:

| Write | Shows |
|---|---|
| `<Img src="/assets/media/x.webp" />` | An image (click to zoom) |
| `<Video src="/assets/media/x.mp4" />` | A silent looping video |
| `<YouTube id="abc123" />` | A YouTube video |
| `<Gallery cols={2}> …images… </Gallery>` | Images side by side |
| `<Cards><Card>…</Card><Card>…</Card></Cards>` | A row of cards (pain points, goals) |
| `<Statement>…</Statement>` | A big highlighted statement |
| `<Stat>52%</Stat>` | A big number |
| `<Eyebrow>Pain point 1</Eyebrow>` | A small label |

Images: put them in `public/assets/media/`. Convert PNG/JPG to WebP first: `cwebp -q 82 input.png -o public/assets/media/output.webp`

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Publish

Push to `main`. GitHub builds and publishes the site in about a minute (see the Actions tab).
