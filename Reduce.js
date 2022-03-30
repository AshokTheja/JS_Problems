
let arr = [2,4,6,8,7,5,3];

// Sum
function FindSum(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

// Max
function Findmax(arr){
    let max = 0;
    for(let i=0; i<arr.length; i++){
        if(max < arr[i])
            max = arr[i]
        
    }
    return max;
}

console.log("Sum Here: " + FindSum(arr))
console.log("Max Here: " + Findmax(arr))

// Using Reduce

const outputSum = arr.reduce(function (acc, curr){

    acc = acc + curr;
    return acc;

}, 0);

const outputMin = arr.reduce(function(acc, curr){

    for(let i=0; i< arr.length; i++){
        if(acc > curr){
            acc = acc;
        } else {
            curr = acc;
        }
    }

    return acc;

}, arr[0]);

console.log("Sum Using Reduce: " + outputSum);
console.log("Min Using Reduce: " + outputMin);