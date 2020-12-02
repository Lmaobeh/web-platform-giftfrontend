console.log('hello!')
let myWindow;
function openNewWindow(button){
  myWindow = window.open("", "_self");
  myWindow.document.write("<p>"+button.innerText+"</p><a href=\"index.html\">back</a>");

 
}
function load(name){
  console.log(name);
}
myWindow.onload = console.log('hello');
