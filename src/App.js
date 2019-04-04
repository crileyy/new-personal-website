import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { ExperienceList } from './components/ExperienceList'
import { ProjectList } from './components/ProjectList';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./components/react-tabs.css";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <Tabs>
          <TabList>
            <Tab>Experience</Tab>
            <Tab>Projects</Tab>
            <Tab>Music</Tab>
          </TabList>

          <TabPanel>
            <ExperienceList />
          </TabPanel>
          <TabPanel>
            <ProjectList />
          </TabPanel>
          <TabPanel>
            <span>music!</span>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
