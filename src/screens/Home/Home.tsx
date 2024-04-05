import React from "react";
import { Button, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <Button
                title="Go to muscle groups"
                onPress={() => navigation.navigate("MuscleGroups")}
            />
        </View>
    );
}
