// Nullish Coalescing operator (??) : null undefined
let values1 

// values1=5??10

// values1=null??10         kindof fall back to check the data coming form the DB and the place of 10 there will be a function(){} to check 

// values1=undefined??40

values1=null ?? 30 ?? 20


console.log(values1)