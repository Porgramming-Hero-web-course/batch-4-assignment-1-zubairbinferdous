
// function get the sum of array 
const sumArray = (number: number[]): number => {
  let sum = 0;
  for (let num of number) {
    sum += num;
  }
  // get the number of sum 
  return sum;
};

console.log(sumArray([1, 2, 3, 4, 5]));
