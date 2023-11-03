import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css'
import AppBrain from './AppBrain'
import LoginBrain from './components/LoginBrain/LoginBrain'

function App() {
  return (
    <div className="App">
      <LoginBrain />
    </div>
  );
}

export default App;
