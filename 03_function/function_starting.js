function my_name(name="default_name"){               // function ke defination are parameters
    console.log(`${name} is my name`) //backtick
}
my_name()                    //function ko call are arguments



function addsum(a,b){
    let res= a+b
    return res
}
const result=addsum(1,2)
console.log(result)
