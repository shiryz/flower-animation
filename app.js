// import { TweenMax, Power0 } from 'gsap';

var t1 = new TimelineMax();

t1.to(".stem", 5, {visibility: "visible", width:"25%",
            right:"2px", top:"364px", ease: Power0.easeNone});

t1.to(".leaf1", 4, {right:"16px", top:"287px",
      visibility: "visible", width: "9%", ease: Power0.easeNone}, "-=4");

t1.to(".leaf3", 4, {top: "341px", left:"-117px", width: "7%",
      visibility: "visible", ease: Power0.easeNone}, "-=4");

t1.to(".leaf2", 4, {top: "263px", right: "104px", width: "9%",
    visibility: "visible", ease: Power0.easeNone}, "-=4");

t1.to(".flower", 3, {top: "260px", left: "45px", width: "35%",
    visibility: "visible", ease: Power0.easeNone}, "-=3");
