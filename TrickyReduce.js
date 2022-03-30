const users = [

    {Firstname : "Ram", Lastname : "Charan", age : 28},
    {Firstname : "NTR", Lastname : "Jr", age : 28},
    {Firstname : "Raja", Lastname : "Mouli", age : 42},
    {Firstname : "Ajay", Lastname : "Devgan", age : 55}

];

// Output shouldbe { 28 : 2, 42 : 1, 55 : 1 }

const output = users.reduce(function(acc, curr){

    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }

    return acc;

}, {});

console.log(output);