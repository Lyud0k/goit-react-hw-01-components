import PropTypes from 'prop-types';
import css from '../Profile/Profile.module.css';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className={css.bixy}>
      <div className={css.description}>
        <img className={css.img} src={avatar} width="300" />
        <p className={css.name}>{username}</p>
        <p className={css.name}>@{tag}</p>
        <p className={css.name}>{location}</p>
      </div>
      {/* <ShortBiography
        username={user.username}
        location={user.location}
        tag={user.tag}
        avatar={user.avatar}
      /> */}

      <ul className={css.stats}>
        <li className={css.list}>
          <span className={css.text}>
            Followers
            <br />
            {stats.followers}
          </span>
          {/* <span className={css.num}>{user.stats.followers}</span> */}
        </li>
        <li className={css.list}>
          <span className={css.text}>
            Views
            <br />
            {stats.views}
          </span>
          {/* <span >{views}</span> */}
        </li>
        <li className={css.list}>
          <span className={css.text}>
            Likes
            <br />
            {stats.likes}
          </span>
          {/* <span >{likes}</span> */}
        </li>
      </ul>

      {/* <Grade
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      /> */}
    </div>
  );
};

Profile.protoType = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
