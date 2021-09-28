// // Challenge #1
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const _dogsJulia = dogsJulia.slice();
//   _dogsJulia.splice(0, 1);
//   _dogsJulia.splice(-2);
//   console.log(_dogsJulia);
//   const dogs = _dogsJulia.concat(dogsKate);
//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy`);
//     }
//   });
// };

// checkDogs(dogsJulia, dogsKate);

// // Challenge #2
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   //   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   const average = adults.reduce(
//     (acc, age, _, arr) => acc + age / arr.length,
//     0
//   );
//   return average;
// };
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// // Challenge #3
// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, _, arr) => acc + age / arr.length, 0);
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// Challenge #4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood * 1.1 ? 'much' : 'little'
  }!`
);

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood * 1.1)
  .flatMap(dog => dog.owners);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much! `);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood * 0.9)
  .flatMap(dog => dog.owners);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

console.log(dogs.some(dog => dog.curFood === dog.recFood));

console.log(
  dogs.some(
    dog => dog.curFood >= dog.recFood * 0.9 && dog.curFood <= dog.recFood * 1.1
  )
);

const dogsEatOkay = dogs.filter(
  dog => dog.curFood >= dog.recFood * 0.9 && dog.curFood <= dog.recFood * 1.1
);
console.log(dogsEatOkay);

console.log(dogs.slice().sort((a, b) => a.recFood - b.recFood));
