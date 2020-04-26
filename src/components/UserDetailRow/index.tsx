import React from 'react';
import {
  DetailRow,
  Label,
} from 'components/UserDetailRow/user-detail-row.styled';
import BaseText from 'components/BaseText';

interface Props {
  label: string;
  text: string;
  secondLineText?: string;
}

const UserDetailRow: React.FC<Props> = (props) => {
  const { label, text, secondLineText } = props;

  return (
    <DetailRow>
      <Label>{label}</Label>
      <BaseText text={text} />
      {secondLineText && <BaseText text={secondLineText} />}
    </DetailRow>
  );
};

export default UserDetailRow;
