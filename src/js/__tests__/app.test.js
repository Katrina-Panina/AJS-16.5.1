import Character from '../character';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';

test('Make Bowman from Character', () => {
  expect(new Character('Lev', 'Bowman')).toEqual({
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Lev',
    type: 'Bowman',
  });
});

test('Wrong named character', () => {
  expect(() => new Character('Lev', 'BoBoBowman')).toThrow();
});

test('Make Bowman', () => {
  expect(new Bowman('Lev')).toEqual({
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Lev',
    type: 'Bowman',
  });
});

test('Make Swordsman', () => {
  expect(new Swordsman('Lev')).toEqual({
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Lev',
    type: 'Swordsman',
  });
});

test('Make Daemon', () => {
  expect(new Daemon('Lev')).toEqual({
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Lev',
    type: 'Daemon',
  });
});

test('Make Magician', () => {
  expect(new Magician('Lev')).toEqual({
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Lev',
    type: 'Magician',
  });
});

test('Make Undead', () => {
  expect(new Undead('Lev')).toEqual({
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Lev',
    type: 'Undead',
  });
});

test('Make Zombie', () => {
  expect(new Zombie('Lev')).toEqual({
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Lev',
    type: 'Zombie',
  });
});

test('Throw error on short or long name', () => {
  expect(() => new Character('L', 'Bowman')).toThrow();
  expect(() => new Character('LevLevLevLev', 'Bowman')).toThrow();
});

test('Throw error on type', () => {
  expect(() => new Character('Lev', 'Archer')).toThrowError();
});
