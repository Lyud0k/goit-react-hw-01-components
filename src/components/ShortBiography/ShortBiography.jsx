import PropTypes from 'prop-types';
import css from 'components/ShortBiography/ShortBiography.module.css';
export const ShortBiography = ({ username, location, tag, avatar }) => {
  return (
    <div className={css.description}>
      <img className={css.img} src={avatar} width="300" />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
  );
};

// ShortBiography.propTypes = {
//     username: PropTypes.string,
//     location: PropTypes.string,
//     tag: PropTypes.string,
//     avatar: PropTypes.symbol,
// }
