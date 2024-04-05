import React from "react";
import { Button, Image, Text, View } from "react-native";

import strictCat from "../../assets/images/strict-cat.jpg";

import { Props, State } from "./types";
import styles from "./styles";

class ErrorBoundary<R> extends React.Component<Props<R>, State> {
    constructor(props: Props<R>) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error: error.message };
    }

    render() {
        const { hasError, error } = this.state;
        if (hasError) {
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>Произошла ошибка: {error}</Text>
                    <Image
                        source={strictCat}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <Button
                        title="Вернуться на главный экран"
                        onPress={() => this.props.navigation.navigate("Home")}
                    />
                </View>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
