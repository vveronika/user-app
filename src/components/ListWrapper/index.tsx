import React from 'react';
import { ListContainer } from './list-wrapper.styled';
import ModalUserDetails from '../ModalUserDetails';
import { User } from 'models/user';

interface Props {
  items: User[];
  onDelete: (id: string) => void;
}

const ListWrapper: React.FC<Props> = (props) => {
  const { items, onDelete } = props;
  return (
    <ListContainer>
      {items.map((item) => (
        <ModalUserDetails
          key={item.id}
          id={item.id}
          name={item.name}
          username={item.username}
          email={item.email}
          phone={item.phone}
          address={item.address}
          onDelete={onDelete}
        />
      ))}
    </ListContainer>
  );
};

export default ListWrapper;
