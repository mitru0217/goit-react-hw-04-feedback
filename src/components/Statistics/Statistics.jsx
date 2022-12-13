import React from 'react';
import { StatisticsBox, StatisticsTitle } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsBox>
    <StatisticsTitle>Good: {good} </StatisticsTitle>
    <StatisticsTitle>Neutral: {neutral} </StatisticsTitle>
    <StatisticsTitle>Bad: {bad} </StatisticsTitle>
    {total > 0 && <StatisticsTitle>Total: {total}</StatisticsTitle>}
    {positivePercentage > 0 && (
      <StatisticsTitle>
        Positive Feedback: {positivePercentage}%
      </StatisticsTitle>
    )}
  </StatisticsBox>
);

export default Statistics;
