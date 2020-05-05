import React from 'react';
import { Subtitle } from './page-subtitle.styled';
import { animated } from 'react-spring';
import { useHeaderAnimation } from 'helpers/animations';

interface Props {
  title: string;
  size?: 'large';
}

const PageSubtitle: React.FC<Props> = (props) => {
  return (
    <animated.div style={useHeaderAnimation()}>
      <Subtitle size={props.size}>{props.title}</Subtitle>
    </animated.div>
  );
};

export default PageSubtitle;
