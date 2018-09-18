if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'app'.");
}
var app = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var math = Kotlin.kotlin.math;
  var canvas;
  var context;
  function main(args) {
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    drawOuter();
  }
  function drawOuter() {
    context.lineWidth = 5.0;
    context.translate(window.innerWidth / 2, window.innerHeight / 2);
    context.arc(0.0, 0.0, 200.0, 0.0, 2 * math.PI);
    context.stroke();
  }
  function drawSolide() {
    context.fillStyle = 'red';
    context.strokeStyle = 'blue';
    context.lineWidth = 5.0;
    context.moveTo(100.0, 100.0);
    context.lineTo(300.0, 300.0);
    context.lineTo(300.0, 400.0);
    context.lineTo(100.0, 100.0);
    context.fill();
    context.stroke();
  }
  function drawCircle() {
    context.beginPath();
    context.arc(500.0, 400.0, 100.0, 0.0, 0.3 * math.PI, true);
    context.stroke();
  }
  function drawLine() {
    context.lineWidth = 5.0;
    context.strokeStyle = 'red';
    context.moveTo(100.0, 100.0);
    context.lineTo(300.0, 300.0);
    context.lineTo(300.0, 400.0);
    context.lineTo(100.0, 100.0);
    context.stroke();
  }
  Object.defineProperty(_, 'canvas', {
    get: function () {
      return canvas;
    },
    set: function (value) {
      canvas = value;
    }
  });
  Object.defineProperty(_, 'context', {
    get: function () {
      return context;
    },
    set: function (value) {
      context = value;
    }
  });
  _.main_kand9s$ = main;
  _.drawOuter = drawOuter;
  _.drawSolide = drawSolide;
  _.drawCircle = drawCircle;
  _.drawLine = drawLine;
  var tmp$, tmp$_0;
  canvas = Kotlin.isType(tmp$ = document.getElementById('canvasid'), HTMLCanvasElement) ? tmp$ : throwCCE();
  context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
  main([]);
  Kotlin.defineModule('app', _);
  return _;
}(typeof app === 'undefined' ? {} : app, kotlin);
