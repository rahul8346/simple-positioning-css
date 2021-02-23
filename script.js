// "use strict";

// console.log('hello!')

// window.onload = function(){
//     let div = document.createElement('div');
// div.className = 'mt-30 ml-10';
// div.id = '#maincontainer';
// div.innerHTML = `
// <div class="brand bg-orange">
//   <div class="bg-blue bar bar-right"></div>
//   <div class="bg-blue bar bar-left"></div>
//   Css Positioning
// </div>
// <div class="nav ml-10">

// <div id="nv">
//   <a class="nav-links" href='index.html'" href="#">Home</a>
//   <a class="nav-links" href='abs.html'" href="#">Absolute</a>
//   <a class="nav-links" href='rel.html'" href="#">Relative</a>
//   <a class="nav-links" href='float.html'" href="#">Float</a>
//   <a class="nav-links" href='center.html'" href="#">Center</a>
//   <span class="mr-15"/>
// </div>
// </div>`;

// document.getElementsByTagName("nav")[0].appendChild(div);
// }


"use strict";

console.log('hello!');

window.onload = function () {
  var div = document.createElement('div');
  div.className = 'mt-30 ml-10';
  div.id = '#maincontainer';
  div.innerHTML = '\n<div class="brand bg-orange">\n  <div class="bg-blue bar bar-right"></div>\n  <div class="bg-blue bar bar-left"></div>\n  Css Positioning\n</div>\n<div class="nav ml-10">\n\n<div id="nv">\n  <a class="nav-links" href=\'index.html\'" href="#">Home</a>\n  <a class="nav-links" href=\'abs.html\'" href="#">Absolute</a>\n  <a class="nav-links" href=\'rel.html\'" href="#">Relative</a>\n  <a class="nav-links" href=\'float.html\'" href="#">Float</a>\n  <a class="nav-links" href=\'center.html\'" href="#">Center</a>\n  <span class="mr-15"/>\n</div>\n</div>';

  document.getElementsByTagName("nav")[0].appendChild(div);
};
