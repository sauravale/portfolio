# Portfolio

This is a static GitHub Pages portfolio.

## Current structure

- `index.html`: homepage with choices for CV or portfolio
- `cv.html`: CV page
- `portfolio.html`: compiled portfolio viewer
- `projects.html`: reserved project library page for the next phase
- `assets/pages/`: exported portfolio page images
- `assets/videos/`: MP4 videos used inside portfolio pages
- `assets/cv/`: PDF CV
- `site.config.js`: shared text used across pages
- `common.js`: applies shared text to each page

## Editing shared site text

Edit `site.config.js` instead of changing the same text in every HTML file:

```js
const siteConfig = {
  name: "Your Name",
  role: "Design Portfolio",
  homeTitle: "Selected work, process, and moving-image studies.",
  cvTitle: "Curriculum Vitae",
  portfolioTitle: "Selected Work",
  projectsTitle: "Individual Projects"
};
```

## Adding portfolio pages

1. Export pages or spreads from InDesign as images.
2. Put them in `assets/pages/`.
3. Put MP4 videos in `assets/videos/`.
4. Edit `portfolio.js` and add each page to `portfolioPages`.

Video position values are percentages of the page image:

```js
{
  image: "assets/pages/page-01.jpg",
  alt: "Portfolio page 1",
  videos: [
    {
      src: "assets/videos/project-01.mp4",
      x: 12,
      y: 18,
      width: 38,
      height: 24,
      autoplay: false
    }
  ]
}
```
