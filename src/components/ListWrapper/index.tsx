import React from 'react';
import { ListContainer } from './list-wrapper.styled';
import ModalUserDetails from '../ModalUserDetails';
import { User } from 'models/user';

interface Props {
  items: User[];
}

const ListWrapper: React.FC<Props> = (props) => {
  const { items } = props;
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
        />
      ))}
    </ListContainer>
  );
};

export default ListWrapper;
