
const radius = [2,5,8,9];

// Area of the circle = pie*r2
const area = function(radius){
    return Math.PI * radius * radius;
}

// Circumference
const circumference = function(radius){
    return 2 * Math.PI * radius;
}

// Diameter
const diameter = function(radius){
    return 2 * radius;
}

const calculate = function(radius, logic){
    const output = [];
    for(let i =0; i<= radius.length -1; i++){
        output.push(logic(radius[i]));
    }
    return output;
}

Array.prototype.calculates = function(logic){
    const output = [];
    for(let i =0; i< this.length; i++){
        output.push(logic(this[i]))
    }
    return output;
}

console.log("Area Here: " + calculate(radius, area));

console.log("Area Here using Prototype: " + radius.calculates(area));

// Map is special function which does the same as calculate function
console.log("Map Area Here: " + radius.map(area));

console.log("Circumference Here: " + calculate(radius, circumference));

console.log("Circumference Here using Prototype: " + radius.calculates(circumference));

console.log("Diameter Here: " + calculate(radius, diameter));

console.log("Diameter Here using Prototype: " + radius.calculates(diameter));


