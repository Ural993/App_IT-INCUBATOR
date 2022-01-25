import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

let SET_USER_DATA = 'SET_USER_DATA'


export type InitialAuthStateType = {
    id: string
    email: string
    login: string
    isAuth: boolean
}

let initialState: InitialAuthStateType = {
    id: '',
    email: '',
    login: '',
    isAuth: false,

}

export const authReducer = (state = initialState, action: ActionType): InitialAuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}

        default:
            return state

    }

}
type ActionType = setUserDataACType
type setUserDataACType = {
    type: typeof SET_USER_DATA
    payload: InitialAuthStateType
}
export const setUserData = (id:string, email:string, login:string, isAuth:boolean): setUserDataACType => ({type: SET_USER_DATA,
    payload:{id, email, login, isAuth}})

export const getAuthUserDate =()=>(dispatch:Dispatch)=>{
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setUserData(id, email, login, true))
            }
        })
}
export const login =(login:string, password:string, rememberMe=false)=>(dispatch:any)=>{
    authAPI.login(login, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserDate())
            }
            else {
                let message = response.data.messages? response.data.messages[0]: "Some error"
                dispatch(stopSubmit('login', {_error:message}))
            }
        })
}
export const logout =()=>(dispatch:Dispatch)=>{
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData('', '', '', false))
            }
        })
}