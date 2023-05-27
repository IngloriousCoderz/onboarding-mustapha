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
