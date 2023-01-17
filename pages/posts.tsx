import React from 'react';
import Posts, {IPostsPage} from "../app/components/pages/posts/Posts";
import {GetStaticProps, NextPage} from "next";
import {PostService} from "../app/services/post.service";
import {postsData} from "../app/components/pages/posts/posts.data";

const PostsPage: NextPage<IPostsPage> = (props) => {
    return <Posts props={props.props} posts={props.posts}/>
};

export const getStaticProps: GetStaticProps = async () => {
    try {
        const { data: data } = await PostService.getAll();

        return {
            props: {
                posts: data.posts,
                props: postsData
            } as IPostsPage
        }

    } catch (e) {
        return {
            props: {
                posts: [],
                props: postsData
            } as IPostsPage
        }
    }
}

export default PostsPage;