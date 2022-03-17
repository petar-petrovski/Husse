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

//GLOBAL LOCAL TABS

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

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

//CARD BUTTONS MENUS// 
function attachmentMenu(x){
  const parent = document.getElementById(x.parentNode.parentNode.parentNode.id).children;
  parent["dropUpAttachment"].classList.add("show");
}
function attachmentMenuClose(x) {
  const parent = document.getElementById(x.parentNode.parentNode.parentNode.id).children;
  parent["dropUpAttachment"].classList.remove("show");
}
function moreMenu(x) {
  const parent = document.getElementById(x.parentNode.parentNode.parentNode.id).children;
  parent["dropUpWishlist"].classList.add("show");
}
function moreMenuClose(x) {
  const parent = document.getElementById(x.parentNode.parentNode.parentNode.id).children;
  parent["dropUpWishlist"].classList.remove("show");
}

//POPUP SET REMINDER// 
function openPopup(x) {
  const parent = document.getElementById(x.parentNode.id).children;
  parent["reminder-popup"].classList.add("active");
}
function closePopup() {
  document.getElementById("reminder-popup").classList.remove("active");
}

//POPUP MY LIST// 
function openMylist(y) {
  const parent = document.getElementById(y.parentNode.parentNode.parentNode.id).children;
  parent["mylist-popup"].classList.add("active");
}
function closeMylist(y) {
  const parent = document.getElementById(y.parentNode.parentNode.id).children;
  parent["mylist-popup"].classList.remove("active");
}
function closeMylist2(z) {
  const parent = document.getElementById(z.parentNode.parentNode.parentNode.id).children;
  parent["mylist-popup"].classList.remove("active");
}
// Close the dropdown if the user clicks outside of it
window.addEventListener("mouseup", function(event){
  var menu = document.querySelector("div.dropup-content.show");
	if (menu !== null && event.target != menu){
    menu.classList.remove("show");
  }
});
window.addEventListener("mouseup", function(event){
	var menu = document.getElementById("dropUpWishlist");
	if (event.target != menu && event.target.parentNode != menu){
    menu.classList.remove("show");
  }
});
//POPUP - END// 


//FILTER BY CATEGORY
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
  selected.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});
//close the dropdown with outside click
window.addEventListener("mouseup", function(event){
	if (event.target != optionsContainer && event.target != selected){
    optionsContainer.classList.remove("active");
    selected.classList.remove("active");
    }
});
//FILTER BY CATEGORY - END//