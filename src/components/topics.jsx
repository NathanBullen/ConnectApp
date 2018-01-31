import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

$(document).ready(function(){
  /*The drop down and pull up of the topics bar*/
  var visible = 0;
  $('#topics').click(function(){
      if(visible){
        $('#topics-sub').css("transition", "visibility 0s, max-height 0.3s ease-out");
        $('#topics-sub').css("transition-delay", "0s, 0s");
        $('#topics-sub').css("visibility", "hidden");
        $('#topics-sub').css("max-height", "0px");
        $('#topics').css("color", "#67636f");
        $('#topics-sub a').css("color", "#67636f");
        $('.righticon').css("-webkit-transform", "rotate(0deg)");
        $('.righticon').css("-ms-transform", "rotate(0deg)");
        $('.righticon').css("transform", "rotate(0deg)");
        visible = 0;
      }
      else{
        $('#topics-sub').css("transition", "visibility 0s, max-height 0.5s ease-in");
        $('#topics-sub').css("transition-delay", "230ms, 0s");
        $('#topics-sub').css("visibility", "visible");
        $('#topics-sub').css("max-height", "80vh");
        $('#topics').css("color", "blue");
        $('#topics').css("transition", "color");
        $('#topics').css("transition-delay", "233ms");
        $('#topics-sub a').css("color", "blue");
        $('.righticon').css("-webkit-transform", "rotate(90deg)");
        $('.righticon').css("-ms-transform", "rotate(90deg)");
        $('.righticon').css("transform", "rotate(90deg)");
        visible = 1;
      }
    }); 
});