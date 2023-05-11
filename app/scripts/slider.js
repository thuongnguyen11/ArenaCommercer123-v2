 
document.addEventListener("shopify:section:load", () => {
  slider();
});



function slider() {

  Object.values(document.getElementsByClassName("owl-carousel")).forEach(slide => 
     $(slide).owlCarousel({
      loop: true,
      margin: parseInt(slide.dataset.spacing),
      autoplay: true,
      autoplayTimeout: 1000,
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
        },
  
      }
    })
    
 )
 }

 window.onload = slider();

//   document.addEventListener("shopify:section:load", (e)=> {
//     if (document.getElementById(`shopify-section-${e.detail.sectionId}`).classList.contains('abc')) {
//         slider();
// }})


    // Object.values(document.getElementsByClassName("owl-carousel")).forEach(banner => 
    //     banner.addEventListener("shopify:section:load", slider()));

    //     document.addEventListener("shopify:section:load", (e)=> {
    //         Object.values(document.getElementsByClassName("owl-carousel"))
    //         if (document.getElementById(`shopify-section-${e.detail.sectionId}`).classList.contains('custom_banner')) {
    //             slider();
    //     })


// for(let i = 0; i < Object.values(document.getElementsByClassName("owl-carousel")).length; i++) {
//     var temp = Object.values(document.getElementsByClassName("owl-carousel"))[i].dataset.data;
//     if(isSlider) {
//         Object.values(document.getElementsByClassName("owl-carousel"))[i].addEventListener("shopify:section:load", slider());
//         console.log(temp)
//     }
// }


// Object.values(document.getElementsByClassName("owl-carousel")).forEach(slide => )