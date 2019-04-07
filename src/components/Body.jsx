import React from 'react';
import { ExperienceList } from './ExperienceList'
import { ProjectList } from './ProjectList';
import { Music } from './Music';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.css';

export const Body = () => {
  return <div className="App-body">
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
        <Music />
      </TabPanel>
    </Tabs>
  </div>;
};