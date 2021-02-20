let num1 = 2;
let num2 = "2";

//! double (==) gives us just value compare [0==false & 1==true]
//! triple (===) gives us just value & type compare

if (num1 === num2) {
    console.log("equal");
}else{
    console.log("not equal");
}