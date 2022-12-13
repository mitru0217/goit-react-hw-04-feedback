import React from 'react';
import { FeedbackOptionsList, BtnControl } from './FeedbackOptins.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsList>
      {options.map(option => (
        <li key={option}>
          <BtnControl
            type="button"
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </BtnControl>
        </li>
      ))}
    </FeedbackOptionsList>
  );
};

export default FeedbackOptions;
