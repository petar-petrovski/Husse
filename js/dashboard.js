// function removeTag(x) {
//   console.log(x.parentElement);
//   x.parentElement.classList.remove("active-btn");
//   x.parentElement.classList.add("hide");

// }
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
$(document).ready(carouselNav()); 

function carouselNav(){
const productContainers = [...document.querySelectorAll('.carousel-container')]; //const
const nxtBtn = [...document.querySelectorAll('.nxt-btn')]; //const
const preBtn = [...document.querySelectorAll('.pre-btn')]; //const

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
}

//CAROUSEL COLLAPSE TOGGLE
$('.collaps-btn').click(function() {
  $('#hide-carousel').slideToggle('slow');
  $("#imgFlip").toggleClass('rotate');
  $("#close-sct").toggle();
  $("#open-sct").toggle();

});

//GLOBAL-LOCAL and SIDEBAR tabs + content
// $(document).ready(mainGrid(this));
document.getElementById("global").click();

function mainGrid(styl) {
  btnClass = styl.classList;
  // Remove the background color of all goldenBtn/buttons
  // goldenBtn = document.getElementsByClassName(btnClass);

  // for (i = 0; i < goldenBtn.length; i++) {
  //   goldenBtn[i].classList.remove("navlink-slctd");
  // }

  // styl.classList.add(selectedBtn);
    $(styl).addClass("navlink-slctd")
    $.ajax({url: "includes/ds/" + styl.id + ".html", success: function(result){
      $("#courses-grid").html(result);
    }});
}


//THIS SECTION NEEDS TO BE REPLACED WITH AJAX CALLS
document.getElementById("defaultOpen").click();

function shiftTabs(pageName, elmnt) {
  tabClass = document.getElementById(pageName).className;
  btnClass = elmnt.classList;

  if (btnClass.contains("golden-btn")) {
      selectedBtn = "selected-golden";
    } else if (btnClass.contains("tablink")) {
      btnClass = "tablink";
      selectedBtn = "selected-tablink";
  }
  // Hide all elements with class="tabContent" by default */
  var i, tabContent, goldenBtn;
  tabContent = document.getElementsByClassName(tabClass);

  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  // Remove the background color of all goldenBtn/buttons
  goldenBtn = document.getElementsByClassName(btnClass);
  for (i = 0; i < goldenBtn.length; i++) {
    goldenBtn[i].classList.remove(selectedBtn);
  }
  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
  // Add the specific color to the button used to open the tab content
  elmnt.classList.add(selectedBtn);
}