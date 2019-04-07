import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Body } from './components/Body';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}
