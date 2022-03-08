import sortA from '../app';

test('create class Bowerman', () => {
  const name = 'Nikita';
  const newClass = new Bowerman (name); 

  const etalon = {
      "name": "Nikita",
      "health": 100,
      "level": 1,
      "type": "Bowerman",
      "attack": 25,
      "defence": 25
  };

  const result = newClass;
  expect(result).toEqual(etalon);
});
