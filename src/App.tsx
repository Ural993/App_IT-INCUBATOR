import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import { ProfileContainer } from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';




function App(props: any) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route exact path='/dialogs' render={() => <DialogsContainer />} />
          <Route exact path='/users' render={() => <UsersContainer />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
