import styled, { ThemedStyledProps } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from 'app.styled';

interface ButtonProps {
  appearance?: 'primary' | 'action' | 'warning';
}

const getStyles = (
  props: ThemedStyledProps<ButtonProps, any>,
  property: string,
) => {
  if (props.appearance === 'primary') {
    return props.theme[property][props.appearance];
  } else if (props.appearance === 'action') {
    return props.theme[property][props.appearance];
  } else if (props.appearance === 'warning') {
    return props.theme[property][props.appearance];
  }
  return props.theme[property].default;
};

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => getStyles(props, 'background')};
  color: ${(props) => getStyles(props, 'font')};
  border: 1px solid ${(props) => getStyles(props, 'border')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  margin: 5px 0;
  outline: none;
  transition: ${theme.buttonTransition};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => getStyles(props, 'backgroundHover')};
    color: ${(props) => getStyles(props, 'fontHover')};
    border: 1px solid ${(props) => getStyles(props, 'borderHover')};
  }

  &:disabled {
    background-color: ${theme.greenLight};
    color: ${theme.white};
    border: ${theme.greenLight};
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  height: 11px;
`;
