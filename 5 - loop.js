const counter = (number) => new Promise((resolve, reject) => resolve(`count ${number}`));

async function sayHelloToAll() {
  for (let i = 0; i < 3; i++) {
    const countMsg = await counter(i);
    console.log(countMsg);
  }
}

sayHelloToAll();

async function sayHelloToAllMap() {
  return [0, 1, 2].map(async (number) => {
    const countMsg = await counter(number);
    console.log(countMsg);
  });
}

sayHelloToAllMap();