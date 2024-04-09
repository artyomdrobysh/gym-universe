export type MuscleGroupsParams = {
    parentId: number;
    name: string;
};

export type ExercisesParams = {
    muscleGroupId: number;
};

export type DoExerciseParams = {
    exerciseId: number;
};

type ROUTES = {
    Home: undefined;
    AddTraining: undefined;
    MuscleGroups: MuscleGroupsParams | undefined;
    Exercises: ExercisesParams;
    DoExercise: DoExerciseParams;
    TrainingsHistory: undefined;
};

export default ROUTES;
