import styled, { ThemedStyledProps } from 'styled-components';
import { theme } from '../../app.styled';

interface PageTitleProps {
  size?: 'large';
}

const fontSize = (props: ThemedStyledProps<PageTitleProps, any>) => {
  if (props.size === 'large') {
    return props.theme.largeTitle;
  }
  return props.theme.defaultTitle;
};

export const Title = styled.h1<PageTitleProps>`
  color: ${theme.bluePrimary};
  text-transform: uppercase;
  font-size: ${(props) => fontSize(props)};
  font-weight: ${theme.bold};
  margin: 0 0 15px;
`;
