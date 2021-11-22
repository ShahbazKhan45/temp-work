$(document).ready(function () {
    AOS.init();
    AOS.init({ disable: 'mobile' });
    $(".menu-btn").click(function () {
        $(".mobile-In").fadeIn();
        $(".mobile-In").css("transform", "translateX(0px)");
    });
    $(".close-btn").click(function () {
        $(".mobile-In").fadeOut();
        $(".mobile-In").css("transform", "translateX(2000px)");
    });

    // GOTO

    $('.various').click(function () {
        var leadprice = $(this).attr('name');
        $(".popupform .leadprice").val(leadprice)
    });


    /*PORTFOLIO*/
    $('.various').click(function () {
        var leadprice = $(this).attr('name');
        $(".popupform .leadprice").val(leadprice)
    });


    $('.lazy').lazy();

    $("#contactform").validate({});
    $(".validate-popupform").validate({});
    $(".validate-ftr").validate({});
    $(".form-section1").validate({});
    $(".form-section2").validate({});
    $(".form-section3").validate({});

    $(".modal-body").mCustomScrollbar({
        autoHideScrollbar: true,
    });


    // setTimeout(function(){ $("body").removeClass("ovr-show"); }, 3000);


    $('.various').click(function () {
        var leadprice = $(this).attr('name');
        $(".popupform .leadprice").val(leadprice)
    });

    var currentIP = $("meta[name=ip2loc]").attr('content');
    var key = '5XpThOAEkfgOvEJ';

    // $.ajax({
    //     method: 'get',
    //     url: 'https://pro.ip-api.com/json/' + currentIP,
    //     data: { key: key },
    //     success: function (data) {
    //         if (data) {
    //             $('input[name=ip2loc_ip]').val(data.query);
    //             $('input[name=ip2loc_isp]').val(data.isp);
    //             $('input[name=ip2loc_org]').val(data.org);
    //             $('input[name=ip2loc_country]').val(data.country);
    //             $('input[name=ip2loc_region]').val(data.regionName);
    //             $('input[name=ip2loc_city]').val(data.city);
    //         }
    //     }
    // });

    // $("#contactform").validate({});
    // $(".validate-popupform").validate({});
    // $(".validate-ftr").validate({});
    // $(".form-section1").validate({});
    // $(".form-section2").validate({});
    // $(".form-section3").validate({});
    // $(".popupform_cs").validate();
    // $("#popupform_td form").validate();
    // $(".popupform_td").validate();
    // $(".popupform_tr").validate();
    // $(".step1_valdate").validate();
    // $(".step2_valdate").validate();
    // $(".step3_valdate").validate();
    // $(".step4_valdate").validate();
    // $(".step5_valdate").validate();
    // $(".step6_valdate").validate();
    // $(".step7_valdate").validate();
    // $(".popup-bounce").validate();
    // $(".checkform").validate();
    // $(".validate-popupform").validate();
    // $(".popupform_llp").validate();
    // $(".popupform_md").validate();

    // $(".modal-body").mCustomScrollbar({
    //     autoHideScrollbar: true,
    // });




    $('#list-btn').click(function () {

        document.getElementById('list-btn').style.display = "none";
        document.getElementById('cross').style.display = "block";
        document.getElementById('menu-list').style.display = "block";

    });
    $('#cross').click(function () {

        document.getElementById('list-btn').style.display = "block";
        document.getElementById('cross').style.display = "none";
        document.getElementById('menu-list').style.display = "none";

    });





    //owlcarousel
    $('.logo-bar').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 15,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplaySpeed: 800,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 6,
            },
            360: {
                items: 3
            }
        }
    });
    $('.author').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 15,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplaySpeed: 800,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,
            },
            360: {
                items: 1
            }
        }
    });
    $('.rating-logo').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 15,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplaySpeed: 800,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
            360: {
                items: 3
            }
        }
    });




    $('.monial-slider').owlCarousel({
        loop: true,
        dots: false,
        margin: 15,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplaySpeed: 800,
        nav: true,
        lazyLoad: true,
        // navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
            360: {
                items: 1
            }
        }
    });

    // Arrow Btn goto up
    let btn = $('#goto-top');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 800) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    // $(window).scroll(function () {
    //     var sticky = $('body'),
    //         scroll = $(window).scrollTop();
    //     if (scroll >= 600) sticky.addClass('fixed');
    //     else sticky.removeClass('fixed');
    // });


    // init Isotope
    var $container = $('.isotope').isotope({
        itemSelector: '.pfimg',

        layoutMode: 'fitRows'

    });

    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $('#filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $container.isotope({
            filter: filterValue
        });
    });

    // bind sort button click
    $('#sorts').on('click', 'button', function () {
        var sortByValue = $(this).attr('data-sort-by');
        $container.isotope({
            sortBy: sortByValue
        });
    });

    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    //****************************
    // Isotope Load more button
    //****************************
    var initShow = 8; //number of items loaded on init & onclick load more button
    var counter = initShow; //counter for load more button
    var iso = $container.data('isotope'); // get Isotope instance

    loadMore(initShow); //execute function onload

    function loadMore(toShow) {
        $container.find(".hidden").removeClass("hidden");

        var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function (item) {
            return item.element;
        });
        $(hiddenElems).addClass('hidden');
        $container.isotope('layout');

        //when no more to load, hide show more button
        if (hiddenElems.length == 0) {
            jQuery("#showMore").hide();
        } else {
            jQuery("#showMore").show();
        };

    }





    //when filter button clicked
    $("#filters").click(function () {
        $(this).data('clicked', true);

        loadMore(initShow);
    });

    $('.filter-dis').click(function () {
        $('.zz button').prop("disabled", true);
    });

    $('.filter-enb').click(function () {
        $('.zz button').removeAttr("disabled");
    });



    $('.filter-disable').on('click', function () {
        $('.zzz button').addClass('disable_element');
    });




    /*
    end*/




});


// let notShow = document.getElementById("banner-video").style.display = "none";
// setTimeout(function () {
//     document.getElementById("banner-video").style.display = "block";
// }, 9000)


