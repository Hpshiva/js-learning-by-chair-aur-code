const score =400;
console.log(score);
// when i want number only 
const balance =new Number(100)
console.log(balance);



console.log(typeof(balance.toString()))//convert to string 

console.log(balance.toFixed(5)) // for decimal after number


console.log("number with good view ")
const newNumber=10000000
console.log(newNumber.toLocaleString())
console.log(newNumber.toLocaleString('en-IN'))
