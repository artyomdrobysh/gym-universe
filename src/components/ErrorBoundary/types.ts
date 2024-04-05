import { ReactElement } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import ROUTES from "@constants/routes";

export type Props<R> = {
    children: ReactElement;
    navigation: NativeStackNavigationProp<ROUTES, R>;
};

export type State = {
    hasError: boolean;
    error?: string;
};
