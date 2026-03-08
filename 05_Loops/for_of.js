//  const str="shiva kumar"
//  let newstr=""
//  for (const i of str) {
//    newstr=newstr+i
//  }
//  console.log(newstr)

 const str = "shiva kumar"
let newstr = ""

for (const i of str) {
    // if(i==" ")
    // {
    //     continue
    // }
  newstr = i + newstr
  
}
console.log(str)
console.log(newstr)


// ~~~~~~~~~~~~~~~~~~~~~~

// Map

const maps=new Map()

maps.set("IN", "India")
maps.set("PAK", "Pakistan")
maps.set("JN", "Japan")


for (const element of maps) {
  console.log(element)
}


for (const [map,value] of maps) {
    console.log(`${map} :- ${value}`)
}

// this will not work for object to iterable