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
  // console.log('man3', man3.age);
  // console.log('man3', man3.friends[0]);
  const man3FullCopy = {
    ...man3,
    friends: man3.friends.map(el => ({ ...el })),
  };
  man3FullCopy.age = 200;
  man3FullCopy.friends[0].name = 'Fred';
  // console.log('man3FullCopy', man3FullCopy.age);
  // console.log('man3FullCopy', man3FullCopy.friends[0]);

  // 7 Object inside an object, inside an object
  const man4 = {
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
  // console.log('man4', man4.name);
  // console.log('man4', man4.mother.name);
  // console.log('man4', man4.mother.work.experience);
  const man4FullCopy = {
    ...man4,
    mother: { ...man4.mother, work: { ...man4.mother.work } },
  };
  man4FullCopy.name = 'Bob';
  man4FullCopy.mother.name = 'Lisa';
  man4FullCopy.mother.work.experience = 30;
  // console.log('man4FullCopy', man4FullCopy.name);
  // console.log('man4FullCopy', man4FullCopy.mother.name);
  // console.log('man4FullCopy', man4FullCopy.mother.work.experience);

  // 8 Array of objects inside object -> object
  const man5 = {
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
  // console.log('man5', man5.name);
  // console.log('man5', man5.mother.name);
  // console.log('man5', man5.mother.work.experience);
  // console.log('man5', man5.mother.parents[0].age);

  const man5FullCopy = {
    ...man5,
    mother: {
      ...man5.mother,
      work: { ...man5.mother.work },
      parents: { ...man5.mother.parents },
    },
  };
  man5FullCopy.name = 'Bob';
  man5FullCopy.mother.name = 'Lisa';
  man5FullCopy.mother.work.experience = 40;
  man5FullCopy.mother.parents[0].age = 180;
  // console.log('man5', man5FullCopy.name);
  // console.log('man5', man5FullCopy.mother.name);
  // console.log('man5', man5FullCopy.mother.work.experience);
  // console.log('man5', man5FullCopy.mother.parents[0].age);

  // 9 Object inside an object -> array -> object ->  object
  const man6 = {
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
  console.log('man6', man6.name);
  console.log('man6', man6.mother.name);
  console.log('man6', man6.mother.work.experience);
  console.log('man6', man6.mother.parents[0].age);
  console.log('man6', man6.mother.parents[0].favoriteDish.title);
  const man6FullCopy = {
    ...man6,
    mother: {
      ...man6.mother,
      work: { ...man6.mother.work },
      parents: man6.mother.parents.map(el => ({
        ...el,
        favoriteDish: { ...el.favoriteDish },
      })),
    },
  };
  man6FullCopy.name = 'Bob';
  man6FullCopy.mother.name = 'Lisa';
  man6FullCopy.mother.work.experience = 333;
  man6FullCopy.mother.parents[0].age = 444;
  man6FullCopy.mother.parents[0].favoriteDish.title = 'Pasta!';
  console.log('man6', man6FullCopy.name);
  console.log('man6', man6FullCopy.mother.name);
  console.log('man6', man6FullCopy.mother.work.experience);
  console.log('man6', man6FullCopy.mother.parents[0].age);
  console.log('man6', man6FullCopy.mother.parents[0].favoriteDish.title);

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
