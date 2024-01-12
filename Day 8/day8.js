// there are two ways to create an HTML Tag within a JavaScript file

// .innerHTML method
document.getElementById("dynamicDiv1").innerHTML = "<p> 21 Days </p>";

// .createElement method
const para = document.createElement("p");

// creating a textNode which contains the text to be displayed
const node = document.createTextNode("JavaScript Challenge");

para.appendChild(node); // appending the text to the newly created para element

// appending the para element to the dynamicDiv2 div id
document.getElementById("dynamicDiv2").appendChild(para);