async function getData(url) {
  return url;
}
console.log(getData('google.com'))
getData('facebook.com').then(console.log);

async function getDataError(url) {
  throw new Error(`${url} is not exist`);
}

getDataError('google.com').catch(err => console.log(err.message));

const getNumber = async () => 456;
console.log(getNumber())
