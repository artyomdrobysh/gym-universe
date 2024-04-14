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
    start: string;
    finish: string;
    exercises: TrainingExercise[];
};

export default Training;
