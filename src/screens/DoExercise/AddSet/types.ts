import RepsType from "@domain/enums/RepsType";
import MeasureUnit from "@domain/enums/MeasureUnit";

export type Props = {
    repsType: RepsType;
    loadMeasureUnit?: MeasureUnit;
    preLoad?: {
        orderNumber: number;
        reps: number;
        loadAmount?: number;
    };
    onChange: (reps: number, loadAmount?: number, orderNumber?: number) => void;
};
