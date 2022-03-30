new Swiper('.slider-products__container',{
	navigation: {
		nextEl: '.slider-products__btn-next',
		prevEl: '.slider-products__btn-prev',
	},
	slidesPerView: 5,
	spaceBetween: 20,
	speed: 1000,
	slidesPerGroup: 5,
	loop: true,
	
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		350: {
			slidesPerView: 2,
		},
		550: {
			slidesPerView: 3,
		},
		700: {
			slidesPerView: 4,
		},
		1000: {
			slidesPerView: 5,
		}
	}

});

new Swiper('.inro-container',{
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	speed: 1000,
	


});

$(function() {
    /* Fixed Header */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });



    /* Nav Toggle */
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");

    });
});