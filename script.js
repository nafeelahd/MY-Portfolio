(function () {
  var root = document.documentElement;
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!prefersReducedMotion.matches && "IntersectionObserver" in window) {
    var revealTargets = document.querySelectorAll(
      ".hero-copy > *, .hero-art, .hero-footnote, .section-heading, .about-copy, .project-card, .skill-group, .timeline li, .contact-topline, .contact-content, .contact-bottom"
    );
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -5% 0px" });

    revealTargets.forEach(function (target, index) {
      target.classList.add("reveal");
      if (target.matches(".project-card, .skill-group")) {
        target.classList.add(index % 2 === 0 ? "reveal-delay-1" : "reveal-delay-2");
      }
      revealObserver.observe(target);
    });
    root.classList.add("motion-ready");
  }
})();
