import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props: any) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <ProfileContainer />} />
          <Route exact path='/dialogs' render={() => <DialogsContainer />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
