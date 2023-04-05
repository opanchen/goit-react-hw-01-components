// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import css from 'components/Profile/Profile.module.css'

export const Profile = (props)  => {
// console.log(props);
const {username, tag, location, avatar, stats} = props
const {followers, views, likes} = stats
return (
<div className={css.profile}>
<div className={css.description}>
    <img src={avatar} alt="User avatar" className={css.avatar} width={240} />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
</div>

<ul className={css.stats}>
    <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{followers}</span>
    </li>
    <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
    </li>
    <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
    </li>
</ul>
</div>
);
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        quantity: PropTypes.number,
    })
}


