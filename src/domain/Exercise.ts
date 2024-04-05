import MuscleGroup from "./MuscleGroup";

// todo add video
type Exercise = {
    id: number;
    name: string;
    muscleGroups: (MuscleGroup & { involvement?: number })[];
    useSingleSet: boolean;
    images: {
        index: number;
        content: string;
    }[];
};

export default Exercise;
