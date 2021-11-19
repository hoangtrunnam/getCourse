const initialState ={
    list:[
       { 
            name: 'Hoang Trung Nam',
            des: 'abcd'
       }
    ]
}

const deleteReducer = (state= initialState,action) => {
    switch (action.type) {
        case "delete":{
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

export default deleteReducer;