// TODO: write your code here

function Error(message) {
  this.message = message;
}

class Character {
constructor(name) {
   this.name = name;
   this.health  = 100;
   this.level = 1;
   
}
get name() {
  return this._name;
}

set name(value) {
  if ( value.length < 2 ||  value.length > 10 ) {
    throw new Error("Возможное название от 2-х до 10-ти символов");
  }
  this._name = value;
}


}


class Bowerman extends Character {
  constructor(name, health, level) {
  super(name, health, level)
  this.type = 'Bowerman';
  this.attack = 25;
  this.defence = 25;
  }
}


class Swordsman extends Character {
  constructor(name, health, level) {
    super(name, health, level)
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
    }

}

class Magician extends Character {
  constructor(name, health, level) {
    super(name, health, level)
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
    }

}

class Daemon extends Character {
  constructor(name, health, level) {
    super(name, health, level)
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
    }

}

class Undead extends Character {
  constructor(name, health, level) {
    super(name, health, level)
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
    }
}

class Zombie extends Character {
  constructor(name, health, level) {
    super(name, health, level)
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
    }
}
