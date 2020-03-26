// name
let name = 'Onaolapo Dolapo';

//courses
let courses = ['HTML', 'CSS', 'JavaScript'];

//display name and courses
console.log(`Name: ${name}, Courses: ${courses}`);

//number of course
let numberOfCourses = courses.length;

// function to print odd numbers
const printOddNumbers = (start, end) => {
  console.log(`Odd numbers from ${start} to ${end}`);
  for (let i = start; i < end; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};

// function to print even numbers
const printEvenNumbers = (start, end) => {
  console.log(`Even numbers from ${start} to ${end}`);
  for (let i = start; i < end; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

// check if the number of courses is odd or even
if (numberOfCourses % 2 === 0) {
  // print all even numbers from 1 - 200
  printEvenNumbers(1, 200)
} else {
  // print all odd numbers from 1 - 200
  printOddNumbers(1, 200)
}