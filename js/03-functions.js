{
  // function declaration
  // hoisting
  console.log(sum(2, 3));

  function sum(a, b) {
    return a + b;
  }
}

{
  // function expression
  // no hoisting
  const sum = function (a, b) {
    return a + b;
  };

  console.log(sum(2, 3));
}

// button.onclick = function (event) {
//   console.log("click!");
// };
// button.addEventListener("click", function (event) {});

{
  // arrow function
  // no hoisting
  const sum = (a, b) => {
    return a + b;
  };

  console.log(sum(2, 3));
}

{
  // concise
  // preserves context
  const sum = (a, b) => a + b;

  console.log(sum(2, 3));
}

{
  // default parameters

  console.log(sum(undefined, 3));
  console.log(sum(2));
  console.log(sum(null, 3));
  console.log(sum(2, null));

  function sum(a = 0, b = 0) {
    return a + b;
  }
}
