window.addEventListener("scroll", function() {
  const header = document.getElementById("header");
  if (window.scrollY > 20) {  // adjust trigger point
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});


$(document).ready(function(){

  // Testimonial 
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 20, // Space between items, matches CSS margin
    nav: true, // Show navigation arrows
    dots: false, // Hide the pagination dots (optional, but matches the image)
    autoplay: false, // Set to true if you want auto-sliding
    navText: ["\u2190", "\u2192"], // Unicode for Left and Right Arrows
    responsive:{
        0:{
            items: 1 // On small screens, show 1 item
        },
        768:{
            items: 2 // On screens >= 768px, show 2 items
        }
    }
  });


// History 

 $(".history-carousel").owlCarousel({
    loop: true,
    margin: 20, // Space between items, matches CSS margin
    nav: true, // Show navigation arrows
    dots: false, // Hide the pagination dots (optional, but matches the image)
    autoplay: false, // Set to true if you want auto-sliding
    navText: ["\u2190", "\u2192"], // Unicode for Left and Right Arrows
    responsive:{
        0:{
            items: 1 // On small screens, show 1 item
        },
        768:{
            items: 2 // On screens >= 768px, show 2 items
        },
         992:{
            items: 3 // On screens >= 768px, show 2 items
        }
    }
  });



    



});






$(document).ready(function(){
    //Navbar minimize on scroll down
   
    //Get active carousel item on team member
    $('.team .person').click(function() {
        let id = $(this).attr('id')
        let carouselId = '#' + id + '-car'
        $(carouselId).addClass('active').siblings().removeClass('active')
    })

 
})