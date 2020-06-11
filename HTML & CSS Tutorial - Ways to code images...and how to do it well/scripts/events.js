// var numOne = document.getElementById('num-one');
// var numTwo = document.getElementById('num-two');
// var addSum = document.getElementById('add-sum');

// numOne.addEventListener("input", add);
// numTwo.addEventListener("input", add);

// function add() {
//     var one = parseFloat(numOne.value) || 0;
//     var two = parseFloat(numTwo.value) || 0;
//     addSum.innerHTML = one + two;
// }

var bread = document.getElementById("bread");
var cappuccino = document.getElementById("cappuccino");
var salad = document.getElementById("salad");
var breadPic = document.getElementById("bread-pic");
var cappuccinoPic = document.getElementById("cappuccino-pic");
var saladPic = document.getElementById("salad-pic");

// bread.addEventListener("click", function () {
//   if (breadPic.className === "hide") {
//     breadPic.className = "";
//   } else {
//     breadPic.className = "hide";
//   }
// });

// cappuccino.addEventListener("click", function () {
//   if (cappuccinoPic.className === "hide") {
//     cappuccinoPic.className = "";
//   } else {
//     cappuccinoPic.className = "hide";
//   }
// });

// salad.addEventListener("click", function () {
//   if (saladPic.className === "hide") {
//     saladPic.className = "";
//   } else {
//     saladPic.className = "hide";
//   }
// });

bread.addEventListener("click", picLink);
cappuccino.addEventListener("click", picLink);
salad.addEventListener("click", picLink);

function picLink() {
  var allImages = document.querySelectorAll("img");

  for (i = 0; i < allImages.length; i++) {
    allImages[i].className = "hide";
  }
  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  console.log(pic);

  if (pic.className === "hide") {
    pic.className = "";
  } else {
    pic.className = "hide";
  }
}

// var checklist = document.getElementById("checklist");z
// var items = document.querySelectorAll("li");
// var inputs = document.querySelectorAll("input");
// var btn1 = document.getElementById("btn1");
// var getHex = document.getElementById("gethex");

// btn1.addEventListener("click", changecolor);
// btn1.addEventListener("mouseout", changecolor1);

// for (var i = 0; i < items.length; i++) {
//   items[i].addEventListener("click", editItem);
//   inputs[i].addEventListener("blur", updateItem);
//   inputs[i].addEventListener("keypress", itemkeypress);
// }

// function editItem() {
//   this.className = "edit";
//   var input = this.querySelector("input");
//   input.focus();
//   input.setSelectionRange(0, input.value.length);
// }

// function updateItem() {
//   this.previousElementSibling.innerHTML = this.value;
//   this.parentNode.className = "";
// }

// function itemkeypress(event) {
//   if (event.which === 13) {
//     updateItem.call(this);
//   }
// }

// // function changecolor() {
// //     document.body.style.backgroundColor = "red";
// // }

// function changecolor1() {
//   document.body.style.backgroundColor = "white";
// }

// function getRandomColor() {
//   var letters = "0123456789ABCDEF";
//   var color = "#";
//   for (var i = 0; i < 6; i++) {
//     const color1 = letters[Math.floor(Math.random() * 16)];
//     color += color1;
//   }
//   getHex.innerHTML = "<strong> HEX COLOR: </strong>" + color;
//   return color;
// }

// function changecolor() {
//   document.body.style.backgroundColor = getRandomColor();
// }

// var btn1 = document.getElementById("btn1");
// var btn2 = document.getElementById("btn2");
// btn1.addEventListener("click", getminus);
// btn2.addEventListener("click", getplus);
// var num1 = 0;

// function getminus() {
//   var num3 = document.getElementsByClassName("btn1");

//   if ((num3.className = "btn1")) {
//     num1--;
//   }
//   var counter = document.getElementById("num");
//   counter.innerHTML = num1;
// }

// function getplus() {
//   var num4 = document.getElementsByClassName("btn2");
//   if ((num4.className = "btn2")) {
//     num1++;
//   }
//   var counter = document.getElementById("num");
//   counter.innerHTML = num1;
// }

// const buttons = document.querySelectorAll(".counterBtn");
// let count = 0;

// //Add event listeners and functionailty to each button
// buttons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     if (button.classList.contains("prevBtn")) {
//       count--;
//     } else if (button.classList.contains("nextBtn")) {
//       count++;
//     }

//     //Select the counter text
//     const counter = document.querySelector("#counter");
//     counter.textContent = count;

//     if (count < 0) {
//       counter.style.color = "red";
//     } else if (count > 0) {
//       counter.style.color = "green";
//     } else {
//       counter.style.color = "#333333";
//     }
//   });
// });

// var buttons = document.querySelectorAll(".counterBtn");
// num = 0;

// function buttonss(button) {}

// button.addEventListener("click", button);

// function button() {
//   var prevBtn = document.getElementsByClassName("prevBtn");
//   var nextBtn = document.getElementsByClassName("nextBtn");
//   if (prevBtn === "prevBtn") {
//     num--;
//   } else if (nextBtn === "nextBtn") {
//     num++;
//   }
//   var counter = document.getElementById("#counter");
//   counter.innerHTML = num;
// }
// function add(num1, num2) {
//   var x = num1 * num2;
//   return x;
// }
// add(5, 15);
// console.log(add());
// // function myFunction() {
// //   return "Hello";
// // }
// document.getElementById("num").innerHTML = z;
// function counter() {
//   for (var count = 1; ; count++) {
//     // infinite loop
//     console.log(count + "A"); // until 5
//     if (count === 5) {
//       return;
//     }
//     console.log(count + "B"); // until 4
//   }
//   console.log(count + "C"); // never appears
// }

// counter();

// var person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(person.fullName());
