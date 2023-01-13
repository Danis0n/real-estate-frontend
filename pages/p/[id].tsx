import React from 'react';
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {PostService} from "../../app/services/post.service";
import {IPostPage} from "../../app/components/pages/post/post.interface";
import Post from "../../app/components/pages/post/Post";
import {IPost} from "../../app/types/post/post.interface";

const PostPage: NextPage<IPostPage> = (props) => {
    return <Post post={props.post}/>
};

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const { data: data } = await PostService.getAll();

        const paths = data.posts.map(post => ({
            params: {
                id: post.postUUID
            }
        }))

        return {
            paths,
            fallback: 'blocking',
        }
    } catch (e) {
        return {
            paths: [],
            fallback: false,
        }
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

    try {
        const { data: post } = await PostService.getPostById(String(params?.id));

        if (post == null) {
            return {
                props: {
                    post: {} as IPost,
                } as IPostPage
            }
        }

        return {
            props: {
                post: post.post,
            } as IPostPage
        }

    } catch (e) {
        return {
            props: {
                post: {} as IPost,
            } as IPostPage
        }
    }
}

export default PostPage;