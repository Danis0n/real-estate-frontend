import React from 'react';
import {NextPageAuth} from "../../../app/provider/private-route.interface";
import {GetStaticPaths, GetStaticProps} from "next";
import {PostService} from "../../../app/services/post.service";
import {IPost} from "../../../app/types/post/post.interface";
import {IPostPage} from "../../../app/components/pages/post/post.interface";
import UpdatePost from "../../../app/components/pages/post/update/UpdatePost";

const UpdatePage: NextPageAuth<IPostPage> = ({post}) => {
    return <UpdatePost post={post}/>;
};

UpdatePage.allowRoles = [ 'admin', 'user', 'company'];

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


export default UpdatePage;