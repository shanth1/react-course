import React from "react";
import { ContentPost } from "./Content/ContentPost";
import { Button } from "./Button/Button";
import { Header } from "./Header/Header";
import s from "./Post.module.css";
import { Favorite } from "./Extension/Favorite";
import { Info } from "./Extension/Info";

const Post = (props) => {
    return (
        <div className={s.post}>
            <img className={s.bg} src={props.bg} alt="" />
            <Header avatar={props.avatar} author={props.author} />
            <ContentPost title={props.title} img={props.img} />
            <div className={s.reactions}>
                <Button reaction="🥰" />
                <Button reaction="🥺" />
                <Button reaction="🥶" />
                <Button reaction="😒" />
                <Button reaction="🤤" />
            </div>
            <Favorite />
            <Info />
        </div>
    );
};

export default Post;
