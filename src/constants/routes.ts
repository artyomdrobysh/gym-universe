export type MuscleGroupsParams = {
    parentId?: number;
    name?: string;
};

export type ExercisesParams = {
    muscleGroupId: number;
};

export type ExerciseDetailsParams = {
    id: number;
};

type ROUTES = {
    Home: undefined;
    MuscleGroups: MuscleGroupsParams;
    Exercises: ExercisesParams;
    ExerciseDetails: ExerciseDetailsParams;
};

export default ROUTES;
