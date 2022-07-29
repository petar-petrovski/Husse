//DASHBOARD
$(document).ready(dashboardContent(this)); 

// style="background-color: #ffffff; color: #8f8884"

function dashboardContent(styl) {
  btnClass = styl.classList;
  // Remove the background color of all goldenBtn/buttons
  goldenBtn = document.getElementsByClassName(btnClass);

  for (i = 0; i < goldenBtn.length; i++) {
    goldenBtn[i].classList.remove("navlink-slctd");
  }

  // styl.classList.add(selectedBtn);
    $(styl).addClass("navlink-slctd")
    $.ajax({url: "dashboard.html", success: function(result){
      $("#main-wrapper").html(result);
    }});
}
function managementContent(styl) {
  btnClass = styl.classList;
  // Remove the background color of all goldenBtn/buttons
  goldenBtn = document.getElementsByClassName(btnClass);

  for (i = 0; i < goldenBtn.length; i++) {
    goldenBtn[i].classList.remove("navlink-slctd");
  }

  // styl.classList.add(selectedBtn);
    $(styl).addClass("navlink-slctd")
    $.ajax({url: "management.html", success: function(result){
      $("#main-wrapper").html(result);
    }});
}