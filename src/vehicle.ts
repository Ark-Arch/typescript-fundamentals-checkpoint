// src/vehicle.ts

// Define the Vehicle interface
export interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implement the Car class that conforms to the Vehicle interface
export class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}
