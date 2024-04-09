export type ExerciseSet = {
    orderNumber: number;
    loadAmount?: number;
    reps: number;
};

export type TrainingExercise = {
    exerciseId: number;
    exerciseImage: string;
    sets: ExerciseSet[];
};

type Training = {
    id: number;
    start: Date; // todo maybe define just time ?
    finish: Date; // todo maybe define just time ?
    exercises: TrainingExercise[];
};

export default Training;
