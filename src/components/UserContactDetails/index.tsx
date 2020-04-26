import React from 'react';
import { DetailsWrapper } from 'components/UserContactDetails/user-contact-details.styled';
import UserDetailRow from 'components/UserDetailRow';
import { Address } from 'models/address';

interface Props {
  name: string;
  userName: string;
  phone: string;
  email: string;
  address: Address;
}

const UserContactDetails: React.FC<Props> = (props) => {
  const { name, userName, phone, email, address } = props;

  const composeFirstLineAddress = () => {
    return `${address.suite} ${address.street},`;
  };

  const composeSecondLineAddress = () => {
    return `${address.zipcode} ${address.city}`;
  };

  return (
    <DetailsWrapper>
      <UserDetailRow label="Name:" text={name} />
      <UserDetailRow label="User name:" text={userName} />
      <UserDetailRow label="Phone number:" text={phone} />
      <UserDetailRow label="Email:" text={email} />
      <UserDetailRow
        label="Address"
        text={composeFirstLineAddress()}
        secondLineText={composeSecondLineAddress()}
      />
    </DetailsWrapper>
  );
};

export default UserContactDetails;
