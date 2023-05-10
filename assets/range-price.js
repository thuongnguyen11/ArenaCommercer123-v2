(() => {
  // app/scripts/range-price.js
  $(document).ready(function() {
    const minPrice = document.getElementById("Filter-filter.v.price.gte ");
    const maxPrice = document.getElementById("Filter-filter.v.price.lte ");
    var inputs = [minPrice, maxPrice];
    var slider = document.getElementById("slider");
    noUiSlider.create(slider, {
      start: [Number(minPrice.min), Number(maxPrice.max)],
      connect: true,
      range: {
        "min": Number(minPrice.min),
        "max": Number(maxPrice.max)
      }
    });
    slider.noUiSlider.on("update", function(values) {
      var handleValue = slider.noUiSlider.get();
      minPrice.value = handleValue[0];
      maxPrice.value = handleValue[1];
    });
  });
})();
