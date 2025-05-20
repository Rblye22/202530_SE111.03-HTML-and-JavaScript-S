// //makes sure window is loaded before running script
// window.onload = function(){
//     console.log(window);
//     var div = document.querySelector("div");
//     var p = document.querySelector("p");

//     var textNode = document.createTextNode("This is the text I wanted to change it to.");

//     //p.append(textNode); this adds the textNode to <p>
//     p.innerHTML = textNode.textContent;
// }

document.addEventListener("DOMContentLoaded", function(){
    loadCode();
})
function loadCode(){
    console.log(window);
    var div = document.querySelector("div");
    var p = document.querySelector("p");

    var textNode = document.createTextNode("This is the text I wanted to change it to.");

    //p.append(textNode); this adds the textNode to <p>
    p.innerHTML = textNode.textContent;
    div.removeChild(p); //remove child <p>
    div.appendChild(p); //adds child <p>
}
