
// Filter method creates a new Array filled with elements that pass a test provided by a function

let arrHere = [2,3,4,5,6,7,8]

function onlyOdd(element){
    return element % 2;
}

function greaterthan5(element){
    return element > 5;
}

let output = arrHere.filter(onlyOdd);
let output2 = arrHere.filter(greaterthan5);

console.log("Odd Numbers: " + output)

console.log("Greater than 5: " + output2)

// or directly putting function as an parameter

let output3 = arrHere.filter(function lessThan5(element){
    return element < 5;
});

console.log("Lesser than 5: " + output3)

// or using Arrow function
let output4 = arrHere.filter((x) => x > 4);

console.log("Greater that 4: " + output4);

