import MuscleGroup from "./MuscleGroup";
import RepsType from "./enums/RepsType";
import MeasureUnit from "./enums/MeasureUnit";

// todo add video
type Exercise = {
    id: number;
    name: string;
    muscleGroups: (MuscleGroup & { involvement?: number })[];
    repsType: RepsType;
    loadMeasureUnit?: MeasureUnit;
    images: {
        index: number;
        content: string;
    }[];
};

export default Exercise;
