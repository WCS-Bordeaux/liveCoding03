
//récuperer un identifiant
var container = document.getElementById("container");
console.log(getComputedStyle(container).backgroundColor);

var items = document.getElementById("items");

var paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs);

var even = 0;

var keywords = ["keyword1", "moto", "voiture", "chien", "chat"];

function insertKeywordDom(list) {
    for (let i = 0, len = list.length; i < len; i++) {
        var key = document.createElement('p');
        key.textContent = list[i];
        items.appendChild(key);
    }
}

insertKeywordDom(keywords);

function changeColors() {

    var colors;

    if (even % 2 === 0) {
        colors = ["blue", "rebeccapurple", "dodgerblue", "antiquewhite", "purple"];
    } else {
        colors = ["green", "red", "green", "red", "yellow"];
    }

    for (let i = 0, len = paragraphs.length; i < len; i++) {
        var curP = paragraphs[i],
            curColor = colors[i];

        curP.style.background = curColor;
    }

    ++even;
}

function outputChars(event) {
    var currentQuery = event.srcElement.value;

    // faire la recherche
    console.log(currentQuery);
}


// change colors binary behavior
document.getElementById("changeColors").addEventListener("click", changeColors);

// output every character typed in input
document.getElementById("inputText").addEventListener("keyup", outputChars)