// function get the array with any duplicate values
function removeDuplicates(numbers: number[]): number[] {
  let data: number[] = [];
  for (let num of numbers) {
    if (data.indexOf(num) === -1) {
      data.push(num);
    }
  }
  return data;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
