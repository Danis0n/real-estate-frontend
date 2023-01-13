import React, {FC} from 'react';
import {IPost} from "../../../types/post/post.interface";

interface PostInfoProp {
    post: IPost;
}

const PostDescriptionInfo: FC<PostInfoProp> = (props: PostInfoProp) => {

    return (
        <div className={''}>
            <div className='flex gap-20 mb-10'>
                <div>
                    <div className='font-bold text-2xl'>{props.post.info.dimensions} м²</div>
                    <div className='text-gray-500 text-lg'>Общая</div>
                </div>
                <div>
                    <div className='font-bold text-2xl'>{props.post.info.livingDimensions} м²</div>
                    <div className='text-gray-500 text-lg'>Жилая</div>
                </div>
                <div>
                    <div className='font-bold text-2xl'>{props.post.info.kitchenDimensions} м²</div>
                    <div className='text-gray-500 text-lg'>Кухня</div>
                </div>
                <div>
                    <div className='font-bold text-2xl'>{props.post.info.currentFloor} из {props.post.info.maxFloor}</div>
                    <div className='text-gray-500 text-lg'>Этаж</div>
                </div>
                <div>
                    <div className='font-bold text-2xl'>
                        {props.post.info.isRenovation ? <div>С отделкой</div> : <div>Без отделки</div>}
                    </div>
                    <div className='text-gray-500 text-lg'>Отделка</div>
                </div>
                <div>
                    <div className='font-bold text-2xl'>
                        {props.post.info.isBalcony ? <div>Есть</div> : <div>Нет</div>}
                    </div>
                    <div className='text-gray-500 text-lg'>Балкон</div>
                </div>
                <div>
                    <div className='font-bold text-2xl'>
                        {props.post.info.isParking ?
                            <div>Есть</div>
                            :
                            <div>Нет</div>
                        }
                    </div>
                    <div className='text-gray-500 text-lg'>Парковка</div>
                </div>
            </div>
            <div className={''}>
                <div className={'text-2xl font-bold'}>Описание</div>
                <div className={'text-xl mb-10'}>
                    {props.post.info.description}
                </div>
            </div>
        </div>
    );
};

export default PostDescriptionInfo;