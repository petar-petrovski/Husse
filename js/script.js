//DASHBOARD
const dashboard = document.querySelector(".dashboard-logo");

dashboard.addEventListener("click", () => {
  location.href = '#home';
});

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
  // cardContainer = document.getElementById("items");
  // elements = cardContainer.getElementsByClassName("col");
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
  elmnt.style.paddingRight = "50px";

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
const selectedCategory = document.querySelector(".slctd-cat");
const categoryContainer = document.querySelector(".cat-container");
const categoryList = document.querySelectorAll(".cat-option");

selectedCategory.addEventListener("click", () => {
  categoryContainer.classList.toggle("active");
  selectedCategory.classList.toggle("active");
});

categoryList.forEach(o => {
  o.addEventListener("click", () => {
    selectedCategory.innerHTML = o.querySelector("label").innerHTML;
    categoryContainer.classList.remove("active");
  });
});
//close the dropdown with outside click
window.addEventListener("mouseup", function(event){
	if (event.target != categoryContainer && event.target != selectedCategory){
    categoryContainer.classList.remove("active");
    selectedCategory.classList.remove("active");
    }
});
//FILTER BY CATEGORY - END//

//FILTER BY CATEGORY
const selectedSort = document.querySelector(".slctd-sort");
const sortContainer = document.querySelector(".sort-container");
const sortList = document.querySelectorAll(".sort-option");

selectedSort.addEventListener("click", () => {
  sortContainer.classList.toggle("active");
  selectedSort.classList.toggle("active");
});

sortList.forEach(o => {
  o.addEventListener("click", () => {
    selectedSort.innerHTML = o.querySelector("label").innerHTML;
    sortContainer.classList.remove("active");
  });
});
//close the dropdown with outside click
window.addEventListener("mouseup", function(event){
	if (event.target != sortContainer && event.target != selectedSort){
    sortContainer.classList.remove("active");
    selectedSort.classList.remove("active");
    }
});
//FILTER BY CATEGORY - END//

//CAROUSEL LEFT - RIGHT NAVIGATION
const productContainers = [...document.querySelectorAll('.carousel-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += 700;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= 700;
    })
});

//CAROUSEL COLLAPSE TOGGLE
$('.collaps-btn').click(function() {
  $('#hide-carousel').slideToggle('slow');
  $("#imgFlip").toggleClass('rotate');
});