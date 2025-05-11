"use strict";
// src/vehicle.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
// Implement the Car class that conforms to the Vehicle interface
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
exports.Car = Car;
