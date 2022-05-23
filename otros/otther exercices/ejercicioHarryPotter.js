const houses = [];

let gryffindor = {
    houseName: "Gryffindor",
    founder: "Godric Gryffindor",
    members: [
        "Harry Potter",
        "Hermione Granger",
        "Ron Weasley",
        "Neville Longbottom",
    ],
};

let hufflepuff = {
    houseName: "Hufflepuff",
    founder: "Helga Hufflepuff",
    members: [
        "Cedric Diggory",
        "Justin Finch-Fletchley",
        "Pomona Sprout",
        "Silvanus Kettleburn",
    ],
};

let ravenclaw = {
    houseName: "Ravenclaw",
    founder: "Rowena Ravenclaw",
    members: [
        "Luna Lovegood",
        "Cho Chang",
        "Gilderoy Lockhart",
        "Garrick Ollivander",
    ],
};

let slytherin = {
    houseName: "Slytherin",
    founder: "Salazar Slytherin",
    members: ["Draco Malfoy", "Severus Snape", "Tom Ryddle", "Severus Snape"],
};

let newMembers = [
    {
        houseName: "Gryffindor",
        name: "Álvaro Fuentenebro",
    },
    {
        houseName: "Hufflepuff",
        name: "Javier Esclapes",
    },
    {
        houseName: "Ravenclaw",
        name: "Ariel Rivas",
    },
    {
        houseName: "Slytherin",
        name: "Sara Rodriguez",
    },
    {
        houseName: "Hufflepuff",
        name: "Rocío Aguilera",
    },
    {
        houseName: "Gryffindor",
        name: "Manuela Gutierrez",
    },
    {
        houseName: "Slytherin",
        name: "Esther Ávila",
    },
    {
        houseName: "Ravenclaw",
        name: "Enzo Nardone",
    },
];


let school = {
    name: "Howarts",
    createHouse: function () {
        let house = {};
        house.name = this.houseName;
        house.members = this.members;
        return house;
    },
};

// ---- Solo puedes programar a partir de aquí ----

function createHouse(house) {

    return school.createHouse.call(house); 
};


function addHouses() {
}

function searchCharacter(initialLetter) {
}

function addMember(member) {
}

function addFounder(house) {
}

// Iteration 1 - Your code here

let houseGrif = createHouse(gryffindor);
console.log(houseGrif);

let houseHuff = createHouse(hufflepuff);
console.log(houseHuff);

let houseRaven = createHouse(ravenclaw);
console.log(houseRaven);

let houseSly = createHouse(slytherin);
console.log(houseSly);


// Iteration 2 - Your code here


// Iteration 3 - Your code here


// Iteration 4 - Your code here


// Iteration 5 - Your code here
// Llamar a addFounder(gryffindor)


console.log(houses);
