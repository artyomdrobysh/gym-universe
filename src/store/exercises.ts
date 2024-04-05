import Exercise from "@domain/Exercise";

import { MUSCLE_GROUPS } from "./muscle-group";

import seatedDumbbellFrontRaiseImg1 from "../assets/images/exercises/seated-dumbbell-front-raise/img_1.png";
import seatedDumbbellFrontRaiseImg2 from "../assets/images/exercises/seated-dumbbell-front-raise/img_2.png";
import seatedDumbbellFrontRaiseImg3 from "../assets/images/exercises/seated-dumbbell-front-raise/img_3.png";

const EXERCISES: Exercise[] = [
    {
        id: 1,
        name: "Фронтальный подъём гантелей сидя",
        useSingleSet: false,
        images: [
            { index: 1, content: seatedDumbbellFrontRaiseImg1 },
            { index: 2, content: seatedDumbbellFrontRaiseImg2 },
            { index: 3, content: seatedDumbbellFrontRaiseImg3 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [2, 6, 7, 8].indexOf(mg.id) !== -1,
        ),
    },
];

export function getAllByMuscleGroup(
    muscleGroupId: number,
): Promise<Exercise[]> {
    return new Promise(res =>
        res(
            EXERCISES.filter(
                e =>
                    e.muscleGroups.map(mg => mg.id).indexOf(muscleGroupId) !==
                    -1,
            ),
        ),
    );
}

export function getById(id: number): Promise<Exercise | null> {
    return new Promise(res => res(EXERCISES.find(e => e.id === id) ?? null));
}
