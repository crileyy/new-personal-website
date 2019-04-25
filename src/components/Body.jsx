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
        <Tab><span className="tab-exp">Experience</span></Tab>
        <Tab><span className="tab-proj">Projects</span></Tab>
        <Tab><span className="tab-music">Music</span></Tab>
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