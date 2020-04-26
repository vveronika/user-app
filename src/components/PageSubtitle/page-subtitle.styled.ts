import styled, { ThemedStyledProps } from 'styled-components';
import { theme } from '../../app.styled';

interface PageSubtitleProps {
  size?: 'large';
}

const fontSize = (props: ThemedStyledProps<PageSubtitleProps, any>) => {
  if (props.size === 'large') {
    return props.theme.largeSubtitle;
  }
  return props.theme.defaultSubtitle;
};

export const Subtitle = styled.span<PageSubtitleProps>`
  color: ${theme.black};
  font-size: ${(props) => fontSize(props)};
  margin-bottom: 30px;
`;
