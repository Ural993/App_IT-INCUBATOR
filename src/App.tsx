import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import UsersContainer from './components/Users/UsersContainer';
import {Login} from "./components/Login/Login";
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {connect} from 'react-redux';
import HeaderContainer from './components/Header/HeaderContainer';
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/Common/Preloader/Preloader";

type MDTPTypeType = {
    initializeApp: () => void
}
type MSTPType = {
    initialized: boolean
}
type PropsType = MDTPTypeType & MSTPType

class App extends React.Component<PropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        // if(!this.props.initialized) return <Preloader/>
        return (
            <HashRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route exact path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route exact path='/users' render={() => <UsersContainer/>}/>
                        <Route exact path='/login' render={() => <Login/>}/>
                    </div>
                    <Footer/>
                </div>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}


export default connect(mapStateToProps, {initializeApp})(App);
