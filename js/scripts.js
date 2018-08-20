var count = 0; //assigns id number
var tasks = [];

$(document).ready(function() {
  $("form#tasks").submit(function(event){
    event.preventDefault();
    $("input#userInput").each(function(){
      $("#output").show();
      var userInput = $(this).val();
      userInput = userInput.toString();
      tasks.push(userInput);
      //add dynamic id
      $("ul#outputTasks").append("<li id='item"+count+"'>" + tasks[count] + "&nbsp" + "&nbsp" + "<button id='item"+count+"' class='btn doneBtn'>Done</button>" + "<br>" + "<br>" + "</li>");
      count ++;

    });
    //find dynamic id
    $(".doneBtn").click(function(event){
      var taskIndex = $(this).attr("id");
      $("li#"+taskIndex).hide();
    });
  });
});
