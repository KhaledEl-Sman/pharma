$(document).ready(function () {

    //////////////////////////////General\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    //nav-toggle
    $('.first-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });

    //resize
    if ($(window).width() > 972) {
        $(".down-list").css("display", "inline-block");
        $(".right-list").css("display", "none");
    } else {
        $(".right-list").css("display", "inline-block");
        $(".down-list").css("display", "none");
    }

    //navbar dropdown
    $(".down-list").mouseover(function () {
        $(".down").css("transform", "rotate(180deg)");
    });
    $(".down-list").mouseleave(function () {
        $(".down").css("transform", "rotate(0deg)");
    });

    $(".pages").mouseover(function () {
        $(".down").css("transform", "rotate(180deg)");
    });
    $(".pages").mouseleave(function () {
        $(".down").css("transform", "rotate(0deg)");
    });

    $(".right-list").mouseover(function () {
        $(".right").css("transform", "rotate(180deg)");
    });
    $(".right-list").mouseleave(function () {
        $(".right").css("transform", "rotate(0deg)");
    });

    $(".pages").mouseover(function () {
        $(".right").css("transform", "rotate(180deg)");
    });
    $(".pages").mouseleave(function () {
        $(".right").css("transform", "rotate(0deg)");
    });

    //resize
    $(window).resize(function () {
        if ($(window).width() > 972) {
            $(".down-list").css("display", "inline-block");
            $(".right-list").css("display", "none");
        } else {
            $(".right-list").css("display", "inline-block");
            $(".down-list").css("display", "none");
        }
    })

    //scroll
    $(window).scroll(function () {
        //up button
        if ($(window).scrollTop() >= 320) {
            $(".up").css("display", "block");
        } else {
            $(".up").css("display", "none");
        }
    })

    //click up button
    $(".up").click(function () {
        $(window).scrollTop(0);
    })

    //wow
    new WOW().init();

    //////////////////////////////index.html\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  

    //home slider
    let images = ['1.png', '2.jpg', '3.jpg'];
    let index = 0;
    function gameLoop() {
        if (index == 3) {
            index = 0;
        }
        x = setTimeout(gameLoop, 5000);
        $(".home-header").css("background-image", 'url(./images/home-slider/' + images[index] + ')');
        index++;
    }
    gameLoop();

    //counter
    $('.counter').counterUp({
        delay: 4,
        time: 1000
    });

    //reviews-carousel
    {
        $(".reviews-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: ".reviews-nav"
        });
        $(".reviews-nav").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            draggable: true,
            autoplay: true,
            autoplaySpeed: 2500,
            asNavFor: ".reviews-slider",
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            letiableWidth: false,
            centerPadding: "-10%",
            arrows: false,
            responsive: [
                {
                    breakpoint: 1007,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });
    }

    //////////////////////////////medicine.html\\\\\\\\\\\\\\\\\\\\\\\\\\\\\    

    //sub category
    let condation = true;
    $('.sub').slideUp(0);
    $('.side-bar .category i').click(function () {
        if (condation) {
            $(this).css('transform', 'rotate(0deg)');
            condation = false;
        } else {
            $(this).css('transform', 'rotate(-90deg)');
            condation = true;
        }
        $(this).siblings().eq(1).slideToggle(200);
    })


    //medicines-carousel
    $("#medicines-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 2000,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    //////////////////////////////single-product.html\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    //show image
    let imageCondation = false;
    $('.single-product .show').click(function (e) {
        if (e.target.src == undefined) {
            $(this).css('display', 'none');
            $('body').css('overflow', 'auto');
            imageCondation = false;
        }
    })

    $('.single-product .pic img').click(function () {
        $('.single-product .show').css('display', 'flex');
        $('body').css('overflow', 'hidden');
        imageCondation = true;
    })

    document.addEventListener("keydown", function (e) {
        if (e.keyCode == 27 && imageCondation) {
            $('.single-product .show').css('display', 'none');
            $('body').css('overflow', 'auto');
            imageCondation = false;
        }
    })

    //single-product-info
    $(".single-product-info .body .description").fadeIn(0);
    $(".single-product-info .body .reviews").fadeOut(0);
    $('#reviews').click(function () {
        $(".single-product-info .body .description").fadeOut(300, function () {
            $(".single-product-info .body .reviews").fadeIn(300);
        });
        $("#description").removeClass('active');
        $(this).addClass('active');
    })
    $('#description').click(function () {
        $(".single-product-info .body .reviews").fadeOut(300, function () {
            $(".single-product-info .body .description").fadeIn(300);
        });
        $("#reviews").removeClass('active');
        $(this).addClass('active');
    })

    //////////////////////////////pharmacy.html\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    //Pharmacy-info
    $(".pharmacy-body .overview").fadeIn(0);
    $(".pharmacy-body .pharmacy-reviews").fadeOut(0);
    $(".pharmacy-body .news").fadeOut(0);
    $('#pharmacy-reviews').click(function () {
        $(".pharmacy-body .overview").fadeOut(200, function () {
            $(".pharmacy-body .news").fadeOut(200, function () {
                $(".pharmacy-body .pharmacy-reviews").fadeIn(200)
            });
        });
        $("#overview").removeClass('active');
        $("#news").removeClass('active');
        $(this).addClass('active');
    })
    $('#overview').click(function () {
        $(".pharmacy-body .pharmacy-reviews").fadeOut(200, function () {
            $(".pharmacy-body .news").fadeOut(200, function () {
                $(".pharmacy-body .overview").fadeIn(200)
            });
        });
        $("#pharmacy-reviews").removeClass('active');
        $("#news").removeClass('active');
        $(this).addClass('active');
    })
    $('#news').click(function () {
        $(".pharmacy-body .pharmacy-reviews").fadeOut(200, function () {
            $(".pharmacy-body .overview").fadeOut(200, function () {
                $(".pharmacy-body .news").fadeIn(200)
            });
        });
        $("#pharmacy-reviews").removeClass('active');
        $("#overview").removeClass('active');
        $(this).addClass('active');
    })

    //////////////////////////////checkout.html\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    $('#card').click(function () {
        if ($('#card').is(':checked')) {
            $('.option2').css("display", 'block');
        }
    });
    $('#cash').click(function () {
        if ($('#cash').is(':checked')) {
            $('.option2').css("display", 'none');
        }
    });

    //////////////////////////////alert.html\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    $(".new-alert").keyup(function () {
        let value = $(this).val().toLowerCase();
        if (value.length != 0) {
            $(".alarm ul").css("display", "block");
            $('.alarm ul li').each(function () {
                if ($(this).html().toLowerCase().includes(value)) {
                    $(this).css('display', 'block');
                } else {
                    $(this).css('display', 'none');
                }
            })
        } else {
            $(".alarm ul").css("display", "none");
            $('.alarm ul li').each(function () {
                $(this).css('display', 'block');
            })
        }
    });

    $('.alarm ul li').click(function () {
        $('.new-alert').val($(this).html());
        $('.alarm ul li').each(function () {
            $(this).css('display', 'none');
        })
        $(this).css('display', 'block');
    })

    //Disable past dates
    let dtToday = new Date();
    let month = dtToday.getMonth() + 1;
    let day = dtToday.getDate();
    let year = dtToday.getFullYear();
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();
    let maxDate = year + '-' + month + '-' + day;
    $('input[type="date"]').each(function () {
        $(this).attr("min", maxDate);
    })

    //countdown
    function countdownTimeStart(duration, display) {
        let countDownDate = new Date().getTime() + (duration * 3600000);

        // Update the count down every 1 second
        let x = setInterval(function () {

            // Get todays date and time
            let now = new Date().getTime();

            // Find the distance between now an the count down date
            let distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            // Output the result
            display.innerHTML = hours + ":" + minutes + ":" + seconds;

            // If the count down is over
            if (distance < 0) {
                clearInterval(x);
                display.innerHTML = "EXPIRED";
            }
        }, 1000);
    }

    window.onload = function () {
        let x = 0;
        $('.countDown').each(function () {
            let duration = "", line = $('.duration').eq(x).html(), display = document.querySelectorAll('.countDown')[x];
            for (let i = 0; i < line.length; i++) {
                let words = line.split(" ");
                duration = words[0];
            }
            countdownTimeStart(duration, display);
            ++x;
        })
    };

})
