import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MSTPType ={
    isAuth: boolean
}

export function withAuthRedirect <T>(Component: ComponentType<T>){
    const RedirectComponent = (props: MSTPType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to = {'/login'}
        />
        return <Component {...restProps as T}
        />
    }
    const mapStateToProps =(state:AppStateType):MSTPType=>{
        return{
            isAuth: state.auth.isAuth
        }
    }
    let ConnectRedirectComponent = connect(mapStateToProps, null)(RedirectComponent)
    return ConnectRedirectComponent
}