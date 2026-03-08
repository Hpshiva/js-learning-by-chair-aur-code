// falsy values

// false , 0 , -0 , BigInt , "" , null , undefined ,NaN



// truthy values
// "0" , "false" , " " , [] , {} ,function(){}


const userEmail="shivakumar.bfgi@gmail.com"
// simple way
if(userEmail)
{
    console.log("got user email")
}
else
    console.log("not found ")


// with array
if(userEmail.length===0){
    console.log("array is empty")
}

// with object
if(Object.keys(userEmail).length===0){      // Object.keys will give an ARRAY
    console.log("object is empty")
} 

// for number also true
if(userEmail){
    console.log("working")
}