const numbers = [1, 2, 3, 4, 5];

{
  const first = numbers[0];
  const second = numbers[1];
  const last = numbers[numbers.length - 1];
  console.log(first, second, last);
}

numbers.push(6);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.unshift(0);
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.splice(2, 2, 6, 7);
console.log(numbers);

// NEVER delete elements like this!
// delete numbers[3];
// console.log(numbers);

// Destructuring & Spread Operator

const [first, second, ...rest] = numbers;
const last = numbers[numbers.length - 1];
console.log(first, second, last, rest);

console.log([...numbers, ...numbers]);
console.log([...numbers]);

const slice = numbers.slice(2, 4);
console.log(slice, numbers);

for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
}

let i = 0;
while (i < numbers.length) {
  console.log(i, numbers[i]);
  i++;
}

for (const i in numbers) {
  console.log(i, numbers[i]);
}

for (const item of numbers) {
  console.log(item, numbers.indexOf(item));
}
