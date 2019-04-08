import React from 'react';
import './Experience.css';

export const Experience = ({ title, company, location, timePeriod, bullets }) => {
  return <div className="experience">
    <h3 className="title">{title}</h3>
    <span>{company}</span>
    <span>{location}</span>
    <span>{timePeriod}</span>
    <ul>
      {bullets.map(bullet => <li>{bullet}</li>)}
    </ul>
  </div>;
};