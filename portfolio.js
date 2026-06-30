const portfolioPages = [
  /*
  Example page with one embedded video:
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
  */
];

const container = document.querySelector("#portfolioPages");

function toPercent(value) {
  return `${value}%`;
}

function createVideo(video) {
  const element = document.createElement("video");
  element.className = "video-layer";
  element.src = video.src;
  element.controls = true;
  element.playsInline = true;
  element.preload = "metadata";
  element.style.setProperty("--video-x", toPercent(video.x));
  element.style.setProperty("--video-y", toPercent(video.y));
  element.style.setProperty("--video-width", toPercent(video.width));
  element.style.setProperty("--video-height", toPercent(video.height));

  if (video.autoplay) {
    element.autoplay = true;
    element.muted = true;
    element.loop = true;
  }

  return element;
}

function createPage(page, index) {
  const frame = document.createElement("article");
  frame.className = "portfolio-page";

  const image = document.createElement("img");
  image.src = page.image;
  image.alt = page.alt || `Portfolio page ${index + 1}`;
  frame.appendChild(image);

  for (const video of page.videos || []) {
    frame.appendChild(createVideo(video));
  }

  return frame;
}

if (portfolioPages.length === 0) {
  const empty = document.createElement("p");
  empty.className = "empty-state";
  empty.textContent = "Add exported portfolio page images to assets/pages, then list them in portfolio.js.";
  container.appendChild(empty);
} else {
  portfolioPages.forEach((page, index) => {
    container.appendChild(createPage(page, index));
  });
}
