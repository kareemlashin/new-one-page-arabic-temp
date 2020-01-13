$(document).ready(function () {
    $("#load").fadeOut(1000, function () {
        $("body,html").css("overflow", "auto")
    })

    AOS.init();

    var typed = new Typed('.element', {
        strings: [" Freelancer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
    var typed = new Typed('.element2', {
        strings: ["السيد ابراهيم"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });

    $("#list li a").click(function () {
        let dataChose = $(this).attr("data-filter");
        if (dataChose == "all") {
            $(".filter").slideDown(1000);
        } else {
            $('.filter').not("." + dataChose).slideUp(1000);
            $('.filter').filter("." + dataChose).slideDown(1000);
        }
    })

    $("#list li a").click(function () {
        $(this).addClass("activeX");
        $("#list li a").not(this).removeClass('activeX');
    })
    $('.owl-carousel').owlCarousel({
        rtl: true,
        loop: true,

        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    let myProg = $(".prog").offset().top;
    $(window).scroll(function () {
        let myWind = $(window).scrollTop();

        if (myWind > myProg) {
            $('#circle').circleProgress({
                value: 0.70,
                size: 80,
                fill: {
                    gradient: ['#0bceaf']
                }
            });
            $('#circle2').circleProgress({
                value: 0.75,
                size: 80,
                fill: {
                    gradient: ['#0bceaf']
                }
            });
            $('#circle3').circleProgress({
                value: 0.80,
                size: 80,
                fill: {
                    gradient: ['#0bceaf']
                }
            });
            $('#circle4').circleProgress({
                value: 0.75,
                size: 80,
                fill: {
                    gradient: ['#0bceaf']
                }
            });
            $('#bar1').barfiller({

                // color of bar
                barColor: '#0bceaf',

                // shows a tooltip
                tooltip: false,

                // duration in ms
                duration: 700,

                // re-animate on resize
                animateOnResize: false,

                // custom symbol
                symbol: "%"

            });

            $('#bar2').barfiller({

                // color of bar
                barColor: '#0bceaf',

                // shows a tooltip
                tooltip: false,

                // duration in ms
                duration: 700,

                // re-animate on resize
                animateOnResize: false,

                // custom symbol
                symbol: "%"

            });
            $('#bar3').barfiller({

                // color of bar
                barColor: '#0bceaf',

                // shows a tooltip
                tooltip: false,

                // duration in ms
                duration: 700,

                // re-animate on resize
                animateOnResize: false,

                // custom symbol
                symbol: "%"

            });
            $('#bar4').barfiller({

                // color of bar
                barColor: '#0bceaf',

                // shows a tooltip
                tooltip: false,

                // duration in ms
                duration: 700,

                // re-animate on resize
                animateOnResize: false,

                // custom symbol
                symbol: "%"

            });
            $('#bar5').barfiller({

                // color of bar
                barColor: '#0bceaf',

                // shows a tooltip
                tooltip: false,

                // duration in ms
                duration: 700,

                // re-animate on resize
                animateOnResize: false,

                // custom symbol
                symbol: "%"

            });

        }
    })
    function validName(name) {
        let nameRegex = /^[A-zا-ي]{2,}$/;
        if (nameRegex.test(name)) {
            return true;
        } else {
            return false;
        }
    }

    function validEmail(email) {
        let emailRegex = /^[A-z][A-z0-9]{2,}@(yahoo|gmail).com$/;
        if (emailRegex.test(email)) {
            return true;
        } else {
            return false;
        }
    }

    $("#inpName").keyup(function () {
        let nameValue = $("#inpName").val();
        if (validName(nameValue) == true) {
            $("#erorrName").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#erorrName").css("display", "block")
            $("#send").attr("disabled", "true")

        }
    })

    $("#inpEmail").keyup(function () {
        let emailValue = $("#inpEmail").val();
        if (validEmail(emailValue) == true) {
            $("#erorrEmail").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#erorrEmail").css("display", "block")
            $("#send").attr("disabled", "true")
        }
    })

    $("#messageInp").keyup(function () {
        $("#manyChar").css("display", "block")
        let manyCharMax = $(this).attr("maxlength");
        let manyChar = document.getElementById("messageInp").value;
        let x = manyChar.length;
        $("#manyChar").text(manyCharMax - x)
        if (manyCharMax - x == 0) {
            $("#manyChar").css("color", "#0bceaf")
        } else {
            $("#manyChar").css("color", "#888")

        }
    })


    $("#send").click(function () {

        resetInput();
    })

    function resetInput() {
        let inputs = document.getElementsByClassName("inp");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
    }
    $(".navMenu  li a").click(function () {
        let myHref = $(this).attr("href");
        $("body,html").animate({ scrollTop: $(myHref).offset().top + 30 + 'px' }, 1000)
    })

    $(".upPage").click(function () {
        $("body ,html").animate({ scrollTop: 0 }, 2000)
    })
    $(".menu").click(function () {
        let menuLeft = $("nav").css("left");

        if (menuLeft == -250 + 'px') {
            $("nav").css("left", '0px');
            $(this).css("left", '250px');
            let menuLeft = $("nav").css("left");

        } else if (menuLeft == 0 + 'px') {
            $("nav").css("left", '-250px');
            $(this).css("left", '0px')

            let menuLeft = $("nav").css("left");
        }
    })

    let contSectionOffset = $(".contSection").offset().top;
    $(window).scroll(function () {
        let myWindow = $(window).scrollTop();
        if (myWindow > contSectionOffset) {
            function inc1() {
                let num1 = $("#oneCount").text();
                if (num1 < 200) {
                    num1++;
                    clearInterval(inc1)
                }
                $("#oneCount").text(num1)


            }
            function inc2() {
                let num2 = $("#twoCount").text();
                if (num2 < 200) {
                    num2++;
                    clearInterval(inc2)
                }
                $("#twoCount").text(num2)


            }
            function inc3() {
                let num3 = $("#threeCount").text();
                if (num3 < 200) {
                    num3++;
                    clearInterval(inc3)
                }
                $("#threeCount").text(num3)


            }

            function inc4() {
                let num4 = $("#fourCount").text();
                if (num4 < 200) {
                    num4++;
                    clearInterval(inc4)
                }
                $("#fourCount").text(num4)


            }
            setInterval(inc3, 100);
            setInterval(inc2, 100);
            setInterval(inc1, 100);
            setInterval(inc4, 100);
        }
    })




})