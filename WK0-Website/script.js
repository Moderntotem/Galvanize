$(document).ready(function(){
$("#joke").click(function(){
console.log("Working!");
$.getJSON("https://api.chucknorris.io/jokes/random", function(data){
  var dataObj = data;
  console.log(dataObj);
  $("#jokeText").html(dataObj.value);

});
});

});
