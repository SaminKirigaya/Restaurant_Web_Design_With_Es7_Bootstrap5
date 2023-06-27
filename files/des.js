if(window.innerWidth < 992){
    document.getElementById("brandi").classList.remove("ms-5");
    document.getElementById("brandi").classList.add("mb-2");

    document.getElementById("namx").classList.remove("mx-auto");
    document.getElementById("namx").classList.add("fntsz");
    document.getElementById("namx").classList.add("d-flex");
    document.getElementById("namx").classList.add("justify-content-center");

    document.getElementById("smdisif").classList.add("d-flex");
    document.getElementById("smdisif").classList.add("justify-content-center");

    document.getElementById("car2-prev").classList.add("nobtn");
    document.getElementById("car2-next").classList.add("nobtn");

    


}

if(window.innerWidth>991){
    document.getElementById("fd").classList.remove("food");
    document.getElementById("fd").classList.add("foodz");

    document.getElementById("mentitls").classList.remove("metitl");
    document.getElementById("mentitls").classList.add("mentitlbg");

    document.getElementById("specmen").classList.remove("specmenu");
    document.getElementById("specmen").classList.add("specmenubg");

    document.getElementById("corslds").classList.remove("corsl");
    document.getElementById("corslds").classList.add("corslbg");

    


}

//Carousel
var carouselWidth = $("#car-inn")[0].scrollWidth;
var cardWidth = $("#car-itm").width();
var scrollPosition = 0;
$("#car-next").on("click", function () {
    if (scrollPosition < (carouselWidth - cardWidth * 3)) { //check if you can go any further want 3 item in each line highest
      scrollPosition += cardWidth;  //update scroll position
      $("#car-inn").animate({ scrollLeft: scrollPosition },600); //scroll left
    }
  });

$("#car-prev").on("click", function () {
if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    $("#car-inn").animate(
    { scrollLeft: scrollPosition },
    600
    );
}
});


//second carsouel
var carouselWidth2 = $("#car2-inn")[0].scrollWidth;
var cardWidth2 = $("#car2-itm").width();
var scrollPosition2 = 0;
$("#car2-next").on("click", function () {
    if (scrollPosition2 < (carouselWidth2 - cardWidth2 * 2)) { //check if you can go any further want 3 item in each line highest
      scrollPosition2 += cardWidth2;  //update scroll position
      $("#car2-inn").animate({ scrollLeft: scrollPosition2 },600); //scroll left
    }
  });

$("#car2-prev").on("click", function () {
if (scrollPosition2 > 0) {
    scrollPosition2 -= cardWidth2;
    $("#car2-inn").animate(
    { scrollLeft: scrollPosition2 },
    600
    );
}
});


var map = L.map('map').setView([23.73927, 90.38727], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([23.73927, 90.38727]).addTo(map);