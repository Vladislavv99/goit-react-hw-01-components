import styles from './FriendList.module.css'

const FriendList = ({ friends }) => {
    return <ul className={styles.friend_list}>
        {friends.map(friend => <li key={friend.id} className="item">
            <span className={friend.isOnline ? styles.status_on : styles.status_off}></span>
            <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
            <p className="name">{friend.name}</p>
            </li>)}
</ul>
}

export default FriendList;