import React from 'react';
import logo from './logo.svg';
import Home from './Pages/Home/Home';
import AppBar from './Components/Appbar/Appbar';

function App() {
  return (
    <div className="App" >
        <AppBar/>
        <Home/>
    </div>
  );
}

export default App;
