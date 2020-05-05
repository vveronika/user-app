import React from 'react';
import { Post } from 'models/post';
import UserPost from 'components/UserPost';

interface Props {
  posts: Post[];
}

const PostsWrapper: React.FC<Props> = (props) => {
  const { posts } = props;
  return (
    <>
      {posts.map((post) => (
        <UserPost key={post.id} postTitle={post.title} postBody={post.body} />
      ))}
    </>
  );
};

export default PostsWrapper;
