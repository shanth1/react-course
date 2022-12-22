import React from "react";
import s from "./Feed.module.css";
import Post from "./Post/Post";
import RandomPost from "./Post/RandomPost";

const Feed = () => {
    return (
        <div className={s.feed}>
            <RandomPost />

            <Post
                bg={require("./Post/posts_data/bg/fish.jpg")}
                img={require("./Post/posts_data/posts/man3.jpg")}
                avatar={require("./Post/posts_data/avatars/avatars-4725937.png")}
                author="Phessyn"
                title="Salmon"
            />
            <Post
                bg={require("./Post/posts_data/bg/future2.jpg")}
                img={require("./Post/posts_data/posts/furure1.jpg")}
                avatar={require("./Post/posts_data/avatars/male-cartoon-4725904.png")}
                author="Maja"
                title="Future"
            />
            <Post
                bg={require("./Post/posts_data/bg/crash.jpg")}
                img={require("./Post/posts_data/posts/moto.jpg")}
                avatar={require("./Post/posts_data/avatars/avatars-4725899.png")}
                author="Yadefl"
                title=""
            />
            <Post
                bg={require("./Post/posts_data/bg/photos.jpg")}
                img={require("./Post/posts_data/posts/mosaic.jpg")}
                avatar={require("./Post/posts_data/avatars/boy-4725926.png")}
                author="Siak"
                title="Mosaic"
            />
            <Post
                bg={require("./Post/posts_data/bg/bw5.jpg")}
                img={require("./Post/posts_data/bg/bw5.jpg")}
                avatar={require("./Post/posts_data/avatars/girl-4725856.png")}
                author="Ganiarior"
                title="-------"
            />
            <Post
                bg={require("./Post/posts_data/bg/flower_yellow.jpg")}
                img={require("./Post/posts_data/posts/man4.jpg")}
                avatar={require("./Post/posts_data/avatars/male-cartoon-4725904.png")}
                author="Omeleter"
                title="Flower"
            />
            <Post
                bg={require("./Post/posts_data/bg/couple.jpg")}
                img={require("./Post/posts_data/posts/pants.jpg")}
                avatar={require("./Post/posts_data/avatars/avatars-4725821.png")}
                author="Zetismea"
                title="Capybara"
            />
            <Post
                bg={require("./Post/posts_data/bg/green.jpg")}
                img={require("./Post/posts_data/posts/violet_man.jpg")}
                avatar={require("./Post/posts_data/avatars/avatars-4725821.png")}
                author="Ckaiahen"
                title="Green"
            />
            <Post
                bg={require("./Post/posts_data/bg/flower_bg.jpg")}
                img={require("./Post/posts_data/posts/w4.jpg")}
                avatar={require("./Post/posts_data/avatars/avatars-4725821.png")}
                author="Onenas"
                title="Fern"
            />
            <Post
                bg={require("./Post/posts_data/bg/updown.jpg")}
                img={require("./Post/posts_data/posts/grandma.jpg")}
                avatar={require("./Post/posts_data/avatars/avatar-4725884.png")}
                author="Kele"
                title=""
            />
        </div>
    );
};

export default Feed;
