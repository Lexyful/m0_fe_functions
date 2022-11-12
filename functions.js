// // 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
 function printGreeting() {
     console.log("Howdy")
     console.log("Ello govna")
     console.log("Toppa the mornin")
 }
 printGreeting()

// // 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
 function printGreeting(name) {
     console.log(`Ello there, ${name}!`)

 }
 printGreeting("Shane")

// // 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
 function helpNeeded(lowest, highest){
     var range = highest - lowest
     return range
 }
 console.log(helpNeeded(800, 1200));
 console.log(`The range for the job is ${helpNeeded(800, 1200)}.`)


//  4: Write a function that satifies the following interaction pattern:

function checkStock(amount, ingredient) {
    if(amount === 4) {
      console.log(`${ingredient} is stocked.`)
    }
    if(amount === 3) {
      console.log (`${ingredient} is running LOW!`)
    }
    if(amount === 0) {
      console.log (`${ingredient} is OUT of stock!`)
    }
    if(amount === 1) {
      console.log (`${ingredient} is running LOW`)
    }
  
  }
  checkStock(4,"coffee");
  checkStock(3,"tortillas");
  checkStock(0,"Cheese");
  checkStock(1, "Salsa");
  //  all done
  