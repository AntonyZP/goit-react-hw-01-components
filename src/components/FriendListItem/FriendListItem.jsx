import PropTypes from "prop-types";
import css from '../FriendListItem/FriendListItem.module.css';




export default function FriendListItem({ avatar, name, isOnline }) {
    return (
      <li className={css.item}>
        {isOnline ? (
          <span className={css.Online}></span>
        ) : (
          <span className={css.Offline}></span>
        )}
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  }

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
    isOnline:  PropTypes.bool.isRequired
}