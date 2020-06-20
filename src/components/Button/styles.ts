import styled from 'styled-components';
import { shade } from 'polished';

export const Button = styled.button`
  background: #ff9000;
  color: #312e38;
  height: 56px;
  border-radius: 10px;
  border: 0px;
  padding: 0px 16px;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;