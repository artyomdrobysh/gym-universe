import { StyleProp, ViewStyle } from "react-native";

export type Props = {
    size: number;
    onRemove: () => void;
    style?: StyleProp<ViewStyle>;
};
