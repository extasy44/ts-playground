const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const mutiply = (a: number, b: number): number => {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void => {
  throw new Error(message);
};

const forecase = {
  data: new Date(),
  weather: 'sunny',
};

const logWeather = (forecase: { data: Date; weather: string }): void => {
  console.log(forecase.data);
  console.log(forecase.weather);
};

const logWeather1 = ({
  data,
  weather,
}: {
  data: Date;
  weather: string;
}): void => {
  console.log(data);
  console.log(weather);
};
