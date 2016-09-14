/*
function speak(kind) {
    var defaultSound = "PIDAR";
    if (kind == "dog") {
        alert("Woof");
    } else if (kind == "cat") {
        alert("Meow");
    } else {
        alert(defaultSound);
    }
}
var pet = prompt("Enter a type of pet: ");
speak(pet);*/



// function calculateArea(r) {
//     var area;
//     if (r <= 0) {
//         return 0;
//     } else {
//         area = Math.PI * r * r;
//         return area;
//     }
// }
// var radius = 5.2;
// var theArea = calculateArea(radius);
// console.log("The area is: " + theArea);




// function playTurn(player, location) {
//     points = 0;
//     if (location == 1) {
//         points = points + 100;
//     }
//     return points;
// }
// var total = playTurn("Jai", 1);
// alert(points);




// var x = 32;
// var y = 44;
// var radius = 5;
// var centerX = 0;
// var centerY = 0;
// var width = 600;
// var height = 400;
// function setup(width, height) {
//     centerX = width/2;
//     centerY = height/2;
// }
// function computeDistance(x1, y1, x2, y2) {
//     var dx = x1 - x2;
//     var dy = y1 - y2;
//     var d2 = (dx * dx) + (dy * dy);
//     var d = Math.sqrt(d2);
//     return d;
// }
// function circleArea(r) {
//     var area = Math.PI * r * r;
//     return area;
// }
// setup(width, height);
// var area = circleArea(radius);
// var distance = computeDistance(x, y, centerX, centerY);
// alert("Area: " + area);
// alert("Distance: " + distance);




// function clunk(times) {
//     var num = times;
//     while (num > 0) {
//         display("clunk");
//         num = num - 1;
//     }
// }
// function thingamajig(size) {
//     var facky = 1;
//     clunkCounter = 0;
//     if (size == 0) {
//         display("clank");
//     } else if (size == 1) {
//         display("thunk");
//     } else {
//         while (size > 1) {
//             facky = facky * size;
//             size = size - 1;
//         }
//         clunk(facky);
//     }
// }
// function display(output) {
//     console.log(output);
//     clunkCounter = clunkCounter + 1;
// }
// var clunkCounter = 0;
// thingamajig(4);
// console.log(clunkCounter);





// var balance = 10500;
// var cameraOn = true;
// function steal(balance, amount) {
//     cameraOn = false;
//     if (amount < balance) {
//         balance = balance - amount;
//     }
//     return amount;
//     cameraOn = true;
// }
// var amount = steal(balance, 1250);
// alert("Criminal: you stole " + amount + "!");




// function makePhrases() {
//     var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
//     var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
//     var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];
//     var rand1 = Math.floor(Math.random() * words1.length);
//     var rand2 = Math.floor(Math.random() * words2.length);
//     var rand3 = Math.floor(Math.random() * words3.length);
//     var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
//     alert(phrase);
// }
// makePhrases();

//                           ****BUBBLES****

// var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
//     34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
//     46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
// var output;
// var i = 0;
// while (i < scores.length) {
//     output = "Bubble solution #" + i + " score: " + scores[i];
//     console.log(output);
//     i = i + 1;
// }





// for (var i = 0; i < scores.length; i = i + 1) {
//     output = "Bubble solution #" + i + " score: " + scores[i];
//     console.log(output);
// }





// var scores = [60, 50, 60, 58, 54, 54,
//     58, 50, 52, 54, 48, 69,
//     34, 55, 51, 52, 44, 51,
//     69, 64, 66, 55, 52, 61,
//     46, 31, 57, 52, 44, 18,
//     41, 53, 55, 61, 51, 44];
// for (var i = 0; i < scores.length; i++) {
//     var output = "Bubble solution #" + i +
//         " score: " + scores[i];
//     console.log(output);
// }



// var scores = [60, 50, 60, 58, 54, 54,
//     58, 50, 52, 54, 48, 69,
//     34, 55, 51, 52, 44, 51,
//     69, 64, 66, 55, 52, 61,
//     46, 31, 57, 52, 44, 18,
//     41, 53, 55, 61, 51, 44];
// var highScore = 0;
// var output;
// for (var i = 0; i < scores.length; i++) {
//     output = "Bubble solution #" + i + " score: " + scores[i];
//     console.log(output);
//     if (i > highScore) {
//         highScore = scores[i];
//     }
// }
// console.log("Bubbles tests: " + i);
// console.log("Highest bubble score: " + highScore);








