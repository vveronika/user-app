import styled from 'styled-components';
import { theme } from 'app.styled';

interface TextProps {
  highlight?: boolean;
}

export const Text = styled.p<TextProps>`
  margin: ${(props) => (props.highlight ? '0 0 10px 0' : '0')};
  font-weight: ${(props) => (props.highlight ? theme.bold : theme.regular)};
  color: ${(props) => (props.highlight ? theme.highlight : theme.basicFont)};
  font-size: ${(props) => (props.highlight ? '14px' : '12px')};

  @media (min-width: 768px) {
    font-size: ${(props) => (props.highlight ? '18px' : '16px')};
  }
`;
