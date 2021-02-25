function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

// ? closure-1
const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());


// ? closure-1
const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());

console.log(clock1());