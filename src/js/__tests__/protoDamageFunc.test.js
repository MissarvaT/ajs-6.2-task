import Character from '../protoDamageFunc';

test('возвращает персонаж с нанесенным уроном', () => {
  const character = new Character('Poison Ivy', 'villain');
  character.damage(50);

  expect(character.health).toBe(70);
});

test('возвращает персонаж с нулевым здоровьем', () => {
  const character = new Character('Lu Kang', 'fighter');
  character.damage(200);

  expect(character.health).toBe(0);
});
