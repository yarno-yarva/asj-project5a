import Bowman from '../bowman';


test('create class Bowman', () => {
  
  const result = new Bowman ('Nikita');
  const etalon = {
      "name": "Nikita",
      "health": 100,
      "level": 1,
      "type": "Bowman",
      "attack": 25,
      "defence": 25
  };

  expect(result).toEqual(etalon);
});
