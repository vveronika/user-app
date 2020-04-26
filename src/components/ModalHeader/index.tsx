import React from 'react';
import { HeaderWrapper } from 'components/ModalHeader/modal-header.styled';
import BaseText from 'components/BaseText';

interface Props {
  title: string;
}

const ModalHeader: React.FC<Props> = (props) => {
  return (
    <HeaderWrapper>
      <BaseText highlight text={props.title} />
    </HeaderWrapper>
  );
};

export default ModalHeader;
