import React from 'react';
import {
  UserPostWrapper,
  PostBody,
} from 'components/UserPost/user-post.styled';
import UserDetailRow from 'components/UserDetailRow';

interface Props {
  postTitle: string;
  postBody: string;
}

const UserPost: React.FC<Props> = (props) => {
  const { postTitle, postBody } = props;

  return (
    <UserPostWrapper>
        <UserDetailRow label="Title:" text={postTitle} />
        <PostBody>
          {postBody}
        </PostBody>
    </UserPostWrapper>
  );
};

export default UserPost;
