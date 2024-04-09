import React, { memo, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import RepsType from "@domain/enums/RepsType";
import MeasureUnit from "@domain/enums/MeasureUnit";

import { Props } from "./types";
import styles from "./styles";

export default memo(function AddSet({
    repsType,
    onChange,
    loadMeasureUnit,
    preLoad,
}: Props) {
    const [reps, setReps] = useState<string>(
        preLoad ? preLoad.reps.toString(10) : "",
    );
    const [load, setLoad] = useState<string>(
        preLoad?.loadAmount ? preLoad.loadAmount.toString(10) : "",
    );

    return (
        <View style={styles.container}>
            {preLoad?.orderNumber ? (
                <Text style={styles.orderNumber}>{preLoad?.orderNumber}</Text>
            ) : null}
            {loadMeasureUnit !== undefined ? (
                <View style={styles.block}>
                    <Text style={styles.blockTitle}>
                        {getLoadTitle(loadMeasureUnit)}
                    </Text>
                    <TextInput
                        textAlign="center"
                        style={styles.input}
                        keyboardType="numeric"
                        value={load}
                        onChangeText={val => setLoad(val)}
                    />
                </View>
            ) : null}
            <View style={styles.block}>
                <Text style={styles.blockTitle}>
                    {getRepsTitle(repsType, loadMeasureUnit)}
                </Text>
                <TextInput
                    textAlign="center"
                    style={styles.input}
                    keyboardType="numeric"
                    value={reps}
                    onChangeText={val => setReps(val)}
                />
            </View>
            <Pressable
                style={styles.setsAddButton}
                disabled={
                    reps === "" ||
                    (loadMeasureUnit !== undefined && load === "")
                }
                onPress={handleChange}>
                {preLoad?.orderNumber ? (
                    <MaterialIcons name="edit" size={30} color="black" />
                ) : (
                    <Ionicons name="add" size={40} color="black" />
                )}
            </Pressable>
        </View>
    );

    function getRepsTitle(
        repsType: RepsType,
        loadMeasureUnit?: MeasureUnit,
    ): string {
        switch (repsType) {
        case RepsType.QUANTITY:
            return loadMeasureUnit ? "повторения" : "количество";
        case RepsType.DISTANCE:
            return "расстояние (м)";
        case RepsType.DURATION_SEC:
            return "время (сек)";
        case RepsType.DURATION_MIN:
            return "время (мин)";
        }
    }

    function getLoadTitle(measureUnit: MeasureUnit): string {
        switch (measureUnit) {
        case MeasureUnit.KILOGRAM:
            return "вес (кг)";
        case MeasureUnit.KILOMETER_PER_HOUR:
            return "скорость (км/ч)";
        }
    }

    function handleChange() {
        onChange(
            Number.parseInt(reps, 10),
            load ? Number.parseFloat(load) : undefined,
            preLoad?.orderNumber,
        );
        if (!preLoad) {
            setReps("");
            setLoad("");
        }
    }
});
