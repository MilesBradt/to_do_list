var count = 0;
var tasks = [];

$(document).ready(function() {
  $("form#tasks").submit(function(event){
    event.preventDefault();
    $("input#userInput").each(function(){
      var userInput = $(this).val();
      userInput = userInput.toString();
      tasks.push(userInput)
      $("ul#outputTasks").append("<li>" + tasks[count] + "</li>");
      count ++;
      console.log(tasks);
    });
  });
});
