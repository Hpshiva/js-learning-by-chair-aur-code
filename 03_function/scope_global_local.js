let a=10;
const b=20;
var c=30;
// console.log(a)
// console.log(b)
// console.log(c)

if(true){
    let x=10;
    const y=20;
    var z=30;
}
// console.log(x)  //it will give errors bcz of scoping (not defined)
// console.log(y)  //it will give errors bcz of scoping (not defined)
// console.log(z)




function outter(){   

    let s=20                            

    function inner()
    {
            let v=30;
            console.log(s)                  //chota bde se le skta h 
    }

    inner() 
// console.log(v)                          // bda chote se nhi le skta 

}
outter()