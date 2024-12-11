import './App.css';

function App() {
  // 1. Simple object
  const man = {
    name: 'John',
    age: 28,
  };
  // console.log('man', man.age);
  const manFullCopy = { ...man };
  manFullCopy.age = 111;
  // console.log('manFullCopy', manFullCopy.age);

  // 2. Array of primitives
  const numbers = [1, 2, 3];
  // console.log('numbers', numbers[2]);
  const numbersFullCopy = [...numbers];
  numbersFullCopy[2] = 88;
  // console.log('numbersFullCopy', numbersFullCopy[2]);

  // 3. Object inside an object
  const man1 = {
    name: 'John',
    age: 28,
    mother: {
      name: 'Kate',
      age: 50,
    },
  };
  // console.log('man1', man1.name);
  // console.log('man1', man1.mother.age);
  const man1FullCopy = { ...man1, mother: { ...man1.mother } };
  man1FullCopy.name = 'Bob';
  man1FullCopy.mother.age = 100;
  // console.log('man1FullCopy', man1FullCopy.name);
  // console.log('man1FullCopy', man1FullCopy.mother.age);

  // 4. Array of primitives inside an object
  const man2 = {
    name: 'John',
    age: 28,
    friends: ['Peter', 'Steven', 'William'],
  };
  // console.log('man2', man2.name);
  // console.log('man2', man2.friends[2]);
  const man2FullCopy = { ...man2, friends: [...man2.friends] };
  man2FullCopy.name = 'Axe';
  man2FullCopy.friends[2] = 'Dima';
  // console.log('man2FullCopy', man2FullCopy.name);
  // console.log('man2FullCopy', man2FullCopy.friends[2]);

  // 5 Array of objects
  const people = [
    { name: 'Peter', age: 30 },
    { name: 'Steven', age: 32 },
    { name: 'William', age: 28 },
  ];
  // console.log('people', people[0]);
  const peopleFullCopy = people.map(el => ({ ...el }));
  // peopleFullCopy[0].age = 100;
  // console.log('peopleFullCopy', peopleFullCopy[0]);

  // 6 Array of objects inside object
  const man3 = {
    name: 'John',
    age: 28,
    friends: [
      { name: 'Peter', age: 30 },
      { name: 'Steven', age: 32 },
      { name: 'William', age: 28 },
    ],
  };
  console.log('man3', man3.age);
  console.log('man3', man3.friends[0]);
  const man3FullCopy = {
    ...man3,
    friends: man3.friends.map(el => ({ ...el })),
  };
  man3FullCopy.age = 200;
  man3FullCopy.friends[0].name = 'Fred';
  console.log('man3FullCopy', man3FullCopy.age);
  console.log('man3FullCopy', man3FullCopy.friends[0]);

  // 7 Object inside an object, inside an object
  let man4 = {
    name: 'John',
    age: 28,
    mother: {
      name: 'Kate',
      age: 50,
      work: {
        position: 'doctor',
        experience: 15,
      },
    },
  };

  let man4FullCopy; //  your code

  // 8 Array of objects inside object -> object
  let man5 = {
    name: 'John',
    age: 28,
    mother: {
      name: 'Kate',
      age: 50,
      work: {
        position: 'doctor',
        experience: 15,
      },
      parents: [
        { name: 'Kevin', age: 80 },
        { name: 'Jennifer', age: 78 },
      ],
    },
  };

  let man5FullCopy; //  your code

  // 9 Object inside an object -> array -> object ->  object
  let man6 = {
    name: 'John',
    age: 28,
    mother: {
      name: 'Kate',
      age: 50,
      work: {
        position: 'doctor',
        experience: 15,
      },
      parents: [
        {
          name: 'Kevin',
          age: 80,
          favoriteDish: {
            title: 'borscht',
          },
        },
        {
          name: 'Jennifer',
          age: 78,
          favoriteDish: {
            title: 'sushi',
          },
        },
      ],
    },
  };

  let man6FullCopy; //  your code

  //10 Array of objects inside an object -> object -> array -> object ->  object
  let man7 = {
    name: 'John',
    age: 28,
    mother: {
      name: 'Kate',
      age: 50,
      work: {
        position: 'doctor',
        experience: 15,
      },
      parents: [
        {
          name: 'Kevin',
          age: 80,
          favoriteDish: {
            title: 'borscht',
            ingredients: [
              { title: 'beet', amount: 3 },
              { title: 'potatoes', amount: 5 },
              { title: 'carrot', amount: 1 },
            ],
          },
        },
        {
          name: 'Jennifer',
          age: 78,
          favoriteDish: {
            title: 'sushi',
            ingredients: [
              { title: 'fish', amount: 1 },
              { title: 'rise', amount: 0.5 },
            ],
          },
        },
      ],
    },
  };

  let man7FullCopy; //  your code

  return (
    <>
      <h1>Vite</h1>
    </>
  );
}

export default App;
