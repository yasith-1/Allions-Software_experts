(function ($) {
    "use strict";

    // Spinner

    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 2000);
    };

    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 2, 'easeInOutExpo');
        return false;
    });




    // Whatsapp floating button

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.float').fadeIn('slow');
        } else {
            $('.float').fadeOut('slow');
        }
    });

    $('.float').click(function () {
        window.open("https://wa.me/94751887145", "_blank");
        return false;
    });



    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Client carousel
    $(".client-carousel").owlCarousel({
        autoplay: true,
        infinite: true,
        smartSpeed: 1000,
        // slideSpeed: 500,
        margin: 90,
        dots: false,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });

})(jQuery);


function Inquire() {

    // alert("ok");
    var moreinfo = document.getElementById("moreinfo");
    var aboutus = document.getElementById("aboutus");

    aboutus.className = "d-block";
    moreinfo.classList.toggle("d-none");
}


function goback() {
    // alert("ok");
    var moreinfo = document.getElementById("moreinfo");
    var aboutus = document.getElementById("aboutus");

    aboutus.className = "d-none";
    moreinfo.className = "d-block";

}

function requestSend() {
    // alert("ok");

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var mobile = document.getElementById("mob");
    var msg = document.getElementById("msg");

    // alert(name.value);
    // alert(email.value);
    // alert(mobile.value);
    // alert(msg.value);

    var f = new FormData();
    f.append("n", name.value);
    f.append("e", email.value);
    f.append("m", mobile.value);
    f.append("msg", msg.value);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function () {
        if (r.readyState == 4 & r.status == 200) {

            var response = r.responseText;
            // alert(response);
            if (response == "success") {

                Swal.fire({
                    title: "Message Sent Succesfully",
                    text: "Thank You",
                    icon: "success"
                }).then((result) => {

                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                });
            } else if (response == "Update") {
                Swal.fire({
                    title: "Successfully Updated Your Message",
                    text: "SAVED",
                    icon: "success"
                }).then((result) => {

                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                });
            } else {
                Swal.fire({
                    title: response,
                    text: "oops",
                    icon: "warning"
                })
            };

        }
    };

    r.open("POST", "requestProcess.php", true);
    r.send(f);


}









/*Swipper*/
var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5
    },
    keyboard: {
        enabled: true
    },
    mousewheel: {
        thresholdDelta: 70
    },
    spaceBetween: 60,
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    },

    // autoplay: {
    //     delay: 2000, // 3 seconds delay between slides
    //     disableOnInteraction: false, // Continue autoplay after user interactions
    // },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

swiper.slideTo(1, false, false);
