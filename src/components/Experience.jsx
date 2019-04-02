import React from 'react';

export const Experience = ({ title, company, location, timePeriod, bullets }) => {
  return <div>
    <span>{title}</span>
    <span>{company}</span>
    <span>{location}</span>
    <span>{timePeriod}</span>
    <ul>
      {bullets.map(bullet => <li>{bullet}</li>)}
    </ul>
  </div>;
};