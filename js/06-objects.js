const person = {
  firstName: "Matteo Antony",
  age: 40,
  "last-name": "Mistretta",
  arms: 2,
};

{
  // square bracket notation
  const name = person["firstName"];
  console.log(name);

  const lastName = person["last-name"];
  console.log(lastName);
}

{
  // dot notation
  const name = person.firstName;
  console.log(name);

  const lastName = person.last - name;
  console.log(lastName);
}

{
  const property = "age";
  console.log(person[property]);
}

person.firstName = "Mauro Benjamin";
console.log(person);

person.legs = 2;
console.log(person);

delete person.legs;
console.log(person);

const { firstName: name, age, "last-name": lastName, ...rest } = person;
console.log(name, age, lastName, rest);

for (const key in person) {
  console.log(key, person[key]);
}
