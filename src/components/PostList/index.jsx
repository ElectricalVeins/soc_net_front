import ACTIONS from 'actions';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostCard from './PostCard';

const PostList = props => {
  const { posts, isFetching, error } = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_POSTS_REQUEST });
  }, []);

  if (isFetching) {
    return <div>LOADING...</div>;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <section>
      <h1>Posts</h1>
      {posts.map(post => (
        <PostCard key={post.id} {...post} />
      ))}
    </section>
  );
};

export default PostList;
