import React from 'react';
import { Text } from 'components/BaseText/base-text.styled';

interface Props {
  highlight?: boolean;
  text: string;
}

const BaseText: React.FC<Props> = (props) => {
  const { highlight, text } = props;

  return <Text highlight={highlight}>{text}</Text>;
};

export default BaseText;
