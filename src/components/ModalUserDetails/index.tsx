import React from 'react';
import ModalWrapper from 'components/ModalWrapper';
import ListItem from 'components/ListItem';
import UserContactDetails from 'components/UserContactDetails';
import { ContentWrapper } from 'components/ModalUserDetails/modal-user-details.styled';
import { Address } from 'models/address';
import ModalHeader from 'components/ModalHeader';

interface Props {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: Address;
  onDelete: (id: string) => void;
}

const ModalUserDetails: React.FC<Props> = (props) => {
  const { id, name, username, email, phone, address, onDelete } = props;
  return (
    <ModalWrapper
      onSubmit={() => onDelete(id.toString())}
      icon="trash-alt"
      submitLabel="Delete user"
      buttonAppereance="warning"
      activator={({ setShow }: { setShow: (show: boolean) => void }) => (
        <ListItem
          username={username}
          email={email}
          onItemClick={() => setShow(true)}
        />
      )}
    >
      <ContentWrapper>
        <ModalHeader title={`${username}'s details`} />
        <UserContactDetails
          name={name}
          userName={username}
          phone={phone}
          email={email}
          address={address}
        />
      </ContentWrapper>
    </ModalWrapper>
  );
};

export default ModalUserDetails;
