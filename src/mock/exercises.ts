import Exercise from "@domain/Exercise";
import RepsType from "@domain/enums/RepsType";
import MeasureUnit from "@domain/enums/MeasureUnit";

import { MUSCLE_GROUPS } from "./muscle-group";

import seatedDumbbellFrontRaiseImg1 from "../assets/images/exercises/seated-dumbbell-front-raise/img_1.png";
import seatedDumbbellFrontRaiseImg2 from "../assets/images/exercises/seated-dumbbell-front-raise/img_2.png";
import seatedDumbbellFrontRaiseImg3 from "../assets/images/exercises/seated-dumbbell-front-raise/img_3.png";

import standingFrontBarbellRaiseImg1 from "../assets/images/exercises/standing-front-barbell-raise/img_1.png";
import standingFrontBarbellRaiseImg2 from "../assets/images/exercises/standing-front-barbell-raise/img_2.png";

import standingBarbellCurlImg1 from "../assets/images/exercises/standing-barbell-curl-ez/img_1.png";
import standingBarbellCurlImg2 from "../assets/images/exercises/standing-barbell-curl-ez/img_2.png";

import jumpingRopeClassImg1 from "../assets/images/exercises/jumping-rope/classic/img_1.png";
import jumpingRopeClassImg2 from "../assets/images/exercises/jumping-rope/classic/img_2.png";

import runningImg1 from "../assets/images/exercises/running/img_1.png";

import benchPressImg1 from "../assets/images/exercises/bench-press/img_1.png";
import benchPressImg2 from "../assets/images/exercises/bench-press/img_2.png";

import reductionOfArmsOnSimulatorImg1 from "../assets/images/exercises/reduction-of-arms-on-the-simulator/img_1.png";
import reductionOfArmsOnSimulatorImg2 from "../assets/images/exercises/reduction-of-arms-on-the-simulator/img_2.png";

import dumbbellBenchPressImg1 from "../assets/images/exercises/dumbbell-bench-press/img_1.png";
import dumbbellBenchPressImg2 from "../assets/images/exercises/dumbbell-bench-press/img_2.png";

import abdominalWheelExerciseImg1 from "../assets/images/exercises/abdominal-wheel-exercise/img_1.png";
import abdominalWheelExerciseImg2 from "../assets/images/exercises/abdominal-wheel-exercise/img_2.png";
import abdominalWheelExerciseImg3 from "../assets/images/exercises/abdominal-wheel-exercise/img_3.png";

import raisingTheTorsoImg1 from "../assets/images/exercises/raising-the-torso/img_1.png";
import raisingTheTorsoImg2 from "../assets/images/exercises/raising-the-torso/img_2.png";
import raisingTheTorsoImg3 from "../assets/images/exercises/raising-the-torso/img_3.png";

import standingDumbbellLateralRaiseImg1 from "../assets/images/exercises/standing-dumbbell-lateral-raise/img_1.png";
import standingDumbbellLateralRaiseImg2 from "../assets/images/exercises/standing-dumbbell-lateral-raise/img_2.png";

import frenchBenchPressImg1 from "../assets/images/exercises/french-bench-press/img_1.png";
import frenchBenchPressImg2 from "../assets/images/exercises/french-bench-press/img_2.png";
import frenchBenchPressImg3 from "../assets/images/exercises/french-bench-press/img_3.png";

import wideGripPulldownImg1 from "../assets/images/exercises/wide-grip-pulldown/img_1.png";
import wideGripPulldownImg2 from "../assets/images/exercises/wide-grip-pulldown/img_2.png";

import standingReverseBarbellCurlImg1 from "../assets/images/exercises/standing-reverse-barbell-curl/img_1.png";
import standingReverseBarbellCurlImg2 from "../assets/images/exercises/standing-reverse-barbell-curl/img_2.png";
import standingReverseBarbellCurlImg3 from "../assets/images/exercises/standing-reverse-barbell-curl/img_3.png";

import dumbbellHammerCurlsImg1 from "../assets/images/exercises/dumbbell-hammer-curls/img_1.png";
import dumbbellHammerCurlsImg2 from "../assets/images/exercises/dumbbell-hammer-curls/img_2.png";

import dipsImg1 from "../assets/images/exercises/dips/img_1.png";
import dipsImg2 from "../assets/images/exercises/dips/img_2.png";
import dipsImg3 from "../assets/images/exercises/dips/img_3.png";

import armExtensionOnBlockImg1 from "../assets/images/exercises/arm-extension-on-block/img_1.png";

import seatedCableRowImg1 from "../assets/images/exercises/seated-cable-row/img_1.png";
import seatedCableRowImg2 from "../assets/images/exercises/seated-cable-row/img_2.png";

import bentOverTBarRowImg from "../assets/images/exercises/bent-over-t-bar-row/img_1.png";

import reverseButterflyImg1 from "../assets/images/exercises/reverse-butterfly/img_1.png";

import standingDumbbellCurlsImg1 from "../assets/images/exercises/standing-dumbbell-curls/img_1.png";

import standingDumbbellFrontRaiseImg1 from "../assets/images/exercises/standing-dumbbell-front-raise/img_1.png";
import standingDumbbellFrontRaiseImg2 from "../assets/images/exercises/standing-dumbbell-front-raise/img_2.png";

import seatedDumbbellPressImg1 from "../assets/images/exercises/seated-dumbbell-press/img_1.png";

import standingBarbellPressImg1 from "../assets/images/exercises/standing-barbell-press/img_1.png";

import inclineDumbbellBenchPressImg1 from "../assets/images/exercises/incline-dumbbell-bench-press/img_1.png";
import inclineDumbbellBenchPressImg2 from "../assets/images/exercises/incline-dumbbell-bench-press/img_2.png";

import cableCrossoverImg1 from "../assets/images/exercises/cable-crossover/img_1.png";
import cableCrossoverImg2 from "../assets/images/exercises/cable-crossover/img_2.png";

import inclineBarbellBenchPressImg1 from "../assets/images/exercises/incline-barbell-bench-press/img_1.png";
import inclineBarbellBenchPressImg2 from "../assets/images/exercises/incline-barbell-bench-press/img_2.png";

import dumbbellFlyImg1 from "../assets/images/exercises/dumbbell-fly/img_1.png";
import dumbbellFlyImg2 from "../assets/images/exercises/dumbbell-fly/img_2.png";

import inclineDumbbellFlyImg1 from "../assets/images/exercises/incline-dumbbell-fly/img_1.png";
import inclineDumbbellFlyImg2 from "../assets/images/exercises/incline-dumbbell-fly/img_2.png";

import dumbbellShrugsImg1 from "../assets/images/exercises/dumbbell-shrugs/img_1.png";
import dumbbellShrugsImg2 from "../assets/images/exercises/dumbbell-shrugs/img_2.png";

import closeGripPulldownImg1 from "../assets/images/exercises/close-grip-pulldown/img_1.png";
import closeGripPulldownImg2 from "../assets/images/exercises/close-grip-pulldown/img_2.png";

import dumbbellShoulderPressImg1 from "../assets/images/exercises/dumbbell-shoulder-press/img_1.png";
import dumbbellShoulderPressImg2 from "../assets/images/exercises/dumbbell-shoulder-press/img_2.png";

import twoHandedDumbbellFrontRaiseImg1 from "../assets/images/exercises/two-handed-dumbbell-front-raise/img_1.png";
import twoHandedDumbbellFrontRaiseImg2 from "../assets/images/exercises/two-handed-dumbbell-front-raise/img_2.png";

import squatImg1 from "../assets/images/exercises/squat/img_1.png";
import squatImg2 from "../assets/images/exercises/squat/img_2.png";

import legPressImg1 from "../assets/images/exercises/leg-press/img_1.png";
import legPressImg2 from "../assets/images/exercises/leg-press/img_2.png";

import legExtensionImg1 from "../assets/images/exercises/leg-extension/img_1.png";
import legExtensionImg2 from "../assets/images/exercises/leg-extension/img_2.png";

import lungeImg1 from "../assets/images/exercises/lunge/img_1.png";
import lungeImg2 from "../assets/images/exercises/lunge/img_2.png";

import dumbbellBentOverRowImg1 from "../assets/images/exercises/dumbbell-bent-over-row/img_1.png";
import dumbbellBentOverRowImg2 from "../assets/images/exercises/dumbbell-bent-over-row/img_2.png";

import barbellUprightRowImg1 from "../assets/images/exercises/barbell-upright-row/img_1.png";
import barbellUprightRowImg2 from "../assets/images/exercises/barbell-upright-row/img_2.png";

import cableOneArmLateralRaiseImg1 from "../assets/images/exercises/cable-one-arm-lateral-raise/img_1.png";
import cableOneArmLateralRaiseImg2 from "../assets/images/exercises/cable-one-arm-lateral-raise/img_2.png";

import alternateDumbbellFrontRaiseNeutralGripImg1 from "../assets/images/exercises/alternate-dumbbell-front-raise-neutral-grip/img_1.png";
import alternateDumbbellFrontRaiseNeutralGripImg2 from "../assets/images/exercises/alternate-dumbbell-front-raise-neutral-grip/img_2.png";

import inclineDumbbellCurlImg1 from "../assets/images/exercises/incline-dumbbell-curl/img_1.png";
import inclineDumbbellCurlImg2 from "../assets/images/exercises/incline-dumbbell-curl/img_2.png";

import dumbbellConcentrationCurlImg1 from "../assets/images/exercises/dumbbell-concentration-curl/img_1.png";
import dumbbellConcentrationCurlImg2 from "../assets/images/exercises/dumbbell-concentration-curl/img_2.png";

import plankImg1 from "../assets/images/exercises/plank/img_1.png";
import plankImg2 from "../assets/images/exercises/plank/img_2.png";

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
        name: "Фронтальный подъём штанги стоя",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: standingFrontBarbellRaiseImg1 },
            { index: 2, content: standingFrontBarbellRaiseImg2 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [2, 6, 7, 8, 14, 10, 11].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 3,
        name: "Сгибание рук с гантелями в наклоне",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: inclineDumbbellCurlImg1 },
            { index: 2, content: inclineDumbbellCurlImg2 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [16, 17].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 4,
        name: "Сгибание рук со штангой стоя, EZ",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: standingBarbellCurlImg1 },
            { index: 2, content: standingBarbellCurlImg2 },
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
        name: "Жим штанги лёжа",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: benchPressImg1 },
            { index: 2, content: benchPressImg2 },
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
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [2, 3, 4, 6].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 9,
        name: "Жим гантелей лёжа",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: dumbbellBenchPressImg1 },
            { index: 2, content: dumbbellBenchPressImg2 },
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
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [6, 7, 10, 11].indexOf(mg.id) !== -1,
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
        name: "Тяга вниз широким хватом",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: wideGripPulldownImg1 },
            { index: 2, content: wideGripPulldownImg2 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [10, 11, 12, 13, 14, 16, 17].indexOf(mg.id) !== -1,
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
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [16, 17, 23].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 16,
        name: "Сгибание рук с гантелями в стиле «Молот»",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: dumbbellHammerCurlsImg1 },
            { index: 2, content: dumbbellHammerCurlsImg2 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [16, 17, 23].indexOf(mg.id) !== -1,
        ),
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
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [3, 6, 18].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 18,
        name: "Разгибание рук в блоке",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [{ index: 1, content: armExtensionOnBlockImg1 }],
        muscleGroups: MUSCLE_GROUPS.filter(mg => [18].indexOf(mg.id) !== -1),
    },
    {
        id: 19,
        name: "Горизонтальная тяга",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: seatedCableRowImg1 },
            { index: 2, content: seatedCableRowImg2 },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [8, 10, 11, 12, 13, 14, 16, 17, 18].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 20,
        name: "Тяга T-грифа",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [{ index: 1, content: bentOverTBarRowImg }],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [12, 13, 18].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 21,
        name: "Обратная бабочка",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [{ index: 1, content: reverseButterflyImg1 }],
        muscleGroups: MUSCLE_GROUPS.filter(mg => [8, 14].indexOf(mg.id) !== -1),
    },
    {
        id: 22,
        name: "Подъёмы гантелей на бицепс стоя",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [{ index: 1, content: standingDumbbellCurlsImg1 }],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [17, 23].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 23,
        name: "Фронтальный подьём гантелей стоя",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: standingDumbbellFrontRaiseImg1 },
            {
                index: 2,
                content: standingDumbbellFrontRaiseImg2,
            },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(mg => [6, 2].indexOf(mg.id) !== -1),
    },
    {
        id: 24,
        name: "Жим гантелей сидя",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [{ index: 1, content: seatedDumbbellPressImg1 }],
        muscleGroups: MUSCLE_GROUPS.filter(mg => [6, 18].indexOf(mg.id) !== -1),
    },
    {
        id: 25,
        name: "Жим штанги стоя",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [{ index: 1, content: standingBarbellPressImg1 }],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [2, 6, 18].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 26,
        name: "Жим гантелей в наклоне на скамье",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: inclineDumbbellBenchPressImg1 },
            {
                index: 2,
                content: inclineDumbbellBenchPressImg2,
            },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [2, 3, 4, 6, 18].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 27,
        name: "Сгибание рук в кроссовере",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: cableCrossoverImg1 },
            {
                index: 2,
                content: cableCrossoverImg2,
            },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [2, 3, 4, 18].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 28,
        name: "Жим штанги в наклоне на скамье",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: inclineBarbellBenchPressImg1 },
            {
                index: 2,
                content: inclineBarbellBenchPressImg2,
            },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [2, 3, 4, 6, 18].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 29,
        name: "Разведение гантелей лёжа на скамье",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: dumbbellFlyImg1 },
            {
                index: 2,
                content: dumbbellFlyImg2,
            },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [2, 3, 4, 6].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 30,
        name: "Разведение гантелей лёжа в наклоне на скамье",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: inclineDumbbellFlyImg1 },
            {
                index: 2,
                content: inclineDumbbellFlyImg2,
            },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [2, 3, 4, 6].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 31,
        name: "Шраги с гантелями",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: dumbbellShrugsImg1 },
            {
                index: 2,
                content: dumbbellShrugsImg2,
            },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [10, 11, 16].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 32,
        name: "Тяга вниз узким хватом",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: closeGripPulldownImg1 },
            {
                index: 2,
                content: closeGripPulldownImg2,
            },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [12, 13, 14, 16, 17].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 33,
        name: "Жим гантелей от плеч сидя",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: dumbbellShoulderPressImg1 },
            {
                index: 2,
                content: dumbbellShoulderPressImg2,
            },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(mg => [6, 18].indexOf(mg.id) !== -1),
    },
    {
        id: 34,
        name: "Фронтальный подъём гантели одной рукой стоя",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: twoHandedDumbbellFrontRaiseImg1 },
            {
                index: 2,
                content: twoHandedDumbbellFrontRaiseImg2,
            },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(mg => [2, 6].indexOf(mg.id) !== -1),
    },
    {
        id: 35,
        name: "Присед со штангой",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: squatImg1 },
            {
                index: 2,
                content: squatImg2,
            },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [20, 27, 29, 30, 31].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 36,
        name: "Жим ногами",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: legPressImg1 },
            {
                index: 2,
                content: legPressImg2,
            },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [20, 27, 28, 30, 31].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 37,
        name: "Разгибания ног",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: legExtensionImg1 },
            {
                index: 2,
                content: legExtensionImg2,
            },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(mg => [27].indexOf(mg.id) !== -1),
    },
    {
        id: 38,
        name: "Выпады с гателями",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: lungeImg1 },
            {
                index: 2,
                content: lungeImg2,
            },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [20, 27, 30, 31, 16].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 39,
        name: "Тяга гантели в наклоне",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: dumbbellBentOverRowImg1 },
            {
                index: 2,
                content: dumbbellBentOverRowImg2,
            },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [16, 17, 10, 11, 12, 13, 14, 8].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 40,
        name: "Тяга штанги вертикально",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: barbellUprightRowImg1 },
            {
                index: 2,
                content: barbellUprightRowImg2,
            },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [6, 7, 10, 11, 17].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 41,
        name: "Подъём одной руки в стороны на тросе",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: cableOneArmLateralRaiseImg1 },
            {
                index: 2,
                content: cableOneArmLateralRaiseImg2,
            },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(mg => [6, 7].indexOf(mg.id) !== -1),
    },
    {
        id: 42,
        name: "Поочерёдный подъём гантели перед собой нейтральным хватом",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: alternateDumbbellFrontRaiseNeutralGripImg1 },
            {
                index: 2,
                content: alternateDumbbellFrontRaiseNeutralGripImg2,
            },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(mg => [6, 7].indexOf(mg.id) !== -1),
    },
    {
        id: 43,
        name: "Концентрированное сгибание рук с гантелями",
        repsType: RepsType.QUANTITY,
        loadMeasureUnit: MeasureUnit.KILOGRAM,
        images: [
            { index: 1, content: dumbbellConcentrationCurlImg1 },
            {
                index: 2,
                content: dumbbellConcentrationCurlImg2,
            },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [16, 17].indexOf(mg.id) !== -1,
        ),
    },
    {
        id: 44,
        name: "Планка",
        repsType: RepsType.DURATION_MIN,
        images: [
            { index: 1, content: plankImg1 },
            {
                index: 2,
                content: plankImg2,
            },
        ],
        muscleGroups: MUSCLE_GROUPS.filter(
            mg => [22, 25].indexOf(mg.id) !== -1,
        ),
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
    return new Promise(res =>
        res(EXERCISES.filter(e => ids.indexOf(e.id) !== -1)),
    );
}
