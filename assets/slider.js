(() => {
  // app/scripts/slider.js
  document.addEventListener("shopify:section:load", () => {
    slider();
  });
  function slider() {
    Object.values(document.getElementsByClassName("owl-carousel")).forEach((slide) => $(slide).owlCarousel({
      loop: true,
      margin: parseInt(slide.dataset.spacing),
      autoplay: true,
      autoplayTimeout: 1e3,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: parseInt(slide.dataset.numofitemmobile)
        },
        768: {
          items: parseInt(slide.dataset.numofitem768)
        },
        992: {
          items: parseInt(slide.dataset.numofitem992)
        },
        1280: {
          items: parseInt(slide.dataset.numofitemdesktop)
        }
      }
    }));
  }
  window.onload = slider();
})();
