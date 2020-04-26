import React from 'react';
import { Button, Icon } from 'components/BaseButton/base-button.styled';
import { IconName } from '@fortawesome/fontawesome-svg-core';

interface Props {
  label: string;
  onClick: () => void;
  appearance?: 'action' | 'primary' | 'warning';
  disabled?: boolean;
  icon?: IconName;
}

const BaseButton: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { label, onClick, appearance, disabled, icon, children } = props;
  return (
    <Button disabled={disabled} appearance={appearance} onClick={onClick}>
      {icon && <Icon icon={icon} />}
      {children}
      {label}
    </Button>
  );
};

export default BaseButton;
