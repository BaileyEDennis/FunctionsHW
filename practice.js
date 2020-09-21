const calculateAgeInDogYears = (ageOfPerson) => {
  const ageInDogYears = ageOfPerson / 7;

  return ageInDogYears;
};

const dogAge = calculateAgeInDogYears(22);
console.log(dogAge);

// // Write a function that takes a string of a dog breed as an argument (like 'border collie')
// Have the function return the value of "My favorite dog breed is schnauzer" if an argument of "schnauzer" is provided.
// Store the return value of the function into a variable. (e.g. const myFavorite = someFunction())
// Log the string of "When it comes to pets," plus the returned value of the function.
// If, and only if, an argument value of "meow" is provided to the function, it should return the string "I like cats".

const bestInShow = (breed) => {
  if (breed === 'meow') {
    return 'I like cats';
  } else {
    return `My favorite dog is a ${breed}`;
  }
};
const myFavorite = bestInShow('meow');
console.log('when it comes to pets' + ' ' + myFavorite);

const add = (num1, num2, num3) => {
  return num1 + num2 + num3;
};
const sum = add(4, 17, 11);
console.log(sum);

const go = (direction, mph) => {
  if (mph > 75) {
    return 'SLOW DOWN!';
  } else {
    return `The car is moving ${direction} at ${mph} mph`;
  }
};
const velocity = go('in circles', 12);
console.log(velocity);

const numList = [3, 0, 77, 6, 7, 58];
const evenOrOdd = (numbers) => {
  for (const number of numList) {
    if (number % 2 === 0) {
      console.log('Even');
    } else {
      console.log('Odd');
    }
  }
};
evenOrOdd(numList);

const words = [
  'The',
  'killing',
  'complex',
  'houses',
  'married',
  'kittens',
  'and',
  'single',
  'soldiers',
  'and',
  'their',
  'kleptomaniacal',
  'families',
];
let list = [];
const filter = (listOfWords) => {
  for (const word of listOfWords) {
    if (word.startsWith('k')) {
    } else {
      list.push(word);
    }
  }
};
filter(words);
const combine = (newWordsList) => {
  for (const word of newWordsList) {
    console.log(list.join(' '));
  }
};
combine(list);

let chancesOfFish = (multiplyer) => {
  const chance = Math.floor(Math.random() * multiplyer);
  if (chance === 1) {
    return 'Sven hooked a tuna! :)';
  } else {
    return 'Sven came up empty-handed. :(';
  }
};
let fishy = chancesOfFish(3);
console.log(fishy);

const orderMeal = (entree, side, drink, dessert) => {
  const mealObject = {
    entree: entree,
    side: side,
    drink: drink,
    dessert: dessert,
  };
  return mealObject;
};
const takeOutBag = orderMeal(
  'Ultimate Slammer',
  'Potato Wedges',
  'Undergrad Pepper',
  'Fudge sundae'
);
console.log(takeOutBag);

const person = () => {
  const personObject = {
    firstName: 'Donald',
    lastName: 'McLelland'
  };
  return personObject;
};

const choreOne = () => 'washed dishes';
const choreTwo = () => 'took out the trash';
const choreThree = () => 'cleaned the gutters';
const choreFour = () => 'cooked dinner';
const choreFive = () => 'mowed the lawn';
const choreSix = () => 'scrubbed the bathroom';

const choreAssign = (individual, chore) => {
    return `${individual.firstname} ${individual.lastName} ${chore}`
};

const dayPlanner = (chore1, chore2, chore3, individual, day) => `On ${day}, ${individual.firstName} ${individual.lastName} ${chore1}  and ${individual.firstName} ${individual.lastName} ${chore2}, and ${individual.firstName} ${individual.lastName} ${chore3}`;

console.log(dayPlanner(choreFour(), choreSix(), choreFive(), person(), 'Saturday'));

const lazyDay = (chore, individual, day) => `${individual.firstName} ${individual.lastName} ${chore} on ${day}`;

console.log(lazyDay(choreOne(), person(), 'Friday'));