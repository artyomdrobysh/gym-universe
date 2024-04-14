import Training from "@domain/Training.ts";

export type Props = Training & {
    onRemove: (trainingId: number) => void;
};
