$(document).ready(function () {

    const minPrice = document.getElementById("Filter-filter.v.price.gte ");
    const maxPrice = document.getElementById("Filter-filter.v.price.lte ");
    var inputs = [minPrice, maxPrice];

    var slider = document.getElementById('slider');

    noUiSlider.create(slider, {
        start: [Number(minPrice.min), Number(maxPrice.max)],
        connect: true,
        // tooltips: true,
        range: {
            'min': Number(minPrice.min),
            'max': Number(maxPrice.max)
        }
        
        
    });

    slider.noUiSlider.on('update', function (values) {
        var handleValue = slider.noUiSlider.get();
        // inputs[handle].innerHTML = values[handle];
        minPrice.value = handleValue[0];
        maxPrice.value = handleValue[1];
    });
    // inputs.forEach(function (input, handle) {

    //     input.addEventListener('change', function () {
    //         stepsSlider.noUiSlider.setHandle(handle, this.value);
    //     });
    
    //     input.addEventListener('keydown', function (e) {
    
    //         var values = stepsSlider.noUiSlider.get();
    //         var value = Number(values[handle]);
    
    //         var steps = stepsSlider.noUiSlider.steps();
    
    //         var step = steps[handle];
    
    //         var position;
    
            
    //         switch (e.which) {
    //             case 13:
    //                 stepsSlider.noUiSlider.setHandle(handle, this.value);
    //                 break;
    //             case 38:
                    
    //                 position = step[1];
    
                    
    //                 if (position === false) {
    //                     position = 1;
    //                 }
    
    //                 // null = edge of slider
    //                 if (position !== null) {
    //                     stepsSlider.noUiSlider.setHandle(handle, value + position);
    //                 }
    
    //                 break;
    
    //             case 40:
    
    //                 position = step[0];
    
    //                 if (position === false) {
    //                     position = 1;
    //                 }
    
    //                 if (position !== null) {
    //                     stepsSlider.noUiSlider.setHandle(handle, value - position);
    //                 }
    
    //                 break;
    //         }
    //     });
    // });
});
