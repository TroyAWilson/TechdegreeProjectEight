const navItems = document.getElementsByTagName('li');
const navIcons =document.getElementsByClassName('navIcons');
const heartIcon =document.getElementById('heart-icon');

navItems[0].addEventListener("mouseover", function(){
  console.log("test");
  heartIcon.style.color ="tomato";
})
