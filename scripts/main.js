//add one-click image change
/*
let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");// get src url
    if (mySrc === "images/nijo-jo.jpg") {
        myImage.setAttribute("src", "images/210107904_640.jpg"); //set new src
    } else {
        myImage.setAttribute("src", "images/nijo-jo.jpg");
    }
};
*/

//add show account name welcome info
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setAccountName() {
    let myName = prompt("Please input your account name:");
    if (!myName || myName === null) {
        setAccountName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Firefox is great, " + myName;
    }
}

//Initialization
if(!localStorage.getItem("name")) {
    setAccountName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Firefox is great, " + storedName;
}

// register button click trigger
myButton.onclick = function () {
    setAccountName();
};


/*
document.querySelector("html").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
});
*/
