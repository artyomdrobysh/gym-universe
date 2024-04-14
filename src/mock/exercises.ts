import Exercise from "@domain/Exercise";
import RepsType from "@domain/enums/RepsType";
import MeasureUnit from "@domain/enums/MeasureUnit";

import { MUSCLE_GROUPS } from "./muscle-group";

import seatedDumbbellFrontRaiseImg1 from "../assets/images/exercises/seated-dumbbell-front-raise/img_1.png";
import seatedDumbbellFrontRaiseImg2 from "../assets/images/exercises/seated-dumbbell-front-raise/img_2.png";
import seatedDumbbellFrontRaiseImg3 from "../assets/images/exercises/seated-dumbbell-front-raise/img_3.png";

import standingFrontBarbellRaiseImg1 from "../assets/images/exercises/standing-front-barbell-raise/img_1.png";
import standingFrontBarbellRaiseImg2 from "../assets/images/exercises/standing-front-barbell-raise/img_2.png";
import standingFrontBarbellRaiseImg3 from "../assets/images/exercises/standing-front-barbell-raise/img_3.png";

import bentOverBarbellPressImg1 from "../assets/images/exercises/bent-over-barbell-press/img_1.png";
import bentOverBarbellPressImg2 from "../assets/images/exercises/bent-over-barbell-press/img_2.png";
import bentOverBarbellPressImg3 from "../assets/images/exercises/bent-over-barbell-press/img_3.png";

import standingBarbellCurlImg1 from "../assets/images/exercises/standing-barbell-curl/img_1.png";
import standingBarbellCurlImg2 from "../assets/images/exercises/standing-barbell-curl/img_2.png";
import standingBarbellCurlImg3 from "../assets/images/exercises/standing-barbell-curl/img_3.png";

import jumpingRopeClassImg1 from "../assets/images/exercises/jumping-rope/classic/img_1.png";
import jumpingRopeClassImg2 from "../assets/images/exercises/jumping-rope/classic/img_2.png";

import runningImg1 from "../assets/images/exercises/running/img_1.png";

import benchPressImg1 from "../assets/images/exercises/bench-press/img_1.png";
import benchPressImg2 from "../assets/images/exercises/bench-press/img_2.png";
import benchPressImg3 from "../assets/images/exercises/bench-press/img_3.png";

import reductionOfArmsOnSimulatorImg1 from "../assets/images/exercises/reduction-of-arms-on-the-simulator/img_1.png";
import reductionOfArmsOnSimulatorImg2 from "../assets/images/exercises/reduction-of-arms-on-the-simulator/img_2.png";
import reductionOfArmsOnSimulatorImg3 from "../assets/images/exercises/reduction-of-arms-on-the-simulator/img_3.png";

import dumbbellBenchPressImg1 from "../assets/images/exercises/dumbbell-bench-press/img_1.png";
import dumbbellBenchPressImg2 from "../assets/images/exercises/dumbbell-bench-press/img_2.png";
import dumbbellBenchPressImg3 from "../assets/images/exercises/dumbbell-bench-press/img_3.png";

import abdominalWheelExerciseImg1 from "../assets/images/exercises/abdominal-wheel-exercise/img_1.png";
import abdominalWheelExerciseImg2 from "../assets/images/exercises/abdominal-wheel-exercise/img_2.png";
import abdominalWheelExerciseImg3 from "../assets/images/exercises/abdominal-wheel-exercise/img_3.png";

import raisingTheTorsoImg1 from "../assets/images/exercises/raising-the-torso/img_1.png";
import raisingTheTorsoImg2 from "../assets/images/exercises/raising-the-torso/img_2.png";
import raisingTheTorsoImg3 from "../assets/images/exercises/raising-the-torso/img_3.png";

import standingDumbbellLateralRaiseImg1 from "../assets/images/exercises/standing-dumbbell-lateral-raise/img_1.png";
import standingDumbbellLateralRaiseImg2 from "../assets/images/exercises/standing-dumbbell-lateral-raise/img_2.png";
import standingDumbbellLateralRaiseImg3 from "../assets/images/exercises/standing-dumbbell-lateral-raise/img_3.png";

import frenchBenchPressImg1 from "../assets/images/exercises/french-bench-press/img_1.png";
import frenchBenchPressImg2 from "../assets/images/exercises/french-bench-press/img_2.png";
import frenchBenchPressImg3 from "../assets/images/exercises/french-bench-press/img_3.png";

import upperBlockRowsInFrontOfYouImg1 from "../assets/images/exercises/upper-block-rows-in-front-of-you/img_1.png";
import upperBlockRowsInFrontOfYouImg2 from "../assets/images/exercises/upper-block-rows-in-front-of-you/img_2.png";
import upperBlockRowsInFrontOfYouImg3 from "../assets/images/exercises/upper-block-rows-in-front-of-you/img_3.png";

import standingReverseBarbellCurlImg1 from "../assets/images/exercises/standing-reverse-barbell-curl/img_1.png";
import standingReverseBarbellCurlImg2 from "../assets/images/exercises/standing-reverse-barbell-curl/img_2.png";
import standingReverseBarbellCurlImg3 from "../assets/images/exercises/standing-reverse-barbell-curl/img_3.png";

import dumbbellHammerCurlsImg1 from "../assets/images/exercises/dumbbell-hammer-curls/img_1.png";
import dumbbellHammerCurlsImg2 from "../assets/images/exercises/dumbbell-hammer-curls/img_2.png";
import dumbbellHammerCurlsImg3 from "../assets/images/exercises/dumbbell-hammer-curls/img_3.png";

import dipsImg1 from "../assets/images/exercises/dips/img_1.png";
import dipsImg2 from "../assets/images/exercises/dips/img_2.png";
import dipsImg3 from "../assets/images/exercises/dips/img_3.png";

const EXERCISES: Exercise[] = [
    {
        id: 1,
        name: "Фронтальный подъём гантелей сидя",
        images: [
            { index: 1, content: seatedDumbbellFrontRaiseImg1 },
            { index: 2, content: seatedDumbbellFrontRaiseImg2 },
            { index: 3, content: seatedDumbbellFrontRaiseImg3 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [2, 6, 7, 8].indexOf(mg.id) !== -1,
        ),
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
    },
    {
        id: 2,
        name: "Фронтальный подъем штанги стоя",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: standingFrontBarbellRaiseImg1 },
            { index: 2, content: standingFrontBarbellRaiseImg2 },
            { index: 3, content: standingFrontBarbellRaiseImg3 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [2, 6, 7, 8, 14, 10, 11].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 3,
        name: "Жим штанги лежа в наклоне",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: bentOverBarbellPressImg1 },
            { index: 2, content: bentOverBarbellPressImg2 },
            { index: 3, content: bentOverBarbellPressImg3 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [2, 6, 7, 8, 18].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 4,
        name: "Сгибание рук со штангой стоя",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: standingBarbellCurlImg1 },
            { index: 2, content: standingBarbellCurlImg2 },
            { index: 3, content: standingBarbellCurlImg3 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [17, 23, 16].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 5,
        name: "Классические прыжки на скакалке",
        repsType: RepsType.QUANTITY,
        images: [
            { index: 1, content: jumpingRopeClassImg1 },
            { index: 2, content: jumpingRopeClassImg2 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(mg => [24].indexOf(mg.id) !== -1),
    },
    {
        id: 6,
        name: "Бег на беговой дорожке",
        repsType: RepsType.DISTANCE,
        loadMeasureUnit: MeasureUnit.KILOMETER_PER_HOUR,
        images: [{ index: 1, content: runningImg1 }],
        muscleGroups: MUSCLE_GROUPS.filter(mg => [24].indexOf(mg.id) !== -1),
    },
    {
        id: 7,
        name: "Жим штанги лежа",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: benchPressImg1 },
            { index: 2, content: benchPressImg2 },
            { index: 3, content: benchPressImg3 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [18, 2, 3, 4, 6].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 8,
        name: "Сведение рук на тренажёре",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: reductionOfArmsOnSimulatorImg1 },
            { index: 2, content: reductionOfArmsOnSimulatorImg2 },
            { index: 3, content: reductionOfArmsOnSimulatorImg3 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [2, 3, 4, 17].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 9,
        name: "Жим гантелей лежа",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: dumbbellBenchPressImg1 },
            { index: 2, content: dumbbellBenchPressImg2 },
            { index: 3, content: dumbbellBenchPressImg3 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [2, 3, 4, 18, 6].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 10,
        name: "Упражнение с колесом на пресс",
        repsType: RepsType.QUANTITY,
        images: [
            { index: 1, content: abdominalWheelExerciseImg1 },
            { index: 2, content: abdominalWheelExerciseImg2 },
            { index: 3, content: abdominalWheelExerciseImg3 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [22, 25, 26, 12, 6, 7, 8, 27].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 11,
        name: "Подъём туловища",
        repsType: RepsType.QUANTITY,
        images: [
            { index: 1, content: raisingTheTorsoImg1 },
            { index: 2, content: raisingTheTorsoImg2 },
            { index: 3, content: raisingTheTorsoImg3 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [22, 25, 26].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 12,
        name: "Подъём гантелей в стороны стоя",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: standingDumbbellLateralRaiseImg1 },
            { index: 2, content: standingDumbbellLateralRaiseImg2 },
            { index: 3, content: standingDumbbellLateralRaiseImg3 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [7, 10, 11].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 13,
        name: "Французский жим со штангой лёжа",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: frenchBenchPressImg1 },
            { index: 2, content: frenchBenchPressImg2 },
            { index: 3, content: frenchBenchPressImg3 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [16, 18, 6].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 14,
        name: "Тяги верхнего блока перед собой",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: upperBlockRowsInFrontOfYouImg1 },
            { index: 2, content: upperBlockRowsInFrontOfYouImg2 },
            { index: 3, content: upperBlockRowsInFrontOfYouImg3 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [10, 11, 12, 13, 17, 23].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 15,
        name: "Обратное сгибание рук со штангой стоя",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: standingReverseBarbellCurlImg1 },
            { index: 2, content: standingReverseBarbellCurlImg2 },
            { index: 3, content: standingReverseBarbellCurlImg3 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(mg => [16, 17, 23].indexOf(mg.id) !== -1),
    },
    {
        id: 16,
        name: "Сгибание рук с гантелями в стиле «Молот»",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: dumbbellHammerCurlsImg1 },
            { index: 2, content: dumbbellHammerCurlsImg2 },
            { index: 3, content: dumbbellHammerCurlsImg3 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(mg => [16, 17, 23].indexOf(mg.id) !== -1),
    },
    {
        id: 17,
        name: "Отжимания на брусьях",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: dipsImg1 },
            { index: 2, content: dipsImg2 },
            { index: 3, content: dipsImg3 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(mg => [3, 6, 18].indexOf(mg.id) !== -1),
    },
];

export function getAllByMuscleGroup(
    muscleGroupId: number,
    excluded: number[] = [],
): Promise<Exercise[]> {
    return new Promise(res =>
        res(
            EXERCISES.filter(
                e =>
                    !excluded.find(id => id === e.id) &&
                    e.muscleGroups.map(mg => mg.id).indexOf(muscleGroupId) !==
                        -1,
            ),
        ),
    );
}

export function getById(id: number): Promise<Exercise | null> {
    return new Promise(res => res(EXERCISES.find(e => e.id === id) ?? null));
}

export function getAllById(ids: number[]): Promise<Exercise[]> {
    return new Promise(res => res(EXERCISES.filter(e => ids.indexOf(e.id) !== -1)));
}
