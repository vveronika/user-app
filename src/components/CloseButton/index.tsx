import React from 'react';
import { Button, Icon } from './close-button.styled';

interface CloseButton {
  onClick: () => void;
}

const CloseButton: React.FC<CloseButton> = (props) => {
  return (
    <Button onClick={props.onClick}>
      <Icon icon="times" />
    </Button>
  );
};

export default CloseButton;
