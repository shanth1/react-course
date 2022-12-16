import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.post}>
      <img
        className={s.bg}
        src="https://i.pinimg.com/originals/c8/4e/03/c84e037616e6b7beea1abeebc0d39f0d.jpg"
        alt=""
      />
      <div className={s.header}>
        <div className={s.avatar}></div>
        <div className={s.author}>Ден4ик</div>
      </div>
      <div className={s.content}>
        <div className={s.title}>Заголовок</div>
        <img
          className={s.img}
          src="https://i.pinimg.com/564x/48/27/a8/4827a829c4ab66c7088dfde66f64a1b3.jpg"
          alt=""
        />
      </div>
      <div className={s.reactions}>
        <div className={s.btn}>
          <div className={s.emoji}>🥰</div>
        </div>
        <div className={s.btn}>
          <div className={s.emoji}>🥺</div>
        </div>
        <div className={s.btn}>
          <div className={s.emoji}>🥶</div>
        </div>
        <div className={s.btn}>
          <div className={s.emoji}>😒</div>
        </div>
        <div className={s.btn}>
          <div className={s.emoji}>🤤</div>
        </div>
      </div>
      <div className={s.favorite}>
        <div className={s.upright_text}>Закладки</div>
      </div>
      <div className={s.info}>
        <div className={s.upright_text}>Подробнее</div>
      </div>
    </div>
  );
};

export default Post;
