import React, { ReactElement } from "react";
import { ScrollView, Text, View } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import RepsType from "@domain/enums/RepsType";
import MeasureUnit from "@domain/enums/MeasureUnit";

import { Props } from "./types";
import styles from "./styles";

export default function ExerciseSummary({ name, repsType, loadMeasureUnit, sets  }: Props) {
    const imageProps = {
        size: 20,
        color: "rgba(0, 0, 0, 0.4)",
    };

    const sortedSets = sets.sort((a, b) => a.orderNumber - b.orderNumber);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            <ScrollView style={styles.sets} horizontal>
                {sortedSets.map(({ orderNumber, reps, loadAmount }) => (
                    <View key={orderNumber} style={styles.set}>
                        <Text style={[styles.setText, styles.orderNumber]}>{orderNumber}</Text>
                        <View style={styles.setDetails}>
                            <Text style={[styles.setText, styles.valueText]}>{reps}</Text>
                            {getRepsTypeImageReactElement(repsType)}

                            {loadAmount
                                ? (
                                    <>
                                        <Text style={[styles.setText, styles.valueText, styles.loadAmount]}>{loadAmount}</Text>
                                        {loadMeasureUnit !== undefined ? getLoadMeasureUnitImageReactElement(loadMeasureUnit) : null}
                                    </>)
                                : null}
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );

    function getRepsTypeImageReactElement(type: RepsType): ReactElement {
        switch (type) {
        case RepsType.QUANTITY:
            return (<Octicons name="number" {...imageProps} />);
        case RepsType.DISTANCE:
            return (<MaterialCommunityIcons name="size-m" {...imageProps} />);
        case RepsType.DURATION_SEC:
        case RepsType.DURATION_MIN:
            return (<Ionicons name="time-outline" {...imageProps} />);
        }
    }

    function getLoadMeasureUnitImageReactElement(measureUnit: MeasureUnit): ReactElement {
        switch (measureUnit) {
        case MeasureUnit.KILOGRAM:
            return (<MaterialCommunityIcons name="weight-kilogram" {...imageProps} />);
        case MeasureUnit.KILOMETER_PER_HOUR:
            return (<Ionicons name="speedometer-outline" {...imageProps} />);
        }
    }
}
