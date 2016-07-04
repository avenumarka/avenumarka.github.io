(function(){
  'use strict';


  var svg = function(el){
    return document.getElementById(el);
  };

  function init(){
    var all = document.querySelectorAll('svg path');
    for (var i = 1; i < all.length+1; i++) {
      getwebkitaniimation(svg('img_'+i),i);
    }
  }

  // Support css3
  function getsupportedprop(proparray){
    var root=document.documentElement;
    for (var i=0; i<proparray.length; i++){
      if (proparray[i] in root.style){
        return proparray[i];
      }
    }
  }

  // get-webkit-aniimation(class,time)
  function getwebkitaniimation(el,time){

    var transition = getsupportedprop([
      'WebkitTransition', 'MozTransition',
      'msTransition','OTransition','transition'
    ]);

    var length = el.getTotalLength();

    el.style[transition] =
      el.style[transition] = 'none';

    el.style.strokeDasharray = length + ' ' + length;
    el.style.strokeDashoffset = length;

    el.getBoundingClientRect();
    el.style[transition] =
      el.style[transition] ='stroke-dashoffset '+
      time+
      's ease-in-out';
    el.style.strokeDashoffset = '0';
    return el;
  }
  window.onload = init();
}).call(this);
