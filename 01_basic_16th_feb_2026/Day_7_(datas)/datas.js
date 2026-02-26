let dates=new Date()
console.log(dates)
// console.log(dates.toString())
// console.log(dates.toDateString())
// console.log(dates.toISOString())
// console.log(dates.toLocaleDateString())
// console.log(dates.toLocaleString())
// console.log(dates.toLocaleTimeString()) 
// console.log(dates.toTimeString())

console.log(typeof dates)


// let newdate=new Date(2026,-1,31,5,5,5,5)
// console.log(newdate.toString()); 

console.log(dates.toLocaleDateString())
console.log(dates.getDate())
console.log(dates.getMonth())
console.log(dates.getMonth()+1) // to get precise bcz of indexing start with 0 


console.log(`year is ${dates.getFullYear()} `  ) //with dynamic 