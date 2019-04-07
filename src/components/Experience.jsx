import React from 'react';
import './Experience.css';

export const Experience = ({ title, company, location, timePeriod, bullets }) => {
  return <div className="experience">
    <span>{title}</span>
    <span>{company}</span>
    <span>{location}</span>
    <span>{timePeriod}</span>
    <ul>
      {bullets.map(bullet => <li>{bullet}</li>)}
    </ul>
  </div>;
};