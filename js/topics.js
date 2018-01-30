$(document).ready(function(){
  /*The drop down and pull up of the topics bar*/
  var visible = 0;
  $('#topics').click(function(){
      if(visible){
        $('#topics-sub').css("transition", "visibility 0s, max-height 0.3s ease-out");
        $('#topics-sub').css("transition-delay", "0s, 0s");
        $('#topics-sub').css("visibility", "hidden");
        $('#topics-sub').css("max-height", "0px");
        visible = 0;
      }
      else{
        $('#topics-sub').css("transition", "visibility 0s, max-height 0.5s ease-in");
        $('#topics-sub').css("transition-delay", "230ms, 0s");
        $('#topics-sub').css("visibility", "visible");
        $('#topics-sub').css("max-height", "80vh");
        visible = 1;
      }
    }); 
});