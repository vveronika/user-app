import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: 0;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
  & path {
    fill: ${(props) => props.theme.grey};
  }
`;
