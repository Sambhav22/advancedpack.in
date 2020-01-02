"use strict";

function centerModal() {
    $(this).css("display", "block");
    var dialog = $(this).find(".modal-dialog");
    var offset = ($(window).height() - dialog.height()) / 2;
    dialog.css("margin-top", offset);
}
$(function() {
    $("[data-toggle='tooltip']").tooltip();
});
$(document).ready(function() {
    $(".modal").on("show.bs.modal", centerModal);
    $(".mobile").on("click", function() {
        $(this).next("ul").toggleClass("open");
    });
    $(".closemenu").on("click", function() {
        $(this).parent("li").parent("ul").removeClass("open");
    });
    if ($(window).width() < 991) {
        $(".menu .fa-angle-down").on("click", function() {
            $(".menu .fa-angle-down").not(this).parent("a").next(".submenus").slideUp();
            $(this).parent("a").next(".submenus").stop(!0, !0).slideToggle(400);
            return !1;
        });
    }
    if ($(window).width() < 991) {
        $(".leftmenu").on("click", "ul li a", function() {
            var $this = $(this);
            if ($this.next().hasClass("show")) {
                $this.next().removeClass("show");
                $this.next().slideUp(350);
            } else {
                $this.parent().parent().find("li .submenus").removeClass("show");
                $this.parent().parent().find("li .submenus").slideUp(350);
                $this.next().toggleClass("show");
                $this.next().slideToggle(350);
            }
        });
    }
    $(".basket").on("click", function() {
        $(this).toggleClass("basketopen");
    });
    $(".scrollup").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return !1;
    });
    $(".cartitem").on("click", function() {
        $(".cartbox table").toggleClass("open");
    });
    $(".signin").on("click", function() {
        $(".disable").addClass("opacity");
        $(".textprop").attr("disabled", "disabled");
        $(".opacity .button").attr("disabled", "disabled");
    });
    $(".guest").on("click", function() {
        $(".disable").removeClass("opacity");
        $(".textprop").removeAttr("disabled");
        $(".button").removeAttr("disabled");
    });
    $(".iconbar li a").on("click", function() {
        $(".iconbar li a").removeClass("active");
        $(this).addClass("active");
    });
    $(".gridview").on("click", function() {
        $(".product .item").addClass("col-lg-3");
        $(".product .item .proimg").removeClass("col-lg-3");
        $(".product .item .rating").removeClass("col-lg-9");
        $(".product .item p").removeClass("col-lg-9");
        $(".product .item .catedetail").hide();
        $(".product .item .catedetail").css({
            "text-align": "center"
        });
        $(".product .item .button").css({
            "margin-left": "0"
        });
        $(".product .item").css({
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "none"
        });
    });
    $(".listview").on("click", function() {
        $(".product .item").removeClass("col-lg-3");
        $(".product .item .proimg").addClass("col-lg-3");
        $(".product .item .rating").addClass("col-lg-9");
        $(".product .item p").addClass("col-lg-9");
        $(".product .item .catedetail").show();
        $(".product .item .catedetail").css({
            "text-align": "left"
        });
        $(".product .item .button").css({
            "margin-left": "15px"
        });
        $(".product .item").css({
            "border": "1px solid #efefef"
        });
    });
    $("li.submenu > a").on("click", function() {
        $(this).removeAttr("href");
        var element = $(this).parent("li");
        if (element.hasClass("open")) {
            element.removeClass("open");
            element.children("a").removeClass("active");
            element.find("li").removeClass("open");
            element.find("ul").slideUp(200);
        } else {
            element.addClass("open");
            element.children("a").addClass("active");
            element.children("ul").slideDown(200);
            element.siblings("li").children("ul").slideUp(200);
            element.siblings("li").removeClass("open");
            element.siblings("li").find("li").removeClass("open");
            element.siblings("li").find("ul").slideUp(200);
        }
    });
    $(".pbox").owlCarousel({
        margin: 10,
        nav: !0,
        dots: !0,
        loop: !0,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    $(".cbox").owlCarousel({
        autoplay: !0,
        margin: 10,
        nav: !1,
        dots: !0,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    $(".happyclient").owlCarousel({
        autoplay: !0,
        loop: !0,
        margin: 10,
        nav: !0,
        dots: !0,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
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
    $(".boxslide").owlCarousel({
        autoplay: !0,
        loop: !0,
        margin: 10,
        nav: !1,
        dots: !0,
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
    $(".testicarousel").owlCarousel({
        autoplay: !0,
        loop: !0,
        margin: 10,
        nav: !1,
        dots: !0,
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
    $("#newsletter").modal("show");
    $(".qtyplus").on("click", function(e) {
        e.preventDefault();
        var fieldName = $("input[name='quantity']");
        var currentVal = parseInt(fieldName.val(), 10);
        if (!isNaN(currentVal)) {
            $(fieldName).val(currentVal + 1);
        } else {
            $(fieldName).val(0);
        }
    });
    $(".qtyminus").on("click", function(e) {
        e.preventDefault();
        var fieldName = $("input[name='quantity']");
        var currentVal = parseInt(fieldName.val(), 10);
        if (!isNaN(currentVal) && currentVal > 0) {
            $(fieldName).val(currentVal - 1);
        } else {
            $(fieldName).val(0);
        }
    });
    $("body").on("keyup", "input[name='quantity'], .legend table ul li input[type='text']", function(e) {
        if (/\D/g.test(this.value)) {
            this.value = this.value.replace(/\D/g, "");
        }
    });
});
$(window).on("resize", function() {
    if ($(window).width() < 991) {
        $(".menu .fa-angle-down").on("click", function() {
            $(".menu .fa-angle-down").not(this).parent("a").next(".submenus").slideUp();
            $(this).parent("a").next(".submenus").stop(!0, !0).slideToggle(400);
            return !1
        });
    }
});