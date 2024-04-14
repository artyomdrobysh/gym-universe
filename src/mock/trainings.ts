import AsyncStorage from "@react-native-async-storage/async-storage";

import Training from "@domain/Training";

const KEY = "trainings";

export async function getAll(): Promise<Training[]> {
    try {
        const value = await AsyncStorage.getItem(KEY);
        if (value) {
            return JSON.parse(value);
        } else {
            await AsyncStorage.setItem(KEY, JSON.stringify([]));
            return [];
        }
    } catch (err) {
        // todo think
        throw err;
    }
}

export async function save(training: Omit<Training, "id">): Promise<number> {
    try {
        let id: number;
        const value = await AsyncStorage.getItem(KEY);
        if (value) {
            const trainings: Training[] = JSON.parse(value);
            id =
                trainings.length > 0
                    ? trainings.sort((a, b) => b.id - a.id)[0].id + 1
                    : 1;
            await AsyncStorage.setItem(
                KEY,
                JSON.stringify([...trainings, { id, ...training }]),
            );
        } else {
            id = 1;
            await AsyncStorage.setItem(
                KEY,
                JSON.stringify([{ id, ...training }]),
            );
        }
        return id;
    } catch (err) {
        // todo think
        throw err;
    }
}

export async function removeTraining(id: number): Promise<void> {
    try {
        const value = await AsyncStorage.getItem(KEY);
        if (value) {
            const trainings: Training[] = JSON.parse(value);
            await AsyncStorage.setItem(KEY, JSON.stringify(trainings.filter(t => t.id !== id)));
        }
    } catch (err) {
        // todo think
        throw err;
    }
}
