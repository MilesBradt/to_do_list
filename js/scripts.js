// function ToDo(task, id) {
//   userInput = task;
//   count = id;
// }

var count = 0;
var tasks = [];

$(document).ready(function() {
  $("form#tasks").submit(function(event){
    event.preventDefault();
    $("input#userInput").each(function(){
      $("#output").show();
      var userInput = $(this).val();
      userInput = userInput.toString();
      // var list'+count+' = new ToDo(task, id);
      tasks.push(userInput);
      $("ul#outputTasks").append("<li id='item"+count+"'>" + tasks[count] + "&nbsp" + "&nbsp" + "<button id='item"+count+"' class='btn doneBtn'>Done</button>" + "<br>" + "<br>" + "</li>");
      count ++;

    });
    $(".doneBtn").click(function(event){
      console.log(count);
      var taskIndex = $(this).attr("id");
      $("li#"+taskIndex).hide();
      console.log(taskIndex);
      // $('li#item'+count).hide();
    });

  });
});


'item"+count+"'
"li#' + taskIndex+'"
