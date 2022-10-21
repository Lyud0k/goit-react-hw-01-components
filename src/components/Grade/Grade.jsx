import PropTypes from 'prop-types';
import css from 'components/Grade/Grade.module.css';
// import { Grade } from './Grade';

export const Grade = ({ followers, views, likes }) => {
  return (
    <ul className={css.stats}>
      <li className={css.list}>
        <span className={css.text}>
          Followers
          <br />
          {followers}
        </span>
        {/* <span className={css.num}>{followers}</span> */}
      </li>
      <li className={css.list}>
        <span className={css.text}>
          Views
          <br />
          {views}
        </span>
        {/* <span >{views}</span> */}
      </li>
      <li className={css.list}>
        <span className={css.text}>
          Likes
          <br />
          {likes}
        </span>
        {/* <span >{likes}</span> */}
      </li>
    </ul>
  );
};

// Grade.propTypes = {
//     followers: PropTypes.number,
//     views: PropTypes.number,
//     likes: PropTypes.number,
// }
