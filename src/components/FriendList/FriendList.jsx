import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <li>
          <FriendListItem friends={friend} />
        </li>
      ))}
    </ul>
  );
}
