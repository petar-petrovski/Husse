$(document).ready(courseContent()); 

function courseContent() {
    $.ajax({url: "includes/mg/courses.html", success: function(result){
      $("#mg-content").html(result);
    }});
  }
  function trainingContent() {
    $.ajax({url: "includes/mg/trainings.html", success: function(result){
      $("#mg-content").html(result);
    }});
  }
  function attachmentContent() {
    $.ajax({url: "includes/mg/attachments.html", success: function(result){
      $("#mg-content").html(result);
    }});
  }
  function categoryContent() {
    $.ajax({url: "includes/mg/categories.html", success: function(result){
      $("#mg-content").html(result);
    }});
  }