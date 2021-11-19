const initialState ={
    list:[]
}

const restoreReducer = (state= initialState,action) => {
    switch (action.type) {
        case "restore":{
            const newList = [...state.list];
            newList.push(action.payload);
            return {
                ...state,
                list: newList,
            }
        }

        default:
            return state;
    }
}

export default restoreReducer;