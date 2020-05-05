import React from 'react';
import { Button, Icon } from 'components/BaseButton/base-button.styled';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import Loader from 'components/Loader';
import { theme } from 'app.styled';

interface Props {
  label: string;
  onClick: () => void;
  appearance?: 'action' | 'primary' | 'warning';
  disabled?: boolean;
  icon?: IconName;
  loading?: boolean;
}

const BaseButton: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { label, onClick, appearance, disabled, icon, children } = props;
  return (
    <Button disabled={disabled} appearance={appearance} onClick={onClick}>
      {!props.loading && icon && <Icon icon={icon} />}
      {!props.loading && children}
      {!props.loading && label}
      {props.loading && <Loader color={theme.white} size={20} />}
    </Button>
  );
};

export default BaseButton;
