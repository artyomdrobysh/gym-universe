import { ExerciseSet } from "@domain/Training";

export type ExerciseSetWithoutRepsType = Omit<ExerciseSet, "repsType">;
