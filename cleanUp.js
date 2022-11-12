// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();
// I added a semi colon after calling thing function

// EX 2:

function addThreeNums(first, second, third) {
  var sum = first + second + third
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
// I moved the curly bracket over, but this code ran correctly both ways

// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();
// I corrected the spelling of function and placed the second curly bracket under the console.log

//  EX 4:
function average(num1, num2) {
var sum = 10 + 8;
    var avg = sum / 2;

  console.log(`the average is ${avg}.`)
  }

  average()
  // I added numbers so that the average would give me a value in number form and I added average() at the end to call the function