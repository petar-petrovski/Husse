filterCard ("all")

function filterCard(value) {
    //Button class code
    let buttons = document.querySelectorAll(".tag-btn");
    buttons.forEach((button) => {
        convertedBtn = button.innerHTML.toLowerCase().trim().replace(/[\n\t ]+/g,'');
        // alert(convertedBtn);
      //check if value equals innerText
      if (value == convertedBtn) {
        button.classList.add("active-btn");
      } else {
        button.classList.remove("active-btn");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".col");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }