$(document).ready(courseContent()); 

// function courseContent(){
//     $("#mg-content").load("includes/mg_courses.html");
// }
// function trainingContent(){
//     $("#mg-content").load("includes/mg_trainings.html");
// }
// function attachmentContent(){
//     $("#mg-content").load("includes/mg_attachments.html");
// }
// function categoryContent(){
//     $("#mg-content").load("includes/mg_categories.html");
// }

function courseContent() {
    $.ajax({url: "includes/mg_courses.html", success: function(result){
      $("#mg-content").html(result);
    }});
  }
  function trainingContent() {
    $.ajax({url: "includes/mg_trainings.html", success: function(result){
      $("#mg-content").html(result);
    }});
  }
  function attachmentContent() {
    $.ajax({url: "includes/mg_attachments.html", success: function(result){
      $("#mg-content").html(result);
    }});
  }
  function categoryContent() {
    $.ajax({url: "includes/mg_categories.html", success: function(result){
      $("#mg-content").html(result);
    }});
  }