import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className='header'>
        Header
      </header>
      <nav className='nav'>
        <div className="container">
          <div><a href="#">Profile</a></div>
          <div><a href="#">Messages</a></div>
          <div><a href="#">News</a></div>
          <div><a href="#">Musics</a></div>
          <div><a href="#">Settings</a></div>
        </div>
      </nav>
      <div className="content">
        <div className='avatar'>
          <img src="https://vraki.net/sites/default/files/inline/images/1_42.jpg" alt="" />
        </div>
      </div>
      <footer className='footer'>
        Footer
      </footer>

    </div>
  );
}

export default App;
