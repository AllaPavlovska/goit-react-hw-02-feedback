import React from 'react';
import './Statistic.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className='statistics'>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </div>
);

export default Statistics;

