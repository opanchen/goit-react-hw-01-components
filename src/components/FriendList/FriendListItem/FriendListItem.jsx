import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({avatar, name, isOnline, id}) => {
    const userStatus = isOnline
    ?`${css.online} ${css.status}`
    : `${css.offline} ${css.status}`;
     
    return (
        <li key={id} className={css.item}>
            <span className={userStatus}></span>
            <img src={avatar} alt="User avatar" className={css.avatar} width={48}/>
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}