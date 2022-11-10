// Change image
const myImage = document.querySelector("img");

function changeTick() {
  console.log("Image clicked!");
  const mySrc = myImage.getAttribute("src");
  if (mySrc == "images/check-mark-green.png") {
    myImage.setAttribute("src", "images/cross-red.png");
  } else {
    myImage.setAttribute("src", "images/check-mark-green.png");
  }
}

myImage.addEventListener("click", changeTick);

// User 
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
  const myName = prompt("Please enter your name: ");

  if (!myName) setUserName();

  localStorage.setItem("name", myName);
  myHeading.textContent = `TODO for ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `TODO for, ${storedName}`;
}

myButton.addEventListener("click", setUserName);
