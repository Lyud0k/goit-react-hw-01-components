import PropTypes from 'prop-types';
import css from 'components/Friend/Friend.module.css';
// import { Col, Text, List} from 'components/Friend/Friend.styled';

export const Friend = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.item} key={id}>
      <span
        className={css.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      >
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.text}>{name}</p>
    </li>
  );
};

Friend.protoType = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.string,
};
