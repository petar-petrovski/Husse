$(document).ready(courseContent()); 

function courseContent(){
    $("#mg-content").load("includes/mg_courses.html");
}
function trainingContent(){
    $("#mg-content").load("includes/mg_trainings.html");
}
function attachmentContent(){
    $("#mg-content").load("includes/mg_attachments.html");
}
function categoryContent(){
    $("#mg-content").load("includes/mg_categories.html");
}