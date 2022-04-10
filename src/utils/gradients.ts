type gradientsTable = {
    [key: string]: {
        topColor: string;
        midColor: string;
        yInput: number;
    };
};

const gradients: gradientsTable = {
    Amsterdam: {
        topColor: "#6e321d",
        midColor: "#929196",
        yInput: 0.2
    },
    Barcelona: {
        topColor: "#bb0013",
        midColor: "#d7d5d8",
        yInput: 0.3
    },
    Budapest: {
        topColor: "#c55c0c",
        midColor: "#bdd4ba",
        yInput: 0.2
    },
    "Hong Kong": {
        topColor: "#022041",
        midColor: "#354d67",
        yInput: 0.3
    },
    "San Francisco": {
        topColor: "#3d5a32",
        midColor: "#a2b1b4",
        yInput: 0.3
    },
    Tokyo: {
        topColor: "#022041",
        midColor: "#354d67",
        yInput: 0.3
    }
};

export default gradients;
