import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { ExperienceList } from './components/ExperienceList'
import { ProjectList } from './components/ProjectList';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <ExperienceList />
        <ProjectList />
      </div>
    </div>
  );
}
