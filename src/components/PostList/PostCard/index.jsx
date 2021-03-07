import LazyImage from 'components/LazyImage';
import { useDispatch } from 'react-redux';
import { IMAGE_PATH } from 'constants.js';
import PostImage from '../PostImage';

const PostCard = props => {
  const {
    imageSrc,
    id,
    body,
    author: { firstName, lastName, imageSrc: authorImg },
    createdAt,
  } = props;

  const src = `${IMAGE_PATH}${authorImg}`;

  return (
    <article>
      <div>
        <LazyImage src={src} alt={`${firstName} ${lastName}`} />
        <h1>
          {firstName} {lastName}
        </h1>
      </div>
      <div>
        <PostImage src={imageSrc} alt={`Post ${id}`} />
        <p>{body}</p>
      </div>
      <div>
        <span>{createdAt}</span>
      </div>
    </article>
  );
};

export default PostCard;
