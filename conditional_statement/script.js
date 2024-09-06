// COnditional statement is --> IfElse

const age = 21;
if (age >= 18) {
    console.log("You Can Vote..!")
}
else {
    console.log("You Can't VOte..!")
}
console.log(age);

// ternary oprater

age >= 18 ? console.log("Yes") : console.log("Not");

//Switch Case

var rollnum = 2;

switch (rollnum) {
    case 1: { console.log("Student_1") }
        break;
    case 2: { console.log("Student_2") }
        break;
    case 3: { console.log("Student_3") }
        break;
        default: console.log("Invalid Option")
}
