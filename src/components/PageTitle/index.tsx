import React from 'react';
import { Title } from './page-title.styled';
import { animated } from 'react-spring';
import { useHeaderAnimation } from 'helpers/animations';

interface Props {
  title: string;
  size?: 'large';
}
const PageTitle: React.FC<Props> = (props) => {
  return (
    <animated.div style={useHeaderAnimation()}>
      <Title size={props.size}>{props.title}</Title>
    </animated.div>
  );
};

export default PageTitle;
