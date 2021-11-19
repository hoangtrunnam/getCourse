import deleteReducer from "./CRUDReducer";
import restoreReducer from "./restoreDeleteCourse";
import { combineReducers } from "redux";


const rootReducer = combineReducers(
    {
        courseDelete: deleteReducer,
        restoreCourse: restoreReducer
    }
)

export default rootReducer;