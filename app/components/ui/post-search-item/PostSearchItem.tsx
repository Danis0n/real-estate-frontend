import React, {FC} from 'react';
import {IPost} from "../../../types/post/post.interface";
import Link from "next/link";

interface PostSearchItemProps {
    post: IPost;
}

const PostSearchItem: FC<PostSearchItemProps> = ({post}) => {
    return (
        <div className={'bg-white rounded-md p-5'}>
            <Link href={`/p/${post.postUUID}`}>
                <div>
                    Название: {post.name}
                </div>
                <div className={'flex gap-5'}>
                    <div>
                        {post.info.roomQuantity}-комн. {post.type}, {post.info.dimensions} м²
                    </div>
                    {post.deal === 'Купить' ?
                        <div className='text-gray-500'>
                            {post.info.price} ₽
                        </div> : <></>
                    }
                </div>
            </Link>
        </div>
    );
};

export default PostSearchItem;