console.log('hello!')
let myWindow;
function openNewWindow(name){
  myWindow = window.open("personTemplate.html", "_self");
 
}
function load(name){
  console.log(name);
}
myWindow.onload = console.log('hello');
