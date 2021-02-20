numbers = [3, 4, 5, 6, 7, 8];


// ! map function carry 3 parameter (element, index, array)
// const result = numbers.map(function(element){
//     return element * element;
// });
const result = numbers.map(x => x * x); //todo : same work but different way(arrow function)
console.log(result);

// todo : filter

const filter = numbers.filter(x => x>5);
console.log(filter);