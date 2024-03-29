filterCard("all"); //Default view to be all cards

// FILTER BY TAGS
function filterCard(value) {
  //Button class code
    let buttons = document.querySelectorAll("#filter-tags");
    // console.log(buttons);

  buttons.forEach((button) => {
    // console.log(button);
    convertedBtn = button.innerText
      .toLowerCase()
      .trim()
      // .replace(/[\n\t ]+/g, "");
    // console.log(convertedBtn);
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
// console.log(elements);
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
//POPUP SELECT TAGS// 
function selectTagsPopup(x) {
  const parent = document.getElementById("tags-popup");
  parent.classList.add("active");
}
function selectTagsClose() {
  document.getElementById("tags-popup").classList.remove("active");
}
// Close the dropdown if the user clicks outside of it
document.addEventListener("mouseup", function(event){
  var menu = document.querySelector("div.dropup-content.show");
	if (menu !== null && event.target != menu){
    menu.classList.remove("show");
  }
});


var dropupBtn = document.getElementsByClassName("card-content");
function closeDropUp(event){
	var menu = document.getElementById("dropUpWishlist");
	if (event.target != menu && event.target.parentNode != menu){
    menu.classList.remove("show");
  }};

for (var i = 0 ; i < dropupBtn.length; i++) {
  dropupBtn[i].addEventListener('mouseup' , closeDropUp , false ) ; 
}

// document.addEventListener("mouseup", function(event){
// 	var menu = document.getElementById("dropUpWishlist");
// 	if (event.target != menu && event.target.parentNode != menu){
//     menu.classList.remove("show");
//   }
// });
//POPUP - END// 