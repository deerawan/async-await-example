const sayHello = (msg) => new Promise((resolve, reject) => resolve(`Hello ${msg}`));
const sayGoodbye = (msg) => new Promise((resolve, reject) => resolve(`Goodbye ${msg}`));
const errorHello = () => new Promise((resolve, reject) => reject(new Error('cannot say hello')));

async function greetings() {
  const hello = await sayHello('robert');
  const goodbye = await sayGoodbye('robert');

  try {
    const noHello = await errorHello();
  } catch (e) {
    console.log(e.message);
  }

  console.log(hello, goodbye);
}

greetings();