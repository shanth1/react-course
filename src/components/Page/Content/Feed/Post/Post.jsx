import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.post}>
      <div className={s.bg}>
        <img
          className={s.bg_img}
          src="https://i.pinimg.com/originals/c8/4e/03/c84e037616e6b7beea1abeebc0d39f0d.jpg"
          alt=""
        />
      </div>
      <div className={s.author}></div>
      <div className={s.title}></div>
      <div className={s.post_img}></div>
      <div className={s.reactions}></div>
    </div>
  );
};

export default Post;
