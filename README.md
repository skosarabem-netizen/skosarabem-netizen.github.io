# skosarabe.com

Portfolio of Swapnil Kosarabe — plain static HTML/CSS/JS, hosted on GitHub Pages.

## Structure

```
index.html                     Home (intro, selected work, archive)
about/index.html               About
project/<name>/index.html      Case studies (same URLs as the old WordPress site)
post-page-blind/, create-a-post/                          Blind deep dives
friend-management-2/, onboarding-experience/, comms/      Rabble deep dives
404.html                       Not-found page
assets/style.css               All styles (colors and spacing are variables at the top)
assets/main.js                 Lazy videos, image lightbox, scroll reveal
assets/media/                  Images (WebP/SVG) and videos (MP4)
```

## Editing

- Text: open the page's `index.html` and edit the text between the tags.
- Images: drop a file in `assets/media/` and reference it with a relative path, e.g. `../../assets/media/my-image.webp` from a project page.
- Convert PNG/JPG to WebP before adding: `cwebp -q 82 input.png -o assets/media/output.webp`
- Videos: use `<video data-src="…mp4" muted loop playsinline preload="none"></video>` — they load and autoplay when scrolled into view.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publish

Push to `main`; GitHub Pages redeploys automatically in about a minute.
