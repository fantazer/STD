$(document).ready(function(){function e(){var e=navigator.userAgent.toLowerCase();return e.indexOf("msie")!=-1&&parseInt(e.split("msie")[1])}e()<10&&e()&&($("body").empty(),$("body").prepend('<div class="old-browser"><div class="old-browser-text"> Браузер не поддерживается =(</div></div>')),svg4everybody(),$(".slider-items__wraper").owlCarousel({items:5,responsive:{0:{items:4},768:{items:3},1024:{items:4},1280:{items:5}},dots:!0,autoplay:!1,singleItem:!0,nav:!0,loop:!0,fluidSpeed:1e3,autoplayTimeout:4e3,navText:['<svg class="slider-control"><use xlink:href="#arrow-left"></use></svg>','<svg class="slider-control"><use xlink:href="#arrow-right"></use></svg>']}),$(".slider-one-item").owlCarousel({items:1,autoHeight:!0,dots:!0,autoplay:!1,singleItem:!0,fluidSpeed:1e3,autoplayTimeout:4e3,loop:!0,navText:['<svg class="slider-control"><use xlink:href="#arrow-left"></use></svg>','<svg class="slider-control"><use xlink:href="#arrow-right"></use></svg>']})}),function(e,t){"use strict";var s="img/pack.html",o=1;if(!t.createElementNS||!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var r,n,a="localStorage"in e&&null!==e.localStorage,l=function(){t.body.insertAdjacentHTML("afterbegin",n)},i=function(){t.body?l():t.addEventListener("DOMContentLoaded",l)};if(a&&localStorage.getItem("inlineSVGrev")==o&&(n=localStorage.getItem("inlineSVGdata")))return i(),!0;try{r=new XMLHttpRequest,r.open("GET",s,!0),r.onload=function(){r.status>=200&&r.status<400&&(n=r.responseText,i(),a&&(localStorage.setItem("inlineSVGdata",n),localStorage.setItem("inlineSVGrev",o)))},r.send()}catch(d){}}(window,document);