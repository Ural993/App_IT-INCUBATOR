import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profile-reducer";

type RootReducerType = typeof rootReducer;
export type AppSteteType = ReturnType<RootReducerType>



let rootReducer = combineReducers({
    profilePage: profileReducer
})


export let store = createStore(rootReducer);