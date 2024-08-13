import css from "./Profile.module.css";

export default function Profile({ userName, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <img src={image} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{userName}</p> <p className={css.info}>@{tag}</p>
      <p className={css.info}>{location}</p>
      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.stats}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span> <span className={css.stats}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span> <span className={css.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
