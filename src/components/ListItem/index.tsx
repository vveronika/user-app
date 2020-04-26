import React from 'react';
import {
  ListItemWrapper,
  DetailsWrapper,
  ButtonWrapper,
} from './list-item.styled';
import BaseText from 'components/BaseText';
import BaseButton from 'components/BaseButton';

interface Props {
  username: string;
  email: string;
  onItemClick: () => void;
}

const ListItem: React.FC<Props> = (props) => {
  const { username, email } = props;
  return (
    <ListItemWrapper>
      <DetailsWrapper>
        <BaseText highlight text={username} />
        <BaseText text={email} />
      </DetailsWrapper>
      <ButtonWrapper>
        <BaseButton
          label="Check details"
          appearance="primary"
          onClick={props.onItemClick}
        />
      </ButtonWrapper>
    </ListItemWrapper>
  );
};

export default ListItem;
