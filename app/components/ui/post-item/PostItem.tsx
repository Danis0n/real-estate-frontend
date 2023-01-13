import React, {FC} from 'react';
import {IPost} from "../../../types/post/post.interface";
import Link from "next/link";
import Image from "next/image";
import ButtonGreen from "../button/ButtonGreen";
import Heart from '../../../../public/heart.svg';
import SliderMini from "../slider/slider-mini/SliderMini";

interface PostItemProps {
    post: IPost;
}

const PostItem: FC<PostItemProps> = ({post}) => {

    return (
        <div className={'relative hover:shadow-2xl max-w-[1400px] rounded-xl mb-10'}>
            <div className={''}>
                <SliderMini images={post.images}/>
            </div>
            <div>
                <div className={'absolute left-1/3 m-14 top-0 text-2xl'}>
                    <div className={'flex gap-60'}>
                        <div className={''}>
                            <Link href={`/p/${post.postUUID}`} className={'hover:underline'}>
                                 {post.info.roomQuantity}-комн. {post.type}, {post.info.dimensions} м²
                            </Link>
                            <div className={'mt-2'}>
                                {post.info.price} ₽ {post.deal === 'Аренда' ? <>/месяц</> : <></>}
                            </div>
                            {post.deal === 'Купить' ?
                                <div className='text-gray-500 mt-2'>
                                    {(post.info.price / Number(post.info.dimensions)).toFixed(0)} ₽/м²
                                </div> : <></>
                            }
                            <div className={'text-sm mt-8 text-justify overflow-hidden overflow-ellipsis'}>
                                {post.info.description}
                            </div>
                        </div>
                    </div>

                </div>

                <div>

                </div>
            </div>
        </div>
    );
};

export default PostItem;