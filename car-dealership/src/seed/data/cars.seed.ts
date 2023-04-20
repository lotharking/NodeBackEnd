import { Cars } from "src/cars/interfaces/cars.interface";
import { v4 as uuid } from "uuid"

export const CARS_SEED: Cars[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla'
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Corolla'
    },
    {
        id: uuid(),
        brand: 'Ferrari',
        model: 'Corolla'
    }
]