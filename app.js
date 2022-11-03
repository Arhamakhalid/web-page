alert("hellow world")

var StudentName = prompt("Enter Name");
console.log(StudentName);

var principle = false;
var teacher = true;

if (principle = false) {
    console.log("Work Submitted")
} else if (teacher = true) {
    console.log("Work Accepted")
} else {
    console.log("not Accepted")
}

var perc = 80;
if (perc >= 80 && perc < 60) {
    console.log("A")
}

var age = prompt("age");
var studentcard = true;

if (age > 18) {
    console.log("Allow")
} else {
    if (studentcard == true) {
        console.log("Student allow on studentcard")
    }
    else {
        console.log("Not Allowed")
    }
}

var fruits = ["Papaya", "Grapes", "Apple", "Blueberry", "Strawberry"];
console.log(fruits[2]);

var eng = +prompt("Marks")
var bio = +prompt("Marks")
var physics = +prompt("Marks")
var urdu = +prompt("Marks")
var sindhi = +prompt("Marks")

var obtained = (eng + bio + physics + urdu + sindhi)
var total = 500

var percentage = (obtained / total * 100)
console.log(percentage)

if (percentage > 80) {
    console.log("A+");
}
else if (percentage > 70) {
     console.log("B");
 } else if (percentage > 60) {
    console.log("C");
} else if (percentage > 50) {
     console.log("D");
 } else if (percentage > 40) {
   console.log("F");
}

