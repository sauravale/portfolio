# Portfolio Website PRD

## Project Summary

This project is a static GitHub Pages portfolio site intended to replace or augment a PDF portfolio. The goal is to preserve the visual control of an InDesign/PDF workflow while allowing videos to play inline inside portfolio pages, avoiding the jarring back-and-forth of opening external video sites or browser PDF viewers.

Project folder:

```text
D:\Documents\Projects\portfolio
```

## Current Phase

The current phase is a lightweight static website with:

- A homepage with routes to CV and Portfolio
- A CV page using a designed PNG image preview
- A compiled portfolio page that will render exported portfolio page images and optional video overlays
- A shared configuration file for reusable site text
- A reserved project library page for the next phase

## Desired Site Structure

Current phase:

```text
Home
  CV
  Portfolio with images and embedded videos
```

Next phase:

```text
Home
  CV
  Individual Projects Library
    Project A
    Project B
    Project C
  Compiled Portfolio
    Portfolio with images and embedded videos
```

## Design Direction

The site should act as a seamless web version of a designed portfolio, not as a generic landing page. It should keep the image-based portfolio workflow while adding native web video playback.

The user may redesign the homepage later. The current implementation is intentionally generic and functional.

## Key Decisions

### Hosting

Use GitHub Pages.

Recommended setup:

- Repository name: `portfolio`
- Source: deploy from `main` branch
- Folder: `/root`
- Expected URL format:

```text
https://yourusername.github.io/portfolio/
```

Custom domain can be added later.

### PDF vs Website

Embedded video inside PDFs was considered but deprioritized because PDF video support is inconsistent across browsers, mobile devices, Preview, Acrobat, and other viewers.

The website approach is preferred because:

- Videos can play inline
- Pages can still preserve the InDesign visual design
- It works better across devices
- It avoids sending viewers to separate websites

### CV Strategy

Three levels were discussed:

1. Link directly to a PDF
2. Display a designed CV image inside the website
3. Rebuild the CV as native HTML

Current implementation uses level 2:

- Main CV experience is a PNG image preview
- PDF remains available as a fallback/download link

Later, level 3 is recommended for a more seamless and accessible CV.

### Shared Configuration

The site now uses a shared JavaScript config file instead of manually repeating values such as the user's name across every page.

This was chosen instead of YAML because GitHub Pages can serve JavaScript directly without a build step, while YAML would require a parser or static-site generator.

The pattern maps well to embedded-systems thinking:

- `site.config.js`: shared constants/config
- `common.js`: shared logic that applies config values to pages
- `data-*` attributes in HTML: injection points

## Current Files

```text
portfolio/
  index.html
  cv.html
  portfolio.html
  projects.html
  styles.css
  site.config.js
  common.js
  portfolio.js
  README.md
  assets/
    cv/
      26-06-25 CV_Saurav_Ale.png
      26-06-25 CV_Electronics_Saurav_Ale.pdf
    pages/
    videos/
```

## File Roles

### `index.html`

Homepage with two primary paths:

- CV
- Portfolio

It uses `site.config.js` and `common.js` for shared text such as site name and home title.

### `cv.html`

Displays the designed CV image:

```text
assets/cv/26-06-25 CV_Saurav_Ale.png
```

Keeps a fallback PDF link:

```text
assets/cv/26-06-25 CV_Electronics_Saurav_Ale.pdf
```

### `portfolio.html`

Compiled portfolio viewer. It contains an empty section that `portfolio.js` fills with page images and video overlays.

### `portfolio.js`

Data-driven portfolio renderer.

Example intended structure:

```js
const portfolioPages = [
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
];
```

The video coordinates are percentages relative to the portfolio page image.

### `projects.html`

Reserved for the later individual project library.

### `site.config.js`

Single source of truth for repeated text:

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

### `common.js`

Applies `siteConfig` values to HTML elements marked with data attributes such as:

```html
data-site-name
data-home-title
data-cv-title
```

### `styles.css`

Contains site-wide styles, including:

- Header/nav layout
- Homepage choice cards
- CV preview frame
- Portfolio page image layout
- Video overlay positioning

## Current UX

The current CV experience is:

1. User opens homepage
2. User clicks CV
3. CV page opens inside the website
4. Designed CV PNG is shown inline
5. PDF version is available through a button

The current portfolio experience is:

1. User opens homepage
2. User clicks Portfolio
3. Portfolio page loads
4. If no pages have been configured yet, an empty-state message appears
5. When page images are added to `portfolio.js`, they render as scrollable portfolio pages
6. Videos can be positioned over those page images

## Next Implementation Steps

1. Replace placeholder site text in `site.config.js`
2. Export first InDesign portfolio page as an image
3. Place exported image in:

```text
assets/pages/
```

4. Place any MP4 videos in:

```text
assets/videos/
```

5. Add first real page object to `portfolio.js`
6. Tune video overlay percentages
7. Push to GitHub
8. Enable GitHub Pages from repository settings

## Later Enhancements

- Native HTML CV generated from `cv.config.js`
- `projects.config.js` for individual project metadata
- Project library page with cards and descriptions
- Individual project detail pages
- Downloadable compiled PDF portfolio fallback
- Custom domain
- More refined visual styling based on CV/portfolio aesthetics

## Open Questions

- Should the homepage be custom-designed in InDesign first, then implemented in HTML/CSS?
- Should the compiled portfolio use single pages or spreads?
- Should videos autoplay muted, require manual play, or use a mix?
- What maximum file size should be allowed for videos?
- Should project pages be hand-authored or generated from a shared config file?

