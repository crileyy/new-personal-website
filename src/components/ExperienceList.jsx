import React from 'react';
import {Experience} from './Experience';
import './ExperienceList.css';
import Intuit from '../images/Intuit.png';

const title1 = 'Software Engineer Co-op';
const company1 = 'Intuit';
const location1 = 'Mountain View, California';
const timePeriod1 = 'January 2019 - May 2019';
const bullets1 = [
  'Completed research to improve frontend performance of QuickBooks Online Payroll using Chrome developer tools and WebPageTest',
  'Developed 5 strategies to improve frontend performance that the team followed for a month (bundle and minify js and css, only include css that the page is actually using, defer the download of non-critical resources, add a pr hook to check the complexity of js which reduce the time spent parsing, compiling, and executing js, decrease the time to first byte, removing unnecessary resources)',
  'Created a Yeoman generator that set up a base Payroll UI component for developers',
  'Decomposed the UI monolith for tax center in Payroll using React and JavaScript',
  'Built a new authentication experience using React and JavaScript'
];

const title2 = 'Software Engineer Co-op';
const company2 = 'Intuit';
const location2 = 'San Diego, California';
const timePeriod2 = 'January 2018 - August 2018';
const bullets2 = [
  'Rebuilt the core backend micro-service used in the majority of TurboTax Online testing using Spring Boot and Java and deployed it in AWS with a CI/CD pipeline, allowing the team to develop faster',
  'Built multiple APIs and wrote service code for an internal tool, increasing testing efficiency and shortening the release time for developers to 45 minutes, using Java, Kotlin, and Spring Boot',
  'Designed and created the UI, API, and service code for a feature that makes testing TurboTax Online easier',
  'Migrated a service to AWS Lambda using Java and used AWS CloudFormation to create a CI/CD pipeline, saving the team money',
  'Took ownership over multiple internal tools; monitored deploys, fixed production bugs, and responded to a customer help Slack channel with 55+ engineers',
  'Gave multiple presentations about the team\'s tools, including a tech talk to 50+ engineers'
];

const title3 = 'Enterprise Engineer Intern';
const company3 = 'Facebook';
const location3 = 'Menlo Park, California';
const timePeriod3 = 'September 2019 - December 2019';
const bullets3 = [];

const title4 = 'Software Engineer Co-op';
const company4 = 'ASICS';
const location4 = 'Boston, Massachusetts';
const timePeriod4 = 'May 2019 - September 2019';
const bullets4 = [];

const title5 = 'Teaching Assistant for Object Oriented Design and Logic & Computation';
const company5 = 'Northeastern University';
const location5 = 'Boston, Massachusetts';
const timePeriod5 = 'May 2017 - December 2018';
const bullets5 = [
  'Instructed and lead 20 person labs that met twice a week for 2 hours',
  'Held office hours 2 times a week for 2 hours to answer student questions and provide assistance',
  'Graded students’ Java and ACL2s coding assignments, midterm, and final exam'
];

export const ExperienceList = () => {
  return <div className="experience-list">
    <Experience title={title3} company={company3} location={location3} timePeriod={timePeriod3} bullets={bullets3} image={Intuit}/>
    <Experience title={title4} company={company4} location={location4} timePeriod={timePeriod4} bullets={bullets4} image={Intuit}/>
    <Experience title={title1} company={company1} location={location1} timePeriod={timePeriod1} bullets={bullets1} image={Intuit}/>
    <Experience title={title2} company={company2} location={location2} timePeriod={timePeriod2} bullets={bullets2} image={Intuit}/>
    <Experience title={title5} company={company5} location={location5} timePeriod={timePeriod5} bullets={bullets5} image={Intuit}/>
  </div>
};