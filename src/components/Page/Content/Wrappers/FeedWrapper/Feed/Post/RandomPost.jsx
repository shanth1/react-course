import React from "react";
import { ContentPost } from "./Content/ContentPost";
import { Button } from "./Button/Button";
import { Header } from "./Header/Header";
import s from "./Post.module.css";
import { Favorite } from "./Extension/Favorite";
import { Info } from "./Extension/Info";

const bg_list = [
    require("./posts_data/bg/bg1.jpeg"),
    require("./posts_data/bg/bow.jpg"),
    require("./posts_data/bg/bw1.jpg"),
    require("./posts_data/bg/bw2.jpg"),
    require("./posts_data/bg/bw5.jpg"),
    require("./posts_data/bg/city1.jpg"),
    require("./posts_data/bg/city2.jpg"),
    require("./posts_data/bg/columns.jpg"),
    require("./posts_data/bg/couple.jpg"),
    require("./posts_data/bg/fire.jpg"),
    require("./posts_data/bg/fish.jpg"),
    require("./posts_data/bg/flower_bg.jpg"),
    require("./posts_data/bg/flower_yellow.jpg"),
    require("./posts_data/bg/future2.jpg"),
    require("./posts_data/bg/green.jpg"),
    require("./posts_data/bg/photos.jpg"),
    require("./posts_data/bg/photos2.jpg"),
    require("./posts_data/bg/picture1.jpg"),
    require("./posts_data/bg/pomegranate.jpg"),
    require("./posts_data/bg/shark.jpg"),
    require("./posts_data/bg/snow1.jpg"),
    require("./posts_data/bg/sunset.jpg"),
    require("./posts_data/bg/trains.jpg"),
    require("./posts_data/bg/tree.jpg"),
    require("./posts_data/bg/trip_bg.jpg"),
    require("./posts_data/bg/trip1.jpg"),
    require("./posts_data/bg/underground.jpg"),
    require("./posts_data/bg/updown.jpg"),
    require("./posts_data/bg/w_w.jpg"),
    require("./posts_data/bg/w1.jpg"),
    require("./posts_data/bg/wass.jpg"),
    require("./posts_data/bg/water_pool.jpg"),
    require("./posts_data/bg/wool.jpg"),
];

const posts_list = [
    require("./posts_data/posts/asian1.jpg"),
    require("./posts_data/posts/asian2.jpg"),
    require("./posts_data/posts/asian3.jpg"),
    require("./posts_data/posts/ball.jpg"),
    require("./posts_data/posts/bw3.jpg"),
    require("./posts_data/posts/bw5.jpg"),
    require("./posts_data/posts/cactus.jpg"),
    require("./posts_data/posts/couple2.jpg"),
    require("./posts_data/posts/elastic.jpg"),
    require("./posts_data/posts/element.jpg"),
    require("./posts_data/posts/flower2.jpg"),
    require("./posts_data/posts/furure1.jpg"),
    require("./posts_data/posts/future3.jpg"),
    require("./posts_data/posts/grandma.jpg"),
    require("./posts_data/posts/lips.jpg"),
    require("./posts_data/posts/man_flower.jpeg"),
    require("./posts_data/posts/man1.jpg"),
    require("./posts_data/posts/man2.jpg"),
    require("./posts_data/posts/man3.jpg"),
    require("./posts_data/posts/man4.jpg"),
    require("./posts_data/posts/mosaic.jpg"),
    require("./posts_data/posts/moto.jpg"),
    require("./posts_data/posts/pants.jpg"),
    require("./posts_data/posts/picture1.jpg"),
    require("./posts_data/posts/post1.jpeg"),
    require("./posts_data/posts/scratch.jpg"),
    require("./posts_data/posts/sp_w1.jpg"),
    require("./posts_data/posts/sp_w2.jpg"),
    require("./posts_data/posts/sxwomen.jpg"),
    require("./posts_data/posts/trip1.jpg"),
    require("./posts_data/posts/tyler.jpg"),
    require("./posts_data/posts/violet_man.jpg"),
    require("./posts_data/posts/w3.jpg"),
    require("./posts_data/posts/w4.jpg"),
    require("./posts_data/posts/winter.jpg"),
];

const avatar_list = [
    require("./posts_data/avatars/avatar-4725884.png"),
    require("./posts_data/avatars/avatars-4725821.png"),
    require("./posts_data/avatars/avatars-4725899.png"),
    require("./posts_data/avatars/avatars-4725937.png"),
    require("./posts_data/avatars/boy-4725926.png"),
    require("./posts_data/avatars/girl-4725827.png"),
    require("./posts_data/avatars/girl-4725856.png"),
    require("./posts_data/avatars/male-cartoon-4725904.png"),
];

function getRandomArrayElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const RandomPost = (props) => {
    return (
        <div className={s.post}>
            <img className={s.bg} src={getRandomArrayElement(bg_list)} alt="" />
            <Header
                avatar={getRandomArrayElement(avatar_list)}
                author="Random Generated"
            />
            <ContentPost
                title="Reload the page to update"
                img={getRandomArrayElement(posts_list)}
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
