import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TrainingExercise } from "@domain/Training";

import { RootState } from "../store";

export type TrainingState = {
    exercises: TrainingExercise[];
};

const initialState: TrainingState = {
    exercises: [],
};

const slice = createSlice({
    name: "training",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<TrainingExercise>) => {
            const { exercises } = state;
            if (
                exercises.find(
                    ({ exerciseId }) =>
                        exerciseId === action.payload.exerciseId,
                )
            ) {
                throw new Error("упражнение уже было добавлено"); // todo think about error code
            }
            exercises.push(action.payload);
        },
        remove: (state, action: PayloadAction<number>) => {
            const { exercises } = state;
            state.exercises = exercises.filter(
                ({ exerciseId }) => exerciseId !== action.payload,
            );
        },
        clear: state => {
            state.exercises = [];
        },
    },
});

export const { add, remove, clear } = slice.actions;

export const selectExercises = (state: RootState) => state.training.exercises;

export default slice.reducer;
