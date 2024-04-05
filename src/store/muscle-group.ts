import MuscleGroup from "@domain/MuscleGroup";

import chest from "../assets/images/muscle-groups/chest.png";
import lowerChest from "../assets/images/muscle-groups/lower-chest.png";
import middleChest from "../assets/images/muscle-groups/middle-chest.png";
import upperChest from "../assets/images/muscle-groups/upper-chest.png";

import shoulders from "../assets/images/muscle-groups/shoulders.png";
import frontDeltaShoulders from "../assets/images/muscle-groups/front-delta-shoulders.png";
import middleDeltaShoulders from "../assets/images/muscle-groups/middle-delta-shoulders.png";
import backDeltaShoulders from "../assets/images/muscle-groups/back-delta-shoulders.png";

import back from "../assets/images/muscle-groups/back.png";
import lowerTrapeziusMuscle from "../assets/images/muscle-groups/lower-trapezius-muscle.png";
import upperTrapeziusMuscle from "../assets/images/muscle-groups/upper-trapezius-muscle.png";
import latissimusDorsiMuscle from "../assets/images/muscle-groups/latissimus-dorsi-muscle.png";
import teresMajorMuscle from "../assets/images/muscle-groups/teres-major-muscle.png";
import infraspinatusMuscle from "../assets/images/muscle-groups/infraspinatus-muscle.png";

import arms from "../assets/images/muscle-groups/arms.png";
import forearms from "../assets/images/muscle-groups/forearms.png";
import biceps from "../assets/images/muscle-groups/biceps.png";
import triceps from "../assets/images/muscle-groups/triceps.png";

import legs from "../assets/images/muscle-groups/legs.png";
import semitendinosusMuscle from "../assets/images/muscle-groups/semitendinosus-muscle.png";

import abs from "../assets/images/muscle-groups/abs.png";
import rectusAbdominisMuscle from "../assets/images/muscle-groups/rectus-abdominis-muscle.png";

export const MUSCLE_GROUPS: MuscleGroup[] = [
    {
        id: 1,
        name: "Грудь",
        image: chest,
        childrenExists: true,
    },
    {
        id: 2,
        name: "Верхняя часть",
        parent: {
            id: 1,
            name: "Грудь",
            image: chest,
            childrenExists: true,
        },
        image: upperChest,
        childrenExists: false,
    },
    {
        id: 3,
        name: "Средняя часть",
        parent: {
            id: 1,
            name: "Грудь",
            image: chest,
            childrenExists: true,
        },
        image: middleChest,
        childrenExists: false,
    },
    {
        id: 4,
        name: "Нижняя часть",
        parent: {
            id: 1,
            name: "Грудь",
            image: chest,
            childrenExists: true,
        },
        image: lowerChest,
        childrenExists: false,
    },
    {
        id: 5,
        name: "Плечи",
        image: shoulders,
        childrenExists: true,
    },
    {
        id: 6,
        name: "Передняя дельта",
        parent: {
            id: 5,
            name: "Плечи",
            image: shoulders,
            childrenExists: true,
        },
        image: frontDeltaShoulders,
        childrenExists: false,
    },
    {
        id: 7,
        name: "Средняя дельта",
        parent: {
            id: 5,
            name: "Плечи",
            image: shoulders,
            childrenExists: true,
        },
        image: middleDeltaShoulders,
        childrenExists: false,
    },
    {
        id: 8,
        name: "Задняя дельта",
        parent: {
            id: 5,
            name: "Плечи",
            image: shoulders,
            childrenExists: true,
        },
        image: backDeltaShoulders,
        childrenExists: false,
    },
    {
        id: 9,
        name: "Спина",
        image: back,
        childrenExists: true,
    },
    {
        id: 10,
        name: "Нижняя часть трапециевидной мышцы",
        parent: {
            id: 9,
            name: "Спина",
            image: back,
            childrenExists: true,
        },
        image: lowerTrapeziusMuscle,
        childrenExists: false,
    },
    {
        id: 11,
        name: "Верхняя часть трапециевидной мышцы",
        parent: {
            id: 9,
            name: "Спина",
            image: back,
            childrenExists: true,
        },
        image: upperTrapeziusMuscle,
        childrenExists: false,
    },
    {
        id: 12,
        name: "Широчайшая мышца спины",
        parent: {
            id: 9,
            name: "Спина",
            image: back,
            childrenExists: true,
        },
        image: latissimusDorsiMuscle,
        childrenExists: false,
    },
    {
        id: 13,
        name: "Большая круглая мышца",
        parent: {
            id: 9,
            name: "Спина",
            image: back,
            childrenExists: true,
        },
        image: teresMajorMuscle,
        childrenExists: false,
    },
    {
        id: 14,
        name: "Подостная мышца",
        parent: {
            id: 9,
            name: "Спина",
            image: back,
            childrenExists: true,
        },
        image: infraspinatusMuscle,
        childrenExists: false,
    },
    {
        id: 15,
        name: "Руки",
        image: arms,
        childrenExists: true,
    },
    {
        id: 16,
        name: "Предплечья",
        parent: {
            id: 15,
            name: "Руки",
            image: arms,
            childrenExists: true,
        },
        image: forearms,
        childrenExists: false,
    },
    {
        id: 17,
        name: "Бицепс",
        parent: {
            id: 15,
            name: "Руки",
            image: arms,
            childrenExists: true,
        },
        image: biceps,
        childrenExists: false,
    },
    {
        id: 18,
        name: "Трицепс",
        parent: {
            id: 15,
            name: "Руки",
            image: arms,
            childrenExists: true,
        },
        image: triceps,
        childrenExists: false,
    },
    {
        id: 19,
        name: "Ноги",
        image: legs,
        childrenExists: true,
    },
    {
        id: 20,
        name: "Полусухожильная мышца",
        parent: {
            id: 19,
            name: "Ноги",
            image: legs,
            childrenExists: true,
        },
        image: semitendinosusMuscle,
        childrenExists: false,
    },
    {
        id: 21,
        name: "Пресс",
        image: abs,
        childrenExists: true,
    },
    {
        id: 22,
        name: "Прямая мышца живота",
        parent: {
            id: 21,
            name: "Пресс",
            image: abs,
            childrenExists: true,
        },
        image: rectusAbdominisMuscle,
        childrenExists: false,
    },
];

export function getById(id: number): Promise<MuscleGroup | null> {
    return new Promise(res =>
        res(MUSCLE_GROUPS.find(mg => mg.id === id) ?? null),
    );
}

export function getAllByParent(parentId?: number): Promise<MuscleGroup[]> {
    return new Promise(res =>
        res(
            MUSCLE_GROUPS.filter(mg =>
                parentId ? mg.parent?.id === parentId : !mg.parent,
            ),
        ),
    );
}
