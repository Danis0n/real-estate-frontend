import React from 'react';
import User, {IUserPage} from "../../app/components/pages/user/User";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {UserService} from "../../app/services/user.service";
import {IUser} from "../../app/types/user/user.interface";
import {PostService} from "../../app/services/post.service";

const UserPage: NextPage<IUserPage> = ({user, posts}) => {
    return <User user={user} posts={posts}/>
};

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const { data: data } = await UserService.getAll();

        const paths = data.users.map(user => ({
            params: {
                id: user.id
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
        const { data: user } = await UserService.getUserById(String(params?.id));

        if (user == null) {
            return {
                props: {
                    user: {} as IUser,
                    posts: [],
                } as IUserPage
            }
        }

        const { data: posts } = await PostService.getPostsByUserId(user.user.id);

        return {
            props: {
                user: user.user,
                posts: posts.posts ? posts.posts : [],
            } as IUserPage
        }

    } catch (e) {
        return {
            props: {
                user: {} as IUser,
                posts: [],
            } as IUserPage
        }
    }
}

export default UserPage;