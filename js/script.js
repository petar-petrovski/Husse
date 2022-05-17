//POPUP MY LIST// 
function openMylist(y) {
  const parent = document.getElementById("mylist-popup");
  parent.classList.add("active");
}
function closeMylist() {
  document.getElementById("mylist-popup").classList.remove("active");
}
//POPUP ADD TO COURSE// 
function addCoursePopup() {
  const parent = document.getElementById("course-popup");
  parent.classList.add("active");
}
function addCourseClose() {
  document.getElementById("course-popup").classList.remove("active");
}
//POPUP SET REMINDER// 
function openPopup(x) {
  const parent = document.getElementById("reminder-popup");
  parent.classList.add("active");
}
function closePopup() {
  document.getElementById("reminder-popup").classList.remove("active");
}
//POPUP REPUBLISH// 
function republishPopup(x) {
  const parent = document.getElementById("republish-popup");
  parent.classList.add("active");
}
function republishClose() {
  document.getElementById("republish-popup").classList.remove("active");
}