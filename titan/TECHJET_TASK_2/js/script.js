$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    nav:false,
    stagePadding:125,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.owl-carousel.offer').owlCarousel({
    loop:true,
    margin:100,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})
    

