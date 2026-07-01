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
  {
    image: "assets/pages/26-07-01 Portfolio.png",
    alt: "Portfolio page 1"
  },
  {
    image: "assets/pages/26-07-01 Portfolio2.png",
    alt: "Portfolio page 2"
  },
  {
    image: "assets/pages/26-07-01 Portfolio3.png",
    alt: "Portfolio page 3"
  },
  {
    image: "assets/pages/26-07-01 Portfolio4.png",
    alt: "Portfolio page 4"
  },
  {
    image: "assets/pages/26-07-01 Portfolio5.png",
    alt: "Portfolio page 5"
  },
  {
    image: "assets/pages/26-07-01 Portfolio6.png",
    alt: "Portfolio page 6"
  },
  {
    image: "assets/pages/26-07-01 Portfolio7.png",
    alt: "Portfolio page 7"
  },
  {
    image: "assets/pages/26-07-01 Portfolio8.png",
    alt: "Portfolio page 8"
  },
  {
    image: "assets/pages/26-07-01 Portfolio9.png",
    alt: "Portfolio page 9"
  },
  {
    image: "assets/pages/26-07-01 Portfolio10.png",
    alt: "Portfolio page 10"
  },
  {
    image: "assets/pages/26-07-01 Portfolio11.png",
    alt: "Portfolio page 11"
  },
  {
    image: "assets/pages/26-07-01 Portfolio12.png",
    alt: "Portfolio page 12"
  },
  {
    image: "assets/pages/26-07-01 Portfolio13.png",
    alt: "Portfolio page 13"
  },
  {
    image: "assets/pages/26-07-01 Portfolio14.png",
    alt: "Portfolio page 14"
  },
  {
    image: "assets/pages/26-07-01 Portfolio15.png",
    alt: "Portfolio page 15"
  }
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
