const numbers = [1, 2, 3, 4, 5];

const square = (num) => num ** 2;
const isEven = (num) => num % 2 === 0;
const sum = (num1, num2) => num1 + num2;

numbers.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// cortocircuitare
numbers.forEach(console.log);

// squares: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]

{
  const squares = []; // init
  numbers.forEach((item) => {
    squares.push(square(item)); // acc
  });
  console.log(squares);
}

{
  const squares = numbers.reduce((acc, item) => {
    acc.push(square(item));
    return acc;
  }, []);
  console.log(squares);
}

{
  const squares = numbers.map((item) => {
    return square(item);
  });
  console.log(squares);
}

{
  const squares = numbers.map(square);
  console.log(squares);
}

// evens: [1, 2, 3, 4, 5] -> [2, 4]

{
  const evens = []; // init
  numbers.forEach((item) => {
    if (isEven(item)) {
      evens.push(item); // acc
    }
  });
  console.log(evens);
}

{
  const evens = numbers.reduce((acc, item) => {
    if (isEven(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
  console.log(evens);
}

{
  const evens = numbers.filter((item) => {
    return isEven(item);
  });
  console.log(evens);
}

{
  const evens = numbers.filter(isEven);
  console.log(evens);
}

// firstEven: [1, 2, 3, 4, 5] -> 2

{
  let firstEven; // init
  numbers.forEach((item) => {
    if (firstEven == null && isEven(item)) {
      firstEven = item; // acc
    }
  });
  console.log(firstEven);
}

{
  const firstEven = numbers.find(isEven);
  console.log(firstEven);
}

// firstEvenIndex: [1, 2, 3, 4, 5] -> 1 (index of 2)

{
  let firstEvenIndex = -1; // init
  numbers.forEach((item, index) => {
    if (firstEvenIndex < 0 && isEven(item)) {
      firstEvenIndex = index; // acc
    }
  });
  console.log(firstEvenIndex);
}

{
  const firstEvenIndex = numbers.findIndex(isEven);
  console.log(firstEvenIndex);
}

// hasEven: [1, 2, 3, 4, 5] -> true (2 is even)

{
  let hasEven = false; // init
  numbers.forEach((item) => {
    if (isEven(item)) {
      hasEven = true; // acc
    }
  });
  console.log(hasEven);
}

{
  const hasEven = numbers.some(isEven);
  console.log(hasEven);
}

// allEven: [1, 2, 3, 4, 5] -> false (1 is odd)

{
  let allEven = true; // init
  numbers.forEach((item) => {
    if (!isEven(item)) {
      allEven = false; // acc
    }
  });
  console.log(allEven);
}

{
  const allEven = numbers.every(isEven);
  console.log(allEven);
}

// sumOfItems: [1, 2, 3, 4, 5] -> 15

{
  let acc = 0; // init
  numbers.forEach((item) => {
    acc += item; // acc
  });
  console.log(acc);
  // acc = 0
  // acc = 0 + 1
  // acc = 0 + 1 + 2 ...
}

{
  const [first, ...rest] = numbers;
  let acc = first; // init
  rest.forEach((item) => {
    acc += item; // acc
  });
  console.log(acc);
  // acc = 1
  // acc = 1 + 2
  // acc = 1 + 2 + 3...
}

{
  const sumOfItems = numbers.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);
  console.log(sumOfItems);
}

{
  const sumOfItems = numbers.reduce(sum);
  console.log(sumOfItems);
}

// sumOfSquareEvens: [1, 2, 3, 4, 5] -> [2, 4] -> [4, 16] -> 20

{
  let sumOfSquareEvens = 0;
  numbers.forEach((item) => {
    if (isEven(item)) {
      sumOfSquareEvens += square(item);
    }
  });
  console.log(sumOfSquareEvens);
}

{
  // const evens = numbers.filter(isEven)
  // const squares = evens.map(square)
  // const sumOfSquareEvens = squares.reduce(sum)
  const sumOfSquareEvens = numbers //
    .filter(isEven)
    .map(square)
    .reduce(sum);
  console.log(sumOfSquareEvens);
}

// sumOfEvenSquares: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25] -> [4, 16] -> 20

{
  let sumOfSquareEvens = 0;
  numbers.forEach((item) => {
    const squared = square(item);
    if (isEven(squared)) {
      sumOfSquareEvens += squared;
    }
  });
  console.log(sumOfSquareEvens);
}

{
  const sumOfSquareEvens = numbers //
    .map(square)
    .filter(isEven)
    .reduce(sum);
  console.log(sumOfSquareEvens);
}
