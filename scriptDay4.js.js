// Day 4 


// Q. 1 How to compare to JSON have the same properties without order?
//    let obj1 = {name: 'Person 1', age: 5};
//    let obj2 = {age: 5, name: 'Person 1'};

let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

if (obj1.name === obj2.name && obj1.age === obj2.age) {
  console.log(true);
} else {
  console.log(false);
}

// OUTPUT: true




//------------------------------------------------------------------------------------

// Que. 2 Use the rest countries API URL- https://restcountries.com/v3.1/all and display all the country flags in the console

// Que. 3  Use the same rest countries and print all countries names, regions, sub-region and populations

//--------------------------------------------------------------------------------------


// Ans for 2 & 3 below :  

let xhr = new XMLHttpRequest();  // Initialize an XMLHttp Request

// Open a request and pass url to open methods
xhr.open("GET", "https://restcountries.com/v3.1/all");

// Process the request on the server side and retrieve the data
xhr.onload = function () {
  // Provide the data if the request lies in the range of 200-<300
  if (xhr.status >= 200 && xhr.status < 300) {
    // Provide the data to the server
    let countries = JSON.parse(this.response);
    countries.forEach((country) => {
      console.log(`${country.name.common}'s flag = ${country.flags.png}`);
    });

    for (let country of countries) {
      console.log(
        `Country's name = ${country.name.common}, its region = ${country.region}, its sub-region = ${country.subregion} and its population = ${country.population}`
      );
    }
  }
};

xhr.send();

//-------------------------------------------------------------------------------
// OUTPUT of 2nd Que

/*
India's flag = https://flagcdn.com/w320/in.png
Cuba's flag = https://flagcdn.com/w320/cu.png
Guadeloupe's flag = https://flagcdn.com/w320/gp.png
North Macedonia's flag = https://flagcdn.com/w320/mk.png
Tajikistan's flag = https://flagcdn.com/w320/tj.png
....
*/

//-----------------------------------------------------------------------------
// Output for 3rd Que

/*
Country's name = India, its region = Asia, its sub-region = Southern Asia and its population = 1380004385
Country's name = Cuba, its region = Americas, its sub-region = Caribbean and its population = 11326616
Country's name = Guadeloupe, its region = Americas, its sub-region = Caribbean and its population = 400132
Country's name = North Macedonia, its region = Europe, its sub-region = Southeast Europe and its population = 2077132
Country's name = Tajikistan, its region = Asia, its sub-region = Central Asia and its population = 9537642
.....
*/

//-------------------------------------------------------------------------