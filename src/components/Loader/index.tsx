import React from 'react';
import DotLoader from 'react-spinners/DotLoader';

interface Props {
  size: number;
  color: string;
}

const Loader: React.FC<Props> = (props) => {
  return <DotLoader size={props.size} color={props.color} />;
};

export default Loader;
