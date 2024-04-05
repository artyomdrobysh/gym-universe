import withErrorBoundaryScreen from "@hoc/withErrorBoundaryScreen";

import ExerciseDetails from "./ExerciseDetails";

export { default } from "./ExerciseDetails";

export const SafeExerciseDetails = withErrorBoundaryScreen(ExerciseDetails);
