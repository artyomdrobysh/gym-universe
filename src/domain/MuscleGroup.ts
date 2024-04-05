type MuscleGroup = {
    id: number;
    name: string;
    parent?: MuscleGroup;
    image: string;
    childrenExists: boolean;
};

export default MuscleGroup;
