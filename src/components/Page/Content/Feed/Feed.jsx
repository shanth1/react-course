import React from "react";
import s from "./Feed.module.css";
import Post from "./Post/Post";

const Feed = () => {
    return (
        <div className={s.feed}>
            <Post
                bg="https://i.pinimg.com/originals/c8/4e/03/c84e037616e6b7beea1abeebc0d39f0d.jpg"
                img="https://i.pinimg.com/564x/48/27/a8/4827a829c4ab66c7088dfde66f64a1b3.jpg"
                avatar="https://cdn-icons-png.flaticon.com/512/4783/4783872.png"
                author="Денис"
                title="Women"
            />
            <Post
                bg="https://sun4.userapi.com/sun4-12/s/v1/ig2/-Eh8biMKnKEd2-hSHy64Kwcilyq2n8LqcvhO9nZ1YrL3EV59U_OL7yuBLaPSj9gqMO9OSO-dRhcAO996pv1bd8db.jpg?size=1440x1800&quality=96&type=album"
                img="https://sun4.userapi.com/sun4-15/s/v1/ig2/EqC41HE6XMKJNzRxKJwUy8mNISC_mlnFUqAhyJmgHxEMJ44_DzO7oAnJ-Wp0WMqFQflvoq3yHqw0BM6ZqYI0q6Nt.jpg?size=1066x1600&quality=96&type=album"
                avatar="https://cdn-icons-png.flaticon.com/512/4783/4783872.png"
                author="Денис"
                title="Women"
            />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default Feed;
