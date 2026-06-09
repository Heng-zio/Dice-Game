/*=====================image1=====================*/
var randomNumber = Math.floor(Math.random() * 6) + 1; // 1-6

var randomImage = "./dice" + randomNumber + ".png"; //file path from img1 to img6

var image1 = document.querySelectorAll("img")[0]; //img1

image1.setAttribute("src", randomImage);
/*=====================image2=====================*/
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "./dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1]; //img2

image2.setAttribute("src", randomImage2);

if (randomNumber > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!"; 
}