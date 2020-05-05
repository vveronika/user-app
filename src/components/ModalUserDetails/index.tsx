import React from 'react';
import { connect } from 'react-redux';
import ModalWrapper from 'components/ModalWrapper';
import ListItem from 'components/ListItem';
import UserContactDetails from 'components/UserContactDetails';
import { ContentWrapper, SectionTitle } from 'components/ModalUserDetails/modal-user-details.styled';
import { Address } from 'models/address';
import ModalHeader from 'components/ModalHeader';
import { Post } from 'models/post';
import BaseButton from 'components/BaseButton';
import PostsWrapper from 'components/PostsWrapper';
import { fetchPosts } from 'redux/actions';
import { RootState } from 'models/rootState';

interface Props {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: Address;
  posts: Post[];
  fetchPosts: (userId: number) => void;
  loading: boolean;
}

const ModalUserDetails: React.FC<Props> = (props) => {
  const {
    id,
    name,
    username,
    email,
    phone,
    address,
    posts,
    fetchPosts,
    loading,
  } = props;

  const currentUserPosts = posts.filter(post => post.userId === id);

  const getUsersPosts = () => {
    if (!currentUserPosts.length) {
      fetchPosts(id);
    }
  }

  return (
    <ModalWrapper
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
        {!currentUserPosts.length && (
          <BaseButton
            appearance="action"
            loading={loading}
            label="Load user's posts"
            onClick={getUsersPosts}
          />
        )}
        {!!currentUserPosts.length && <SectionTitle>{username}'s posts:</SectionTitle>}
        <PostsWrapper posts={currentUserPosts} />
      </ContentWrapper>
    </ModalWrapper>
  );
};

const mapStateToProps = (state: RootState) => {
  const posts = state.posts.posts;
  const loading = state.posts.loading;
  return {
    posts,
    loading,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchPosts: (userId: number) => dispatch(fetchPosts(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUserDetails);
