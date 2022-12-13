import styled from 'styled-components';

export const FeedbackOptionsList = styled.ul`
  display: flex;
  list-style: none;
`;

export const BtnControl = styled.button`
  width: 100px;
  height: 30px;
  margin-right: 10px;
  border: none;
  background: grey;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  &:hover {
    background-color: lightgray;
    color: black;
  }
`;
export const Message = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
