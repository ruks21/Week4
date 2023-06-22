//Homework Day 1

//Hamster
class Hamster{
  constructor(owner,name,price){
    this.owner = owner;
    this.name = name;
    this.price = 15;
  }

  wheelRun(){
 console.log("squeak squeak");
  }

  eatFood(){
  console.log("nibble nibble");
  }

  getPrice(){
  return 15

  }
}


const hammy1 = new Hamster ('Rukia','Lil Ruks',15);

console.log(hammy1);

hammy1.wheelRun();
hammy1.eatFood();
hammy1.getPrice();


//Person
class Person{
  constructor(name,age,height,weight,mood,hamsters,bankAccount){
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }

  getName(){
    return 
  }
  getAge(){

  }
  getWeight(){

  }
  greet(){
    console.log();
  }
  eat(){

  }
  exercise(){

  }
  ageUp(){

  }
  buyHamster(){

  }

}



//Chef Makes Dinners

class Dinner{
  constructor(appetizer,entree,dessert){
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }

}