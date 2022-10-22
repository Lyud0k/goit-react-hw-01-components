import PropTypes, { string } from 'prop-types';
import { Friend } from 'components/Friend/Friend';
import css from 'components/FriendList/FriendList.module.css';
// import { Box } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Friend avatar={avatar} name={name} isOnline={isOnline} id={id} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: string,
      name: string,
      isOnline: string,
    })
  ),
};
