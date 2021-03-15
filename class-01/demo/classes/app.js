// const Animal = function(name, type, legs) {
//   this.name = name;
//   this.type = type;
//   this.legs = legs
// }

class Animal {
  constructor(props) {
    this.eyes = props.eyes;
    this.habitat = props.habitat;
    this.name = props.name;
  }
}


class Dog extends Animal {
  constructor(props, type, legs){
    super(props);
    this.legs = legs; 
    this.type = type;
  }

  walking = () => {
    console.log(`${this.name} is walking`);
  }

  // walking = function(){
    
  // }
}
const dog = new Dog({eyes:'brown', habitat: 'house', name: 'fido'}, 'dog', 4);
console.log({dog});