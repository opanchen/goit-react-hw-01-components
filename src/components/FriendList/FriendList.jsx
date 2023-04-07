import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>

        {
        friends.map((friend) => 
        <FriendListItem
        id = {friend.id}
        avatar= {friend.avatar}
        name= {friend.name}
        isOnline = {friend.isOnline}
        key = {friend.id}
        />
        )
      }

      </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })).isRequired
}