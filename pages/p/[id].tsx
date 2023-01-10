import React from 'react';
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {PostService} from "../../app/services/post.service";
import {IPostPage} from "../../app/components/pages/post/post.interface";
import Post from "../../app/components/pages/post/Post";
import {IPost} from "../../app/types/post/post.interface";
import {ImageService} from "../../app/services/image.service";

const PostPage: NextPage<IPostPage> = (props) => {
    return <Post post={props.post} images={props.images}/>
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
        const currentPost: IPost = post.post;

        let images: string[] = [];
        if (!!currentPost) {
            const UUIDs: string[] = [];

            currentPost.images.map(image => {
                UUIDs.push(image.imageUuid);
            })

            const { data: data } = await ImageService.getRow(UUIDs);
            images = data.images;
        }

        return {
            props: {
                post: currentPost,
                images: images,
            } as IPostPage
        }

    } catch (e) {
        return {
            props: {
                post: {} as IPost,
                images: {} as string[],
            } as IPostPage
        }
    }
}

export default PostPage;