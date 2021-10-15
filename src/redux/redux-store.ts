import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profile-reducer";


let reducers = combineReducers({
    profilePage: profileReducer


})


export let store = createStore(reducers);