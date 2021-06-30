const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    this.health = 100;
    this.level = 1;
    this.name = name;
    this.type = type;
    if (name.length < 2 || name.length > 10) {
      throw new Error('Введены некорректные данные');
    }
    if(!types.includes(type)) {
      throw new Error('Введены некорректные данные');
    }
    if (type === 'Bowman') {
      this.attack = 25;
      this.defence = 25;
    }
    if (type === 'Swordsman') {
      this.attack = 40;
      this.defence = 10;
    }
    if (type === 'Magician') {
      this.attack = 10;
      this.defence = 40;
    }
    if (type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    }
    if (type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    }
    if (type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    }
  }
}
