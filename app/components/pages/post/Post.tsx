import React, {FC} from 'react';
import {IPostPage} from "./post.interface";
import Layout from "../../layout/Layout";
import Slider from '../../ui/slider/Slider'
import {userApi} from "../../../store/api/user.api";
import PostLittleInfo from "../../ui/post-little-info/PostLittleInfo";
import {useAuth} from "../../../hooks/useAuth";
import PostDescriptionInfo from "../../ui/post-description-info/PostDescriptionInfo";

// TODO : FIX PROPS FOR POST-LITTLE-INFO (NAME INCLUDES)
const Post: FC<IPostPage> = ({post}) => {
    const { user } = useAuth();

    const { data: postUser } = userApi.useGetUserQuery(post.userUUID, {
         skip: !post,
    });

    const isOwner = !!user && !!postUser && postUser.user.id === user.id;
    const isCompany = !!postUser && postUser.user.roles.includes('company');

    return (
        <Layout title={`${post?.name}`}>
            <div className='ml-20 mt-5 relative'>
                <Slider width={1200} height={780} images={post.images}/>

                <div className='shadow-lg max-w-[1200px] h-[500px] pt-5 pl-10'>
                    <PostDescriptionInfo post={post}/>
                </div>
                <div className='absolute right-32 top-40 -mt-24 shadow-lg rounded-md'>
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
                            pricePerM={ (post.info.price / post.info.dimensions).toFixed(0) }
                            userUUID={post.userUUID}
                            postUUID={post.postUUID}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Post;