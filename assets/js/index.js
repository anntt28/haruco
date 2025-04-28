$(function () {
 $(".play-video-slider").click(function () {
  $(this).siblings(".video-slider").get(0).play();
  $(this).addClass("active");
 });
 var swiper2 = new Swiper(".product-category-h .slider-tab-p", {
  loop: true,
  loopedSlides: 1,
  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 5,
  freeMode: true,
  watchSlidesProgress: true,
  spaceBetween: 10,
  slideToClickedSlide: true,
  navigation: {
   nextEl: ".swiper-button-next-1",
   prevEl: ".swiper-button-prev-1",
  },
  breakpoints: {
   470: {
    slidesPerView: 3,
    spaceBetween: 8,
   },
   768: {
    slidesPerView: 5,
    spaceBetween: 8,
   },
   1200: {
    slidesPerView: 7,
    spaceBetween: 8,
   },
  },
 });
 var swiper3 = new Swiper(".product-category-h .slider-product-p", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 24,
  navigation: {
   nextEl: ".swiper-button-next-2",
   prevEl: ".swiper-button-prev-2",
  },
  pagination: {
   el: ".swiper-pagination-2",
   clickable: true,
  },
  thumbs: {
   swiper: swiper2,
  },
 });
 var swiper4 = new Swiper(".slider-review-customer", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
   nextEl: ".swiper-button-next-4",
   prevEl: ".swiper-button-prev-4",
  },
  pagination: {
   el: ".swiper-pagination-1",
   clickable: true,
  },
  breakpoints: {
   1024: {
    slidesPerView: 3,
    spaceBetween: 30,
   },
   576: {
    slidesPerView: 2,
    spaceBetween: 30,
   },
  },
 });
 var swiper5 = new Swiper(".slider-blog-news", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
   567: {
    slidesPerView: 3,
    spaceBetween: 30,
   },
   1024: {
    slidesPerView: 4,
    spaceBetween: 30,
   },
  },
 });
 var swiper5 = new Swiper(".slider-product-by-category", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
   567: {
    slidesPerView: 3,
    spaceBetween: 24,
   },
   1200: {
    slidesPerView: 5,
    spaceBetween: 24,
   },
  },
 });
 var swiper5 = new Swiper(".slider-product-by-category-small", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
   567: {
    slidesPerView: 3,
    spaceBetween: 24,
   },
   1200: {
    slidesPerView: 5,
    spaceBetween: 20,
   },
  },
  navigation: {
   nextEl: ".swiper-button-next-small",
   prevEl: ".swiper-button-prev-small",
  },
 });
 var swiper6 = new Swiper(".product-haruco-slider", {
  cssMode: false,
  loopedSlides: 4,
  slideToClickedSlide: true,
  paginationClickable: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  navigation: {
   nextEl: ".swiper-button-next-cate",
   prevEl: ".swiper-button-prev-cate",
  },
  pagination: {
   el: ".swiper-pagination-3",
   clickable: true,
  },
  breakpoints: {
   567: {
    slidesPerView: 2,
   },
   768: {
    slidesPerView: 3,
   },
   1200: {
    slidesPerView: 5,
    spaceBetween: 25,
    allowTouchMove: false,
   },
  },
 });
 $('.content-page-cate-pr .woocommerce-ordering input[type="radio"]').each(function (index) {
  $(this).next("label").addBack().wrapAll("<div class='button-box'></div>");
 });
 $(".dropdown-submenu .sub-m .btn-open").on("click", function (e) {
  $(this).parent(".sub-m").next("ul").toggle();
  $(this).toggleClass("active");
  e.stopPropagation();
  e.preventDefault();
 });
 $(".btn-feature .btn-green").on("click", function (e) {
  $(this).parents(".mod-reviews").find(".comment-h").toggle("active");
  $(this).toggleClass("active");
  e.stopPropagation();
  e.preventDefault();
 });
 $(".btn-search-m button").click(function () {
  $(".header-bottom-mobile, .btn-search-m input").toggleClass("active-search");
  $(".btn-search-m input").focus();
 });
 // $('.box-menu-content-news h4').click(function(){
 //   $('.box-menu-content-news').toggleClass('active');
 // });
 $(".table-of-content li a").click(function () {
  $("html, body").animate(
   {
    scrollTop: $($(this).attr("href")).offset().top - 100,
   },
   "linear"
  );
  return false;
 });
 const paragraphs = $(".content-shop-readmore p");
 paragraphs.slice(2).hide();

 $(".btn-content-shop-readmore").click(function (e) {
  e.preventDefault();
  paragraphs.show();
  $(this).addClass("d-none");
  $(".btn-content-shop-collapse").removeClass("d-none");
 });
 $(".btn-content-shop-collapse").click(function (e) {
  e.preventDefault();
  paragraphs.slice(2).hide();
  $(this).addClass("d-none");
  $(".btn-content-shop-readmore").removeClass("d-none");
 });
 $(".grid-view-button").click(function () {
  $(".list-product-page-child").removeClass("list-view").addClass("grid-view");
  $(this).addClass('active');
        $('.list-view-button').removeClass('active');
 });
 $(".list-view-button").click(function () {
  $(".list-product-page-child").removeClass("grid-view").addClass("list-view");
  $(this).addClass('active');
        $('.grid-view-button').removeClass('active');
 });
 $(".menu-item-has-children")
  .on("mouseover", function () {
   $(this).children(".sub-menu").addClass("active");
  })
  .on("mouseout", function () {
   $(this).children(".sub-menu").removeClass("active");
  });

 $(".menu-aside .menu-item-has-children").append('<div class="icon"><img src="/wp-content/themes/nwstheme/assets/images/arrow-down-s-fill.svg" alt=""></div>');
 $(".menu-aside .menu-item-has-children .icon").on("click", function () {
  $(this).siblings(".sub-menu").slideToggle();
 });

 $("#btn-hamburger").on("click", function () {
  $(".menu-aside-page").toggleClass("show");
  $("body").addClass("overflow-hidden");
 });
 // menu sp
 $(".menu-aside-page .sub-menu").hide();
 $(".menu-aside-page .icon").on("click", function () {
  $(this).parents(".has-child").siblings(".sub-menu").slideToggle();
 });

 $(".backdrop , .menu-aside-close, .menu-aside-page a").on("click", function () {
  $(".menu-aside-page").removeClass("show");
  $("body").removeClass("overflow-hidden");
  $(".menu-aside-page .sub-menu").hide();
 });
 $(".item__guide").on("click", function () {
  $("body").addClass("overflow-hidden");
  $("#guideModal").addClass("show");
 });

 $(".item__initiative").on("click", function () {
  $("body").addClass("overflow-hidden");
  $("#initiativeModal").addClass("show");
 });

 $(".item__topic").on("click", function () {
  $("body").addClass("overflow-hidden");
  $("#topicModal").addClass("show");
 });

 $("#questionModal .btn").on("click", function () {
  $("body").addClass("overflow-hidden");
  $("#sendSuccess").addClass("show");
 });

 $(".popup-backdrop, .popup-child .close, btn-done").on("click", function () {
  $("body").removeClass("overflow-hidden");
  $("#guideModal").removeClass("show");
  $("#initiativeModal").removeClass("show");
  $("#topicModal").removeClass("show");
  $("#sendSuccess").removeClass("show");
 });
 $("#chooseFile").bind("change", function () {
  var filename = $("#chooseFile").val();
  if (/^\s*$/.test(filename)) {
   $(".file-upload").removeClass("active");
   $("#noFile").text("No file chosen...");
  } else {
   $(".file-upload").addClass("active");
   $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
  }
 });
});
