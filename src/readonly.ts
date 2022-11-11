// after defining a variable as a const, you cannot reassign the value,
//  but you can change the property assignemnt ___._ = "___"
// with readonly, it prevents the ability to reassign the property value as well

class Animall {
    public readonly name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  
  const sheep = new Animall('sheep');
  console.log(sheep.name); // Allow
  sheep.name = 'wolf'; // Disallow