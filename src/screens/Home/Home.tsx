import React from "react";
import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "@components/Button";

import styles from "./styles";

import homeCat from "../../assets/images/homeCat.jpg";

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>GYM Universe</Text>
            <View style={styles.buttonsContainer}>
                <Button
                    title="Добавить тренировку"
                    onPress={() => navigation.navigate("AddTraining")}
                />
                <Button
                    title="История тренировок"
                    onPress={() => navigation.navigate("TrainingsHistory")}
                />
            </View>
            <Image source={homeCat} resizeMode="contain" style={styles.image} />
        </View>
    );
}
