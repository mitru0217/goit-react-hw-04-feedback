import { Feedback } from 'components/Section/Section.styled';

function Section({ title, children }) {
  return (
    <Feedback>
      {title && <h1>Please leave feedback</h1>}
      {children}
    </Feedback>
  );
}
export default Section;
