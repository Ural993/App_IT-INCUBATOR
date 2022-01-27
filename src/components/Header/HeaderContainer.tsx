import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";


type PropsType = {
    login: string
    isAuth:boolean
}

class HeaderContainer extends React.Component<PropsType> {


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
export default connect(MapStateToProps)(HeaderContainer)



