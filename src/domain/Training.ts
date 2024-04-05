import Exercise from "./Exercise";

import MeasureUnit from "./enums/MeasureUnit";
import RepsType from "./enums/RepsType";

type Training = {
    day: Date; // todo maybe define just day ?
    start: Date; // todo maybe define just time ?
    finish: Date; // todo maybe define just time ?
    exercises: (Exercise & {
        sets: {
            load?: {
                amount: number;
                measureUnit: MeasureUnit;
            };
            reps: number;
            repsType: RepsType;
        }[];
    })[];
};

export default Training;
