import React from 'react';
import Posts from "../app/components/pages/posts/Posts";
import {postsData} from "../app/components/pages/posts/posts.data";

const PostsPage = () => {
    return <Posts props={postsData}/>
};

export default PostsPage;