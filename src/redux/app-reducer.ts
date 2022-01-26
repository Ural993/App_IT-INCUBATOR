import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {getAuthUserDate} from "./auth-reducer";

let SET_INITIALIZED = 'SET_INITIALIZED'


export type InitialAuthStateType = {
    initialized: boolean
}

let initialState: InitialAuthStateType = {
    initialized: false,
}

export const appReducer = (state = initialState, action: ActionType): InitialAuthStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialized:true}

        default:
            return state

    }

}
type ActionType = setInitializedACType
type setInitializedACType = {
    type: typeof SET_INITIALIZED
}
export const setInitialized = (): setInitializedACType => ({type: SET_INITIALIZED})

export const initializeApp =()=>(dispatch:any)=>{
   let promise = dispatch(getAuthUserDate())
    promise.then(()=>{
            dispatch(setInitialized())
    }
    )
}
