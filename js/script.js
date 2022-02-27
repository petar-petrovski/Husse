filterCard("all"); //Default view to be all cards

// FILTER BY TAGS
function filterCard(value) {
  //Button class code
  let buttons = document.querySelectorAll(".tag-btn");
  buttons.forEach((button) => {
    convertedBtn = button.innerHTML
      .toLowerCase()
      .trim()
      .replace(/[\n\t ]+/g, "");
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

/* FILTER BY CATEGORY DROPDOW*/
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//GLOBAL LOCAL TABS
function shiftGrid(pageName, elmnt) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.color = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = "white";
  elmnt.style.color = "black";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//FIX THE SEARCH
//SEARCH CARDS // search through titles 
function searchCards() {
  var input, filter, cards, cardContainer, h3, title, i;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("items");
  cards = cardContainer.getElementsByClassName("col");
  for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector("h3.card-title");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
    } else {
        cards[i].style.display = "none";
    }
}
}