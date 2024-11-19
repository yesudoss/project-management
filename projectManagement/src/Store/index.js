import { combineReducers } from "redux";
import bloodgroupReducer from "./Ancillary/BloodGroup/Reducer/Reducer";
import MenuReducer from "./Menu/Reducer";

export default combineReducers({
    bloodgroupReducer,
    MenuReducer

});