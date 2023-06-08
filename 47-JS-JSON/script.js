// let user = {
//     name: "John",
//     age: 30,

//     toString() {
//         return `name: ${this.name}, age: ${this.age}`;
//     }
// };

// alert(user)

let student = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ["html", "css", "js"],
    spouse: null
};

let json = JSON.stringify(student);

// alert(typeof json);
// alert(json);

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Ann"}],
    place: room
};

room.occupiedBy = meetup;
console.log(JSON.stringify(meetup, ["title", "participants","place", "name","number"]));

console.log(JSON.stringify(meetup, function replacer(key, value){
    console.log(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined: value;
}));

let user = {
    name:"Mike",
    age:25,
    roles: {
        isAdmin: false,
        isEditor: true,
    }
};

console.log(JSON.stringify(user, null, 2));