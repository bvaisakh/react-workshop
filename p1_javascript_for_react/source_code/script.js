// Hello World

console.log("Hello Suyati!");

// END - Hello World



// The const Keyword

const a = 5;
// a = 10; // will throw error "TypeError: Assignment to constant variable"

// END: The const Keyword



// The let Keyword

var b = 5;
// let b = 5;

if (true) {
  var b = 10;
  // let b = 10;

  console.log(b);
}

console.log(b);


var div,
  container = document.getElementById("container");

for (var i = 0; i < 5; i++) {
  // for (let i = 0; i < 5; i++) {
  
  div = document.createElement("div");
  div.onclick = function () {
    alert("This is box #" + i);
  };
  container.appendChild(div);
}

// END: The let Keyword



// Template Strings

const firstName = "Vaisakh";
const lastName = "Babu";
console.log(`Hey "${lastName}, ${firstName}"`);

// END: Template Strings



// Default Parameters

function sayHello(entity = "World") {
  console.log(`Hello ${entity}!`);
}
sayHello("Suyati");
sayHello();

// END: Default Parameters



// Arrow Functions

const greet = entity => `Hello ${entity}!`;
console.log(greet("Suyati"));

const customGreet = (greet, entity) => {
  if (!greet) {
    greet = "Hello";
  }

  if (!entity) {
    entity = "World";
  }

  return `${greet}, ${entity}`;
};
console.log(customGreet("Hey", "Vaisakh"));


// const triveni = {
//   rivers: ["Ganga", "Yamuna", "Saraswati"],
//   display: function(delay = 1000) {
//     setTimeout(function() {
//       debugger;
//       console.log(this.rivers.join(", "));
//     }, delay);
//   }
// };

// triveni.display(); // Uncaught TypeError: Cannot read property 'join' of undefined

const triveni = {
  rivers: ["Ganga", "Yamuna", "Saraswati"],
  display: function (delay = 1000) {
    setTimeout(() => {
      console.log(this.rivers.join(", "));
    }, delay);
  },
};

triveni.display();

// END: Arrow Functions



// Destructuring Objects

const myAddress = {
  houseName: "LOPAMUDRA",
  street: "KOTTICHIRAPADAM",
  place: "N PARAVUR",
  district: "ERNAKULAM",
  state: "KERALA",
  country: "INDIA"
};

const { state, country } = myAddress;

console.log(state, country);


function printHouseName1(myAddress) {
  console.log(`My house name is ${myAddress.houseName}`);
}
printHouseName1(myAddress);

// Personally, I don't prefer this
function printHouseName2({ houseName }) {
  console.log(`My house name is ${houseName}`);
}
printHouseName2(myAddress);

// END: Destructuring Objects



// Destructuring Arrays

const nicknames = ["Master Blaster", "God of the Off Side", "The Wall"];

const [sachin] = nicknames;
console.log(sachin);

const [, sourav, ] = nicknames;
console.log(sourav);

// END: Destructuring Arrays



// Object Literal Enhancement

const houseName = "LOPAMUDRA",
  street = "KOTTICHIRAPADAM",
  place = "N PARAVUR",
  district = "ERNAKULAM";

const myAddress1 = {
  houseName,
  street,
  place,
  district,
  printHouseName() {
    console.log(`My house name is ${this.houseName}`);
  },
};

console.log(myAddress1);
myAddress1.printHouseName();

// END: Object Literal Enhancement



// The Spread Operator

const south = [
  "Kerala",
  "Andaman and Nicobar",
  "Andhra Pradesh",
  "Karnataka",
  "Lakshadweep",
  "Puducherry",
  "Tamil Nadu",
  "Telangana",
];
const north = [
  "Chandigarh",
  "Delhi",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Ladakh",
  "Punjab",
  "Rajasthan",
  "Uttarakhand",
  "Uttar Pradesh",
];

const southAndNorth = [...south, ...north];
console.log(southAndNorth.join(", "));

const [ourState, ...others] = southAndNorth;
console.log(others.join(", "));

function southOfKerala(...districts) {
  const [southest, ...rest] = districts;
  console.log(`Southest district of Kerala is ${southest}.`);
}
southOfKerala("Thiruvananthapuram", "Kollam", "Pathanamthitta");

// END: The Spread Operator



// XMLHttpRequest

function onResponse() {
  var data = JSON.parse(this.responseText);
  console.log(data);
}

function onError(error) {
  console.log('Fetch Error :-S', error);
}

var xhrRequest = new XMLHttpRequest();
xhrRequest.onload = onResponse;
xhrRequest.onerror = onError;
xhrRequest.open('get', 'https://randomuser.me/api/', true);
xhrRequest.send();

// END: XMLHttpRequest



// jQuery Ajax

$.ajax("https://randomuser.me/api/")
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });

// END: jQuery Ajax



// Fetch API

fetch("https://randomuser.me/api/")
  .then((response) => {
    if (response.status !== 200) {
      throw new Error(`Request failed with status - ${response.status}`);
    }

    // response is a stream
    response.json().then((data) => {
      console.log(data);
    });
  })
  .catch((error) => {
    console.log(`Fetch Error : ${error}`);
  });

// END: Fetch API



// Async/Await

async function getRandomUser() {
  const user = await fetch("https://randomuser.me/api/");
  console.log(user);
}

// END: Async/Await



// OOP prior to ES6

function PersonClass2(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

PersonClass2.prototype.print = function () {
  console.log(
    `{ firstName: "${this.firstName}", lastName: "${this.lastName}" }`
  );
};

const vaisakh2 = new PersonClass2("Vaisakh", "Babu");
vaisakh2.print();

// END: OOP prior to ES6



// ES6 Classes

class PersonClass1 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  print() {
    console.log(
      `{ firstName: "${this.firstName}", lastName: "${this.lastName}" }`
    );
  }
}

const vaisakh1 = new PersonClass1("Vaisakh", "Babu");
vaisakh1.print();

PersonClass1.prototype.greet = function () {
  console.log(`Hey "${this.lastName}, ${this.firstName}"`);
};
vaisakh1.greet();

// END: Classes



// ES6 Modules

import { print, log } from "./modules/logger.js";
print("We are done for the day!");

// END: ES6 Modules




