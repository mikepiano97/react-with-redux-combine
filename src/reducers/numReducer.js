const numInitialState = ['man hinh','ban phim','chuot'];
const numReducer = (state = numInitialState, action) => {
    switch (action.type) {
        case "ADD_NEW_ITEM":
            return [...state, action.newItem ];
    
        case "DELETE":
            return [ state.filter((value, key) => key !== action.number) ];
        default:
            return state
    }
};

export default numReducer;