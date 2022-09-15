var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".random-button");

function makeHexCode() {
    var hexCode = "";
    var hexValues = "0123456789abcdef";

    for (var i = 0; i < 6; i++) {
        hexCode += hexValues.charAt(Math.floor(Math.random() * hexValues.length));
    }
    return hexCode;
}

function generateRandomGradient() {
    var newColor1 = makeHexCode();
    var newColor2 = makeHexCode();
    body.style.background = "linear-gradient(to right, " + "#" + newColor1 + ", " + "#" + newColor2 +")";
    css.textContent = body.style.background + ";";
    color1.value = "#" + newColor1;
    color2.value = "#" + newColor2;
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", generateRandomGradient);