import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({
  friends: { isOnline, name, avatar },
}) {
  const containerClsx = clsx(isOnline ? css.isOnline : css.isRetired);

  return (
    <div className={css.container}>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={containerClsx}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
