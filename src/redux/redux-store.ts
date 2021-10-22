import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>



let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})


export let store = createStore(rootReducer);