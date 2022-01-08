import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {Login} from "./components/Login/Login";
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';

type PropsType={

}


function App(props: PropsType) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route exact path='/dialogs' render={() => <DialogsContainer />} />
          <Route exact path='/users' render={() => <UsersContainer />} />
          <Route exact path='/login' render={() => <Login />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
