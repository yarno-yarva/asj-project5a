// TODO: write your code here

function Error(message) {
  this.message = message;
}

export class Character {
constructor(name) {
   this.name = name;
   this.health  = 100;
   this.level = 1;
   if ( name.length < 2 || name.length > 10 ) { throw new Error("Возможное название от 2-х до 10-ти символов");}
   else {this.name = name; }
   
}
}
