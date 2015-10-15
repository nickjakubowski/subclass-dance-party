$(document).ready(function() {
  window.dancers = [];

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
     var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
      );
    $('body').append(dancer.$node);
  });

$(".lineUpButton").on("click", function(event) {

  var j = 0;
  for(var i = 0; i < dancers.length; i++) {
    dancers[i].setPosition(i * 1.5,window.screen.width/j++);
  }
});

$(".moveButton").on("click", function(event) {


    setInterval(function(){  $( ".dDancer" ).animate({ "left": "+=50px", "right": "+=50px"}, "slow" );
     $( ".drunkDancer" ).animate({ "top": "+=50px", "bottom": "+=100px"}, "fast" );
     $( ".bDancer" ).animate({ "left": "+=50px", "right": "+=50px", "top": "+=50px"}, "slow" );}, 750);

        setInterval(function(){  $( ".dDancer" ).animate({ "right": "-=50px", "left": "+=50px"}, "fast" );
     $( ".drunkDancer" ).animate({ "bottom": "-=50px", "top": "-=100px"}, "fast" );
     $( ".bDancer" ).animate({ "right": "-=50px", "left": "+=50px", "bottom": "-=50px"}, "slow" );}, 1500);

           setInterval(function(){  $( ".dDancer" ).animate({ "bottom": "+=50px", "left": "-=50px"}, "fast" );
     $( ".drunkDancer" ).animate({ "left": "+=50px", "right": "+=100px"}, "fast" );
     $( ".bDancer" ).animate({ "right": "-=50px", "left": "+=50px", "bottom": "-=50px"}, "slow" );}, 2250);
  


});







});



