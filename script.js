// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10

function min(a, b) {
  let error = "Values are the same.";

  if (a >= b) {
    return b;
  } else {
    return a;
  }
}
console.log(min(10, 5));

// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4

function circumference(diameter) {
  const pi = 3.14;
  return pi * diameter;
}

console.log(circumference(100));

// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0

function searchString(letter, word) {
  let letterCounter = 0;

  for (counter = 0; counter <= word.length - 1; counter++) {
      if(word[counter] == letter){
          letterCounter++;
      }
  }

  return letterCounter;
}
console.log(searchString("t", "cattat"));
