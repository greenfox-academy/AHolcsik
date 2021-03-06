// # Animal Farm

// ## Create an `Animal` constructor function
//  - Every animal has a hunger property, which is a number
//  - Every animal has a thirst property, which is a number
//  - When creating a new animal object these properties are created with the default `5` value
//  - Every animal can `eat()` which decreases their hunger by one
//  - Every animal can `drink()` which decreases their thirst by one
//  - Every animal can `play()` which increases both by one

class Animal {

    constructor() {
        this.hunger = 5;
        this.thirst = 5;
    }

    eat () {
        this.hunger -= 1;
    }

    drink () {
        this.thirst -= 1;
    }

    play () {
        this.hunger += 1;
        this.thirst += 1;
    }
}

class Farm {
    
    constructor(allSlots) {
        this.allSlots = allSlots;
        this.listAnimals = [];
        for (let i = 0; i < this.allSlots; i++) {
            this.listAnimals.push(new Animal())
        }
    }

    breed () {
        let animalsNumber = length.listAnimals;
        if (animalsNumber <= this.allSlots) {
            let Sheep = new Animal;
            push.this.listAnimals(Sheep)
            this.allSlots -= 1;
        }
    }

    slaughter () {
        for () {

        }
    }

}








// ## Create a `Farm` constructor function
//  - The farm has slots which defines the number of free places for animals
//  - The farm has list of Animals
//  - The farm can `breed()` which creates a new animal if there's place for it
//  - The farm can `slaughter()` which removes the least hungry animal
//  - The farm can print reports about their current state:
//     - `The farm has 11 living animals we are bankrupt`
//  - The farm can progress from day to a new day by calling it's `progress()` method:
//     - All animals should have their methods called randomly with 50% chance
//     - The farm should call its breed and slaughter method at the end of each day
//     - The farm should print report at the end of each day
//         - Print the number of sheeps
//         - Print "bankrupt" if no animals left
//         - Print "okay" if the number of animals is above zero and under the slot number
//         - Print "full" if the number of animals are at the maximum allowed

// ```js

// // Create a sheep farm with 20 slots
// const SheepFarm = new Farm(20);

// console.log(SheepFarm.animals); // Should log 20 Animal objects

// const button = document.querySelector('button');

// // Add a click event to the button and call 'progress'

// // The progress function should log the following to the console:
// //  - The farm has 20 living animals, we are full

// ```