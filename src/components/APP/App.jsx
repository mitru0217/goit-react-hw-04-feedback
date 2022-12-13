/* eslint-disable no-const-assign */

import { useState } from 'react';
import Section from '../Section/Section';
import FeedbackOtions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import { Container } from 'components/APP/App.styled';
import { Message } from 'components/FeedbackOptions/FeedbackOptins.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Feedback = { good, neutral, bad };
  const options = Object.keys(Feedback);

  const handleChange = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const total = good + neutral + bad;

  console.log(total);
  const positivePercentage = Math.trunc(((good * 0.1) / total) * 1000);
  return (
    <Container>
      <Section title="Upload stats">
        <FeedbackOtions options={options} onLeaveFeedback={handleChange} />
        {total === 0 ? (
          <Message>No Feedback given</Message>
        ) : (
          <div>
            <h2>Statistics</h2>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </div>
        )}
      </Section>
    </Container>
  );
}
