import React, {FC} from 'react';
import {IPostPage} from "./post.interface";
import Layout from "../../layout/Layout";
import Slider from '../../ui/slider/Slider'
import {userApi} from "../../../store/api/user.api";
import PostLittleInfo from "../../ui/post-little-info/PostLittleInfo";
import {useAuth} from "../../../hooks/useAuth";

const Post: FC<IPostPage> = ({post, images}) => {

    const { user } = useAuth();

    const { data: postUser } = userApi.useGetUserQuery(post.userUUID, {
         skip: !post,
    });

    const isOwner = !!user && !!postUser && postUser.user.id === user.id;
    const isCompany = !!postUser && postUser.user.roles.includes('company');

    return (
        <Layout title={`${post?.name}`}>
            <div>
                <div className='ml-20 mt-5'>
                    <Slider images={images}/>
                    <div className='fixed right-40 top-1/4 -mt-24 shadow-lg rounded-md'>
                        <div className=''>
                            <PostLittleInfo
                                userImage={ isCompany ? postUser.user.imageUrl : '' }
                                isOwner={isOwner}
                                isCompany={isCompany}
                                city={post.city}
                                location={post.location}
                                dimensions={post.info.dimensions}
                                type={post.type}
                                roomQuantity={post.info.roomQuantity}
                                price={String(post.info.price)}
                                pricePerM={ String(post.info.price / Number(post.info.dimensions)) }
                                userUUID={post.userUUID}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Post;