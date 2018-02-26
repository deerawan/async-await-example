
const getFirstNumber = async () => 123;
const getSecondNumber = async () => 456;

const printNumbers = async () => {
  const numbers = await Promise.all([getFirstNumber(), getSecondNumber()]);
  console.log(numbers);
}

printNumbers();