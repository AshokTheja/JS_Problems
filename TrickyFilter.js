const users = [

    {Firstname : "Ram", Lastname : "Charan", age : 28},
    {Firstname : "NTR", Lastname : "Jr", age : 28},
    {Firstname : "Raja", Lastname : "Mouli", age : 42},
    {Firstname : "Ajay", Lastname : "Devgan", age : 55}

];

// First name of people of age below 45

const output = users.filter(x => x.age < 45).map(x => x.Firstname);

console.log(output);

// Using reduce:

const output2 = users.reduce(function(acc, curr){

    if(acc[curr.age] < 45){
        acc = acc[curr.Firstname];
    }

    return acc;

}, []);

console.log("Using Reduce: " + output2);