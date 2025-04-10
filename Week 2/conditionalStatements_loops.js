// Exercise 1: Temperature check
let temp = 20;

if (temp < 0) {
  console.log("It's freezing!");
} else if (temp <= 15) {
  console.log("It's cold.");
} else if (temp <= 25) {
  console.log("It's mild.");
} else {
  console.log("It's warm.");
}

// Using switch

switch (true) {
  case temp < 0:
    console.log("It's freezing!");
    break;
  case temp >= 0 && temp <= 15:
    console.log("It's cold.");
    break;
  case temp >= 16 && temp <= 25:
    console.log("It's mild.");
    break;
  default:
    console.log("It's warm.");
    break;
}

// Exercise 2: Divisibility
let number = 9;

if (number % 2 === 0 && number % 3 === 0) {
  console.log("Divisible by both.");
} else if (number % 2 === 0) {
  console.log("Divisible by 2.");
} else if (number % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}

// Using switch
switch (true) {
  case number % 2 === 0 && number % 3 === 0:
    console.log("Divisible by both.");
    break;
  case number % 2 === 0:
    console.log("Divisible by 2.");
    break;
  case number % 3 === 0:
    console.log("Divisible by 3.");
    break;
  default:
    console.log("Not divisible by 2 or 3.");
}

// Exercise 3: For loops
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

let total = 0;
for (let i = 1; i <= 100; i++) {
  total += i;
}
console.log(total, "sum of numbers from 1 to 100");

const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  console.log(num);
}

const nums = [3, 7, 2, 5, 10, 6];
let max = nums[0];
for (let i = 1; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i];
  }
}
console.log("Largest number:", max);

// Exercise 4: While loops
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

let j = 2;
while (j <= 20) {
  console.log(j);
  j += 2;
}

let sum = 0;
let k = 1;
while (k <= 100) {
  sum += k;
  k++;
}
console.log(sum, "sum");

let m = 5;
while (m < 50) {
  console.log(m);
  m += 5;
}

// Exercise 5: Do While loops
let x = 1;
do {
  console.log(x);
  x++;
} while (x <= 10);

let sum2 = 0;
let y = 1;
do {
  sum2 += y;
  y++;
} while (y <= 100);
console.log(sum2, "sum");
