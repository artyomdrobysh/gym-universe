import Exercise from "@domain/Exercise";
import { ExerciseSet } from "@domain/Training";

export type Props = Exercise & {
    sets: ExerciseSet[];
};
