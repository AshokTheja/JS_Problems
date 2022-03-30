const users = [

    {Firstname : "Ram", Lastname : "Charan", age : 28},
    {Firstname : "NTR", Lastname : "Jr", age : 29},
    {Firstname : "Raja", Lastname : "Mouli", age : 42},
    {Firstname : "Ajay", Lastname : "Devgan", age : 55}

];

// Get the name as First name & Secondname attached: as Ram Charan, NTR Jr

const output = users.map(x => x.Firstname + " " + x.Lastname);

console.log(output);

