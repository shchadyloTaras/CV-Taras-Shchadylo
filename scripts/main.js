"use strict";

var tl = new TimelineMax();
var title = document.querySelector('.title');
var colAside = document.querySelector('.col-aside');
var colMain = document.querySelector('.col-main');
var DURATION = 0.5;
tl.fromTo(title, {
  x: -200,
  opacity: 0
}, {
  x: 0,
  duration: DURATION,
  opacity: 1
}).fromTo(colAside, {
  x: -200,
  opacity: 0
}, {
  x: 0,
  duration: DURATION,
  opacity: 1
}).fromTo(colMain, {
  x: 200,
  opacity: 0
}, {
  x: 0,
  duration: DURATION,
  opacity: 1
});
//# sourceMappingURL=main.js.map
