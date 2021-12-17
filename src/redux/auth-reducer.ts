import {authAPI} from "../api/api";
import {Dispatch} from "redux";

let SET_USER_DATA = 'SET_USER_DATA'


export type InitialAuthStateType = {
    id: number | null
    email: string
    login: string
    isAuth: boolean
}

let initialState: InitialAuthStateType = {
    id: null,
    email: '',
    login: '',
    isAuth: false,

}

export const authReducer = (state = initialState, action: any): InitialAuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}

        default:
            return state

    }

}

type setUserDataACType = {
    type: typeof SET_USER_DATA
    data: InitialAuthStateType
}
export const setUserData = (data: InitialAuthStateType): setUserDataACType => ({type: SET_USER_DATA, data})

export const getAuthUserDate =()=>(dispatch:Dispatch)=>{
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(response.data.data))
            }
        })
}