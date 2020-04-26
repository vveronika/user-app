import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Overlay,
  ModalContent,
  ModalHeader,
  TitleWrapper,
} from './modal-wrapper.styled';
import BaseText from '../BaseText';
import { toggleBodyOverflow } from 'helpers/localStateHelpers';
import BaseButton from '../BaseButton';
import CloseButton from 'components/CloseButton';
import { IconName } from '@fortawesome/fontawesome-svg-core';

interface Props {
  activator: any;
  modalTitle?: string;
  onSubmit?: () => void;
  submitLabel?: string;
  disabled?: boolean;
  buttonAppereance?: 'primary' | 'action' | 'warning';
  icon?: IconName;
}

const ModalWrapper: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const {
    activator,
    modalTitle,
    onSubmit,
    submitLabel,
    disabled,
    buttonAppereance,
    icon,
    children,
  } = props;

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) toggleBodyOverflow('hidden');
    else toggleBodyOverflow('scroll');
  }, [show]);

  const onSubmitClick = () => {
    setShow(false);
    onSubmit && onSubmit();
  };

  const content = show && (
    <Overlay>
      <ModalContent>
        <>
          <ModalHeader>
            <TitleWrapper>
              {modalTitle && <BaseText highlight text={modalTitle} />}
            </TitleWrapper>
            <CloseButton onClick={() => setShow(false)} />
          </ModalHeader>
          {children}
        </>
        {onSubmit && submitLabel && (
          <BaseButton
            disabled={disabled}
            label={submitLabel}
            onClick={onSubmitClick}
            appearance={buttonAppereance}
            icon={icon}
          />
        )}
      </ModalContent>
    </Overlay>
  );
  return (
    <>
      {activator({ setShow })}
      {createPortal(content, document.body)}
    </>
  );
};

export default ModalWrapper;
