'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
/*
//Coding Challenge No.1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1
// const [...allPlayers] = [...players1, ...players2];
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
const { team1, x: draw, team2 } = game.odds;
const printGoals = function (...players) {
  console.log(players);

  console.log(`${players.length} gaols were scored`)
}
printGoals(...game.scored)
team1 > team2 && console.log(`Team one is more likely to win`);
team1 < team2 && console.log(`Team two is more likely to win`);
// console.log(...game.scored);
*/


//Practice of For OF loop
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
for (const item of menu)
  console.log(item);
for (const item of menu.entries()) {
  const [index, name1] = item;
  console.log(`${index} have value of ${name1}`);

}
*/

//Lecture Enhanced Object Literals
/*
We can declare function(methods) in objects without declaring function() keyword
we can add an object to inside an another object by just mentioning it's name
3rd is ..
*/

//Lecture Optional Operator ? (question mark sign for checking if a property exist or not)

//Lecture on loop on objects; Object.keys(object/property Name) object,values(name)

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
for (const x of game.scored.entries()) {
  const [goal, score] = x;
  console.log(`Goal ${goal + 1}: ${score}`);

}

const odd = Object.values(game.odds);
let average = 0;
for (const x of odd) {
  average += x;
}
average /= odd.length;
console.log(average);
for (const x of Object.entries(game.odds)) {
  const [team, score] = x;
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`
  console.log(`Odd of ${teamStr} ${score}`);

}
