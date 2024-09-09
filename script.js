var swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    initialSlide: 2,
    speed: 500,
    loop: true,
    rotate: true,
    mousewheel: {
    invert: false,
  },
});

// task1
const string1 = "Hello";
const string2 = "World";
const result = string1.concat(string2);
const reSult = `"${result}"`;

console.log("Result:", reSult);

// task2

const student = {
  name: "John",
  age: 20,
  grade: "A"
};
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Grade:", student.grade);

// task3
const inputString = "banana";
const charToCount = "a";
let count = 0;
for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === charToCount) {
        count++;
    }
}
console.log("Result:", count,
  `(The character "${charToCount}" 
  appears ${count} times in "${inputString}".)`);
  

// task4

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "Blue"
};
console.log("Make:", car.make);
console.log("Model:", car.model);
console.log("Year:", car.year);
console.log("Color:", car.color);

// task5

const input = "abcdef";
let reverString = "";
for (let i = input.length - 1; i >= 0; i--) {
    reverString += input[i];
}
console.log("Result:", reverString);

