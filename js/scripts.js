var toDo = 0;
var tasks = [];

$(document).ready(function() {
  $("form#tasks").submit(function(event){
    event.preventDefault();
    $("input#userInput").each(function(){
      var userInput = $(this).val();
      console.log(userInput);
    });
  });
});
