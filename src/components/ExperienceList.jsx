import React from 'react';
import {Experience} from './Experience';

const title = 'Software Engineer Co-op';
const company = 'Intuit';
const location = 'Mountain View, California';
const timePeriod = 'January 2019 - May 2018';
const bullets = [
  'Completed research to improve frontend performance of QuickBooks Online Payroll',
  'Developed 5 strategies to improve frontend performance that the team followed for 2 months',
  'Created a Yeoman generator that set up a base Payroll UI component for developers',
  'Decomposed the UI monolith for tax center in payroll using React and JavaScript',
  'Built a new authentication experience using React and JavaScript'
];

export const ExperienceList = () => {
  return <div>
    <span>Experience</span>
    <Experience title={title} company={company} location={location} timePeriod={timePeriod} bullets={bullets}/>
    <Experience title={title} company={company} location={location} timePeriod={timePeriod} bullets={bullets}/>
    <Experience title={title} company={company} location={location} timePeriod={timePeriod} bullets={bullets}/>
  </div>
};