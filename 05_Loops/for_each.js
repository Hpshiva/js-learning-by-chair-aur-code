const arr = [10, 20, 40, 30, 50, 70]



// Normal function 

// arr.forEach(function name(arr){
// // console.log(arr)
// })



// arr.forEach(function (item){
// console.log(item)
// })

// Arrow function

arr.forEach((item, index, arr) => {
    // console.log(item, index, arr)
})



const obj = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "c++",
        languageFile: "cpp"
    },

]


obj.forEach((obj)=>{
console.log(obj)
})