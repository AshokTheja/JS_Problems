// Using Maps
const now = [2,3,4,5,6];

function double(x){
    return x * 2;
}

const mapTest1 = now.map(double);
 
// Or putting function directly as a parameter

const mapTest2 = now.map(function double(x) {
    return x * 2;
});

// or using Arrow Functions

const mapTest3 = now.map((x) => x * 3);

console.log("MapTest1 Here: " + mapTest1)
console.log("MapTest2 Here: " + mapTest2)
console.log("MapTest3 Here: " + mapTest3)