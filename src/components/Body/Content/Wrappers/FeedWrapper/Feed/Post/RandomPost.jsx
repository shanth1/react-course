import React from "react";
import { ContentPost } from "./Content/ContentPost";
import { Button } from "./Button/Button";
import { Header } from "./Header/Header";
import s from "./Post.module.css";
import { Favorite } from "./Extension/Favorite";
import { Info } from "./Extension/Info";

import { data_posts } from "../../../../../../../assets/data_posts";
import { data_avatars } from "../../../../../../../assets/data_avatars";

function getRandomArrayElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const RandomPost = (props) => {
    return (
        <div className={s.post}>
            <img
                className={s.bg}
                src={getRandomArrayElement(data_posts[0])}
                alt=""
            />
            <Header
                avatar={getRandomArrayElement(data_avatars)}
                author="Random Generated"
            />
            <ContentPost
                title="Reload the page to update"
                img={getRandomArrayElement(data_posts[1])}
            />
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

export default RandomPost;
