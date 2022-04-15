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
  const parent = document.getElementById("mylist-popup");
  parent.classList.add("active");
}
function closeMylist(y) {
  const parent = document.getElementById("mylist-popup");
  parent.classList.remove("active");
}
function closeMylist2(z) {
  const parent = document.getElementById("mylist-popup");
  parent.classList.remove("active");
}
//if popup is nested inside of the video card ->

// function openMylist(y) {
//   const parent = document.getElementById(y.parentNode.parentNode.parentNode.id).children;
//   parent["mylist-popup"].classList.add("active");
// }
// function closeMylist(y) {
//   const parent = document.getElementById(y.parentNode.parentNode.id).children;
//   parent["mylist-popup"].classList.remove("active");
// }
// function closeMylist2(z) {
//   const parent = document.getElementById(z.parentNode.parentNode.parentNode.id).children;
//   parent["mylist-popup"].classList.remove("active");
// }


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
// const selectedCategory = document.querySelector(".slctd-cat");
// const categoryContainer = document.querySelector(".cat-container");
// const categoryList = document.querySelectorAll(".cat-option");

// selectedCategory.addEventListener("click", () => {
//   categoryContainer.classList.toggle("active");
//   selectedCategory.classList.toggle("active");
// });

// categoryList.forEach(o => {
//   o.addEventListener("click", () => {
//     selectedCategory.innerHTML = o.querySelector("label").innerHTML;
//     categoryContainer.classList.remove("active");
//   });
// });
// //close the dropdown with outside click
// window.addEventListener("mouseup", function(event){
// 	if (event.target != categoryContainer && event.target != selectedCategory){
//     categoryContainer.classList.remove("active");
//     selectedCategory.classList.remove("active");
//     }
// });
//FILTER BY CATEGORY - END//

//DROP MENU FOR FILTER BY CATEGORY, SORT BY, LANGUAGE MENU

function dropOptionMenu(sort) {
  const dropContainer = sort.parentNode.children[0];
  const dropList = sort.parentNode.children[0].querySelectorAll(".drop-option");

  dropContainer.classList.toggle("active");
  sort.classList.toggle("active");

  dropList.forEach(o => {
  o.addEventListener("click", () => {
    sort.innerHTML = o.querySelector("label").innerHTML;
    dropContainer.classList.remove("active");
  });
  }); 
  window.addEventListener("mouseup", function(event){
    if (event.target != dropContainer && event.target != sort){
      dropContainer.classList.remove("active");
      sort.classList.remove("active");
      }
  });
};
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

//SIDEBAR CONTENT

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen2").click();

function shiftSidebarList(pageName, elmnt) {
  // Hide all elements with class="sidebarContent" by default */
  var i, sidebarContent, goldenBtn;
  sidebarContent = document.getElementsByClassName("sidebar-content");
  for (i = 0; i < sidebarContent.length; i++) {
    sidebarContent[i].style.display = "none";
  }
  // Remove the background color of all goldenBtn/buttons
  goldenBtn = document.getElementsByClassName("golden-btn");
  for (i = 0; i < goldenBtn.length; i++) {
    goldenBtn[i].style.backgroundColor = "";
    goldenBtn[i].style.color = "";
  }
  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = "#BC955F";
  elmnt.style.color = "#ffffff";
  // elmnt.style.paddingRight = "50px";
}


//GRID PAGINATION
jQuery(document).ready(function () {
  //how much items per page to show
  var show_per_page = 8; 
  //getting the amount of elements inside #items div
  var number_of_items = $('#items').children().length;
  //calculate the number of pages we are going to have
  var number_of_pages = Math.ceil(number_of_items/show_per_page);
  
  //set the value of our hidden input fields
  $('#current_page').val(0);
  $('#show_per_page').val(show_per_page);
  
  var navigation_html = '<a class="previous_link" href="javascript:previous();"><img src="img/arrow-icon-gray.svg" alt="" /></a>';
  var current_link = 0;
  while(number_of_pages > current_link){
    navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
    current_link++;
  }
  navigation_html += '<a class="next_link" href="javascript:next();"><img src="img/arrow-icon-gray.svg" alt="" /></a>';
  
  $('#page_navigation').html(navigation_html);
  
  //add active_page class to the first page link
  $('#page_navigation .page_link:first').addClass('active_page');
  
  //hide all the elements inside #items div
  $('#items').children().css('display', 'none');
  
  //and show the first n (show_per_page) elements
  $('#items').children().slice(0, show_per_page).css('display', 'block');

});

//Pagination JS
function previous(){

new_page = parseInt($('#current_page').val()) - 1;
//if there is an item before the current active link run the function
if($('.active_page').prev('.page_link').length==true){
  go_to_page(new_page);
}
}

function next(){
new_page = parseInt($('#current_page').val()) + 1;
//if there is an item after the current active link run the function
if($('.active_page').next('.page_link').length==true){
  go_to_page(new_page);
}
}
function go_to_page(page_num){
//get the number of items shown per page
var show_per_page = parseInt($('#show_per_page').val());

//get the element number where to start the slice from
start_from = page_num * show_per_page;

//get the element number where to end the slice
end_on = start_from + show_per_page;

//hide all children elements of #items div, get specific items and show them
$('#items').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');

/*get the page link that has longdesc attribute of the current page and add active_page class to it
and remove that class from previously active page link*/
$('.page_link[longdesc=' + page_num +']').addClass('active_page').siblings('.active_page').removeClass('active_page');

//update the current page input field
$('#current_page').val(page_num);
}