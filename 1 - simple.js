const sayHello = (msg) => new Promise((resolve, reject) => resolve(`Hello ${msg}`));

// Promise
function greeting(name) {
  sayHello(name).then(msg => console.log(msg));
}
greeting('thomas')

// Async/Await
async function greetingV2(name) {
  const msg = await sayHello(name);
  console.log(msg)
}

greetingV2('thomas')