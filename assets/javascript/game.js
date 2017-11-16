
$(document).ready(function() {
 
  // var compNumb =["min","max"];
  var min = 19;
  var max = 120; 
            

  var compNumb = function (a, b) {
    console.log (a);
    console.log (b);
    var comp1= Math.floor(Math.random() * (b - a)) + a;
     console.log(comp1);
      $("#randomNumber").text(comp1);
  }; 
  compNumb(min,max);

var scoresList = ["Wins", "Losses"];
var Wins = 0;
var Losses = 0;
 
$("#scores").html(
  "<h2>Wins: " + Wins + 
  "<br>"+
  "<h2>Losses: " + Losses );

var random1=Math.floor(Math.random() * 12) + 1;
var random2=Math.floor(Math.random() * 12) + 1;
var random3=Math.floor(Math.random() * 12) + 1;
var random4=Math.floor(Math.random() * 12) + 1;


// return text("#playerChoice");
// $("#button1").on("click", function() {

 


    
});
