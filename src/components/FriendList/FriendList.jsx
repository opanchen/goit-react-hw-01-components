import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
        
        {
        friends.map(({avatar, name, isOnline, id}) => {        
            const userStatus = isOnline ? 
            `${css.online} ${css.status}`
            : `${css.offline} ${css.status}`;
     
            return (
                <li className={css.item} key={id}>
                    <span className={userStatus}></span>
                    <img src={avatar} alt="User avatar" className={css.avatar} width={48}/>
                    <p className={css.name}>{name}</p>
                </li>
            )
        })
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
    }).isRequired).isRequired
}