import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserDate, InitialAuthStateType, setUserData} from "../../redux/auth-reducer";


type PropsType = {
    login: string
    isAuth:boolean
    getAuthUserDate:()=>void
}

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getAuthUserDate()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const MapStateToProps = (state: AppStateType) => {
    return {
        login: state.auth.login,
        isAuth:state.auth.isAuth,
    }
}
export default connect(MapStateToProps, {setUserData, getAuthUserDate})(HeaderContainer)



