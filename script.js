
let myWindow;
function openNewWindow(button){
  myWindow = window.open("", "_self");
  myWindow.document.write("<p>"+button.innerText+"</p><a href=\"index.html\">back</a>");

 
}

function getPersonInputString(){
  let name = document.getElementById("personName").value;
  if(name.length === 0){
    document.getElementById("errorMsg").innerHTML = "please enter a name";
    return;
  }
   document.querySelectorAll("input").forEach(
          (input_tag) => {input_tag.disabled ="true";}
          );
  myWindow = window.open("", "_self");
  myWindow.document.write("<p>"+name+"</p><a href=\"index.html\">back</a>")
}