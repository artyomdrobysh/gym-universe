import React, { ComponentType } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import ErrorBoundary from "@components/ErrorBoundary";

import ROUTES from "@constants/routes";

export default function withErrorBoundaryScreen<R extends keyof ROUTES>(
    WrappedComponent: ComponentType<NativeStackScreenProps<ROUTES, R>>,
): ComponentType<NativeStackScreenProps<ROUTES, R>> {
    const displayName = WrappedComponent.displayName || "WrappedComponent";

    const ErrorSafeComponent: ComponentType<
        NativeStackScreenProps<ROUTES, R>
    > = props => (
        <ErrorBoundary navigation={props.navigation}>
            <WrappedComponent {...props} />
        </ErrorBoundary>
    );

    ErrorSafeComponent.displayName = displayName;

    return ErrorSafeComponent;
}
