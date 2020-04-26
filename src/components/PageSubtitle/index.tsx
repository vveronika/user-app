import React from 'react';
import { Subtitle } from './page-subtitle.styled';

interface Props {
  title: string;
  size?: 'large';
}

const PageSubtitle: React.FC<Props> = (props) => {
  return <Subtitle size={props.size}>{props.title}</Subtitle>;
};

export default PageSubtitle;
