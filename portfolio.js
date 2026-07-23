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
        zIndex: 1,
        autoplay: true
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
    alt: "Portfolio page 2",
    videos: [
      {
        src: "assets/videos/Demoset long.mp4",
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        zIndex: 1,
        autoplay: true
      }
    ]
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
    alt: "Portfolio page 7",
    videos: [
      {
        src: "assets/videos/MOV_0412.mp4",
        x: .70,
        y: 12.5,
        width: 75.15,
        height: 75.2,
        autoplay: true
      }
    ]
  },
  {
    image: "assets/pages/26-07-01 Portfolio8.png",
    alt: "Portfolio page 8",
    videos: [
      {
        src: "assets/videos/New battery temp test.mp4",
        x: .70,
        y: 12.5,
        width: 75.15,
        height: 75.2,
        autoplay: true
      }
    ]
  },
  {
    image: "assets/pages/26-07-01 Portfolio9.png",
    alt: "Portfolio page 9",
    videos: [
      {
        src: "assets/videos/etee adapter.mp4",
        x: 40.5,
        y: 32.4,
        width: 35.25,
        height: 35.25,
        autoplay: true
      }
    ]
  },
  {
    image: "assets/pages/26-07-01 Portfolio10.png",
    alt: "Portfolio page 10",
    videos: [
      {
        src: "assets/videos/Station 2 extended X-Base.mov",
        x: .70,
        y: 12.5,
        width: 75.15,
        height: 75.2,
        zIndex: 1,
        autoplay: true
      }
    ]
  },
  {
    image: "assets/pages/26-07-01 Portfolio11.png",
    alt: "Portfolio page 11"
  },
  {
    image: "assets/pages/26-07-01 Portfolio12.png",
    alt: "Portfolio page 12",
    videos: [
      {
        src: "assets/videos/11062021_algorithm 1 VS algorithm 2.mp4",
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        zIndex: 1,
        autoplay: true
      }
    ]
  },
  {
    image: "assets/pages/26-07-01 Portfolio13.png",
    alt: "Portfolio page 13",
    videos: [
      {
        src: "assets/videos/2021-05-23 21-30-13.mp4",
        x: 44.65,
        y: 9.5,
        width: 31.1,
        height: 44.4,
        autoplay: true
      }
    ]
  },
  {
    image: "assets/pages/26-07-01 Portfolio14.png",
    alt: "Portfolio page 14",
    videos: [
      {
        src: "assets/videos/Tello drone control steps.mp4",
        x: 38.75,
        y: 12.2,
        width: 37,
        height: 37.1,
        autoplay: true
      }, 
      {
        src: "assets/videos/etee moondust.mp4",
        x: 38.75,
        y: 51.1,
        width: 37,
        height: 37,
        autoplay: true
      }
    ]
  },
  {
    image: "assets/pages/26-07-01 Portfolio15.png",
    alt: "Portfolio page 15",
    videos: [
      {
        src: "assets/videos/MOV_CINEMA_CLIP_012_20230602105443303.mp4",
        x: .70,
        y: 12.5,
        width: 75.15,
        height: 75.2,
        autoplay: true
      }
    ]
  },
  {
    image: "assets/pages/26-07-01 Portfolio16.png",
    alt: "Portfolio page 16"
  },
  {
    image: "assets/pages/26-07-01 Portfolio17.png",
    alt: "Portfolio page 17"
  },
  {
    image: "assets/pages/26-07-01 Portfolio18.png",
    alt: "Portfolio page 18"
  },
  {
    image: "assets/pages/26-07-01 Portfolio19.png",
    alt: "Portfolio page 19"
  },
  {
    image: "assets/pages/26-07-01 Portfolio20.png",
    alt: "Portfolio page 20"
  },
  {
    image: "assets/pages/26-07-01 Portfolio21.png",
    alt: "Portfolio page 21"
  },
  {
    image: "assets/pages/26-07-01 Portfolio22.png",
    alt: "Portfolio page 22"
  },
  {
    image: "assets/pages/26-07-01 Portfolio23.png",
    alt: "Portfolio page 23"
  },
  {
    image: "assets/pages/26-07-01 Portfolio24.png",
    alt: "Portfolio page 24"
  },
  {
    image: "assets/pages/26-07-01 Portfolio25.png",
    alt: "Portfolio page 25"
  },
  {
    image: "assets/pages/26-07-01 Portfolio26.png",
    alt: "Portfolio page 26"
  },
  {
    image: "assets/pages/26-07-01 Portfolio27.png",
    alt: "Portfolio page 27"
  },
  {
    image: "assets/pages/26-07-01 Portfolio28.png",
    alt: "Portfolio page 28"
  },
  {
    image: "assets/pages/26-07-01 Portfolio29.png",
    alt: "Portfolio page 29"
  },
  {
    image: "assets/pages/26-07-01 Portfolio30.png",
    alt: "Portfolio page 30"
  }
];

const container = document.querySelector("#portfolioPages");
const gitLfsMediaBase =
  "https://github.com/sauravale/portfolio/raw/refs/heads/main/";

function toPercent(value) {
  return `${value}%`;
}

function resolveVideoSource(source) {
  if (!source.startsWith("assets/videos/")) {
    return source;
  }

  const encodedPath = source
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

  return `${gitLfsMediaBase}${encodedPath}`;
}

function createVideo(video) {
  const element = document.createElement("video");
  element.className = "video-layer";
  element.src = resolveVideoSource(video.src);
  element.controls = true;
  element.playsInline = true;
  element.preload = "metadata";
  element.style.setProperty("--video-x", toPercent(video.x));
  element.style.setProperty("--video-y", toPercent(video.y));
  element.style.setProperty("--video-width", toPercent(video.width));
  element.style.setProperty("--video-height", toPercent(video.height));
  element.style.setProperty("--video-z-index", video.zIndex ?? 3);

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
