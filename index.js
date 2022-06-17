alert("Hello World!");

var links = document.getElementsByTagName("a");

for (i = 0; i < links.length; i++) {
    links[i].className = "links-" + i;
}

for (i = 0; i < 10; i++) {
    if (i === 5 || i===3) {
        continue;
    }
    
    if (i === 8)
    break;
}
console.log ("i have broken out of the loop")

function getAverage (a,b) {
    var average = (a + b) / 2;
    console.log(average);
    return average;
}
var myAnswer = getAverage(2,12);

function logResult() {
    console.log("the answer is " + myAnswer + " inside the function");
}
logResult();

console.log(Math.floor(7.8))

var a = "apple";
var b = 7;

if (!isNaN(a)) {
    console.log("meaning of live is " + (a * b));
}   else {
    console.log("that is not a number");
   }   

var str = "hello, world";
var str2 = str.slice(2,9);
console.log(str)
console.log(str2)

var tags = "meat, fish, rice, beans, curry, yam";
var mytagArray = tags.split(",");
console.log(mytagArray)

var myArray = [];
myArray[0] = 25;
myArray[1] = 40;
myArray[2] = 32;
myArray[3] = "true";
console.log(myArray)
myArray[3] = "false";
console.log(myArray[3]);
console.log(myArray);

console.log(myArray.length);
console.log(myArray.sort());

var myArray =new Array();
myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Tomi";
myCar.drive = function() {
    console.log("now driving");
};
myCar.drive();

var myCar2 = {
   
    maxSpeed: 70, 
    driver: "david", 
    drive: function(speed, time) {
        console.log(speed * time);
    },
    logDriver: function() {
        console.log("driver name is " + this.driver);
    }

};
console.log(myCar2.logDriver());
console.log(myCar2.maxSpeed);
 myCar2.drive(50, 3);

var Car = function(maxSpeed, driver) {
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time) {
        console.log(speed * time);
    };
    this.logDriver = function() {
        console.log("driver name is " + this.driver);
    };
}

var myCar = new Car(50, "lena");
var myCar2 = new Car(40, "mine");
var myCar3 = new Car(70, "bola");
var myCar4 = new Car(30, "tosin");

myCar.drive(20, 3);
myCar3.logDriver();
myCar.logDriver();


var myDate = new Date();
console.log(myDate)

var myPastDate = new Date(1545, 11, 31, 10, 30, 15);
var myFutureDate = new Date(2515, 0, 2, 10, 30, 15);

console.log(myPastDate);
console.log(myFutureDate);

var birthday = new Date(1985, 0, 15, 11, 15, 25);
var birthday2 = new Date(1985, 0, 15, 11, 15, 25);
console.log(birthday.getDate());
console.log(birthday.getMonth());
console.log(birthday.getDay());
console.log(birthday.getTime());

if (birthday.getFullYear == birthday2.getFullYear) {
    console.log("birthdays are equal");
} else {
    console.log("birthdays are not equal");
}

console.log(document.getElementsByClassName("content"));
var myContentsDivs = document.getElementsByClassName("content");
console.log(myContentsDivs);

myContentsDivs[1].getElementsByTagName("h2");
var myH2 = myContentsDivs[1].getElementsByTagName("h2");
console.log(myH2);

myH2[0].innerHTML = "yo ninjas";

console.log(document.getElementById("mint"));

document.getElementById("mint").innerHTML = "yo david";

var link = document.getElementById("test");
console.log(link);
console.log(link.getAttribute("href"));
console.log(link.getAttribute("class"));
console.log(link.setAttribute("class", "pie"));

var style =document.getElementById("test");

style.setAttribute("style", "color: yellow; font-size: 30px;");
style.style.color = "blue";
style.style.backgroundColor = "yellow";

var newLi = document.createElement("li");
console.log(newLi);
var newA = document.createElement("a");
console.log(newA);

var menu = document.getElementById("main-nav").getElementsByTagName("ul")
console.log(menu);

var menu2 = menu[0];
console.log(menu2);
console.log(menu2.appendChild(newLi));
console.log(newLi.appendChild(newA));
newA.innerHTML = "About";

menu2.insertBefore(newLi, document.getElementsByTagName("li")[0]);

var parent = document.getElementById("main-nav").getElementsByTagName("ul")[0];
console.log(parent);
var child = document.getElementsByTagName("li")[1];
console.log(child);
var remove = parent.removeChild(child);
var first = parent.appendChild(remove);

parent.insertBefore(child, document.getElementsByTagName("li")[0]);

var content = document.getElementById("content");
console.log(content);
var button = document.getElementById("show-more");
console.log(button)

button.onclick = function() {
    if(content.className == "open") {
        //shrink the box
        content.className = "";
        button.innerHTML = "SHOW MORE";
    } else {
        //expand the box
        content.className = "open";
        button.innerHTML = "SHOW LESS";
    }
}

var colorChanger = document.getElementById("color-changer");
var colors = ["red", "blue", "green", "yellow"];
var counter = 0;

function changeColor() {

    if(counter >= colors.length) {
        counter = 0;
    }

    colorChanger.style.background = colors[counter];
    counter++;
}
var myTimer = setInterval(changeColor, 3000);

colorChanger.onclick = function() {
    clearInterval(myTimer);
    colorChanger.innerHTML = "stop timer";
};

var myForm = document.forms.myForm;
var message = document.getElementById("text");
myForm.onsubmit = function() {
    if (myForm.name.value == "") {
        message.innerHTML = "please enter your name";
        return false;
    } else {
        message.innerHTML = "";
        return true;
    }
};























