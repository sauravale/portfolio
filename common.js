function setText(selector, value) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
}

function setTitle(pageName) {
  const parts = [pageName, siteConfig.name].filter(Boolean);
  document.title = parts.join(" | ");
}

setText("[data-site-name]", siteConfig.name);
setText("[data-site-role]", siteConfig.role);
setText("[data-home-title]", siteConfig.homeTitle);
setText("[data-cv-title]", siteConfig.cvTitle);
setText("[data-portfolio-title]", siteConfig.portfolioTitle);
setText("[data-projects-title]", siteConfig.projectsTitle);

const pageName = document.body.dataset.pageName;
setTitle(pageName);
