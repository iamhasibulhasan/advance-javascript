let bonus = 20;
function sum(first, second){
    // ! if variable declare with "var" then result will be access from anywhere thats why var called westing
    const result = first + second +bonus;  //!bonus is global variable
    return result;
}

console.log(bonus); //!bonus is global variable
//console.log(result); //! result is not global variable result is define in sum()
const output = sum(7, 3);
console.log(output);