import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {InitialAuthStateType, setUserData} from "../../redux/auth-reducer";


type PropsType = {
    login: string
    isAuth:boolean
    setUserData:(data: InitialAuthStateType)=>void
}

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data)
                }

            })
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
export default connect(MapStateToProps, {setUserData})(HeaderContainer)



