var bgColorArray = ["#16a085", "#27ae60", "#2c3e50", "#f39c12", "#e74c3c", "#9b59b6", "#FB6964", "#342224", "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var jokeQuote = '';

//function callQuote() {
//  
//  $.getJSON("http://api.icndb.com/jokes/random?callback=?", function(json){
//    
//    jokeQuote = (json.value.joke);
//    
//    $(".chucktainer").animate({
//      opacity: 0
//      }, 500,
//    function() {
//      $(".chucktainer").animate({
//        opacity: 1
//        }, 500);
//      
//    $("#quote").html(JSON.stringify(jokeQuote));
//     });
//  });
//}

function callQuote() {
  $.ajax({
    crossOrigin: true,
    url: "http://api.icndb.com/jokes/random",
    success: function(json) {
      jokeQuote = (json.value.joke);
    
    $(".chucktainer").animate({
      opacity: 0
      }, 500,
    function() {
      $(".chucktainer").animate({
        opacity: 1
        }, 500);
      
    $("#quote").html(JSON.stringify(jokeQuote));
     });
    }
  });
}
  


  
//    var selectBg = Math.floor(Math.random() * bgColorArray.length);
//    $("html body").animate({
//        backgroundColor: bgColorArray[selectBg],
//        color: bgColorArray[selectBg]
//      }, 1000);
//    $(".button").animate({
//        backgroundColor: bgColorArray[selectBg]
//      }, 1000);

$(document).ready(function() {
  callQuote();
  $("#newchuck").on("click", callQuote); 
  $('#tweet').on('click', function() {
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent(jokeQuote));
  });
});