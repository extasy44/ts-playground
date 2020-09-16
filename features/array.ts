const carMakers = ['ford', 'toyota', 'chevy'];

//const dates:date[] =[]
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];
//const carsByMake = [['f150'], ['Corolla'], ['Camaro']];

//Help with inference when extracting values
const acar = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatiable values
//carMakers.push(400);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push('400');
