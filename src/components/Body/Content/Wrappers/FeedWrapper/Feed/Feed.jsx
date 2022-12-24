import React from "react";
import s from "./Feed.module.css";
import Post from "./Post/Post";
import RandomPost from "./Post/RandomPost";

const Feed = () => {
    return (
        <div className={s.feed}>
            <RandomPost />

            <Post
                bg={require("../../../../../../assets/bg/fish.jpg")}
                img={require("../../../../../../assets/posts/man3.jpg")}
                avatar={require("../../../../../../assets/avatars/avatars-4725937.png")}
                author="Phessyn"
                title="Salmon"
            />
            <Post
                bg={require("../../../../../../assets/bg/future2.jpg")}
                img={require("../../../../../../assets/posts/furure1.jpg")}
                avatar={require("../../../../../../assets/avatars/male-cartoon-4725904.png")}
                author="Maja"
                title="Future"
            />
            <Post
                bg={require("../../../../../../assets/bg/crash.jpg")}
                img={require("../../../../../../assets/posts/moto.jpg")}
                avatar={require("../../../../../../assets/avatars/avatars-4725899.png")}
                author="Yadefl"
                title=""
            />
            <Post
                bg={require("../../../../../../assets/bg/photos.jpg")}
                img={require("../../../../../../assets/posts/mosaic.jpg")}
                avatar={require("../../../../../../assets/avatars/boy-4725926.png")}
                author="Siak"
                title="Mosaic"
            />
            <Post
                bg={require("../../../../../../assets/bg/bw5.jpg")}
                img={require("../../../../../../assets/bg/bw5.jpg")}
                avatar={require("../../../../../../assets/avatars/girl-4725856.png")}
                author="Ganiarior"
                title="-------"
            />
            <Post
                bg={require("../../../../../../assets/bg/flower_yellow.jpg")}
                img={require("../../../../../../assets/posts/man4.jpg")}
                avatar={require("../../../../../../assets/avatars/male-cartoon-4725904.png")}
                author="Omeleter"
                title="Flower"
            />
            <Post
                bg={require("../../../../../../assets/bg/couple.jpg")}
                img={require("../../../../../../assets/posts/pants.jpg")}
                avatar={require("../../../../../../assets/avatars/avatars-4725821.png")}
                author="Zetismea"
                title="Capybara"
            />
            <Post
                bg={require("../../../../../../assets/bg/green.jpg")}
                img={require("../../../../../../assets/posts/violet_man.jpg")}
                avatar={require("../../../../../../assets/avatars/avatars-4725821.png")}
                author="Ckaiahen"
                title="Green"
            />
            <Post
                bg={require("../../../../../../assets/bg/flower_bg.jpg")}
                img={require("../../../../../../assets/posts/w4.jpg")}
                avatar={require("../../../../../../assets/avatars/avatars-4725821.png")}
                author="Onenas"
                title="Fern"
            />
            <Post
                bg={require("../../../../../../assets/bg/updown.jpg")}
                img={require("../../../../../../assets/posts/grandma.jpg")}
                avatar={require("../../../../../../assets/avatars/avatar-4725884.png")}
                author="Kele"
                title=""
            />
        </div>
    );
};

export default Feed;
