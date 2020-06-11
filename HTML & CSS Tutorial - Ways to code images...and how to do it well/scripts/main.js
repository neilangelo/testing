// var myList = ['apples', 'oranges', 'bananas'];

// for ( var i = 0; i < myList.length; i++){
//     console.log(myList[i]);
// var sum = 0;
// var i = [5, 5, 15];
// i.forEach(numbers);

// function numbers(item) {
//   sum += item;
//   console.log(sum);
//   document.getElementById("demo").innerHTML = sum;
// }

// Output: 14

// var story = "Start. ";
// story += "End.";
// Console.WriteLine(story);
// // Output: Start. End.

var fruits, text, fLen, i;
fruits = ["Banana", "Oranges"];

text = "";
for (i = 0; i < fruits.length; i++) {
  text += fruits[i] + "<br>";
  console.log(text);
}
document.getElementById("demo").innerHTML = text;
