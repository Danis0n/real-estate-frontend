import React, {FC, useState} from 'react';
import { useAuth } from "../../../hooks/useAuth";
import { userApi } from "../../../store/api/user.api";
import ButtonGreen from "../button/ButtonGreen";
import Image from 'next/image';
import Heart from '../../../../public/heart.svg';
import UserSVG from '../../../../public/user.svg';
import {imageApi} from "../../../store/api/image.api";
import Link from "next/link";


interface ILittleInfo {
    userImage: string
    isOwner: boolean;
    isCompany: boolean;
    price: string;
    pricePerM: string;
    userUUID: string;
    roomQuantity: number;
    type: string;
    dimensions: number;
    city: string;
    location: string;
    postUUID: string;
}

const PostLittleInfo: FC<ILittleInfo> = (props: ILittleInfo) => {

    const [viewPhone, setViewPhone] = useState<boolean>(false);

    const { user } = useAuth();

    const { data: image } = imageApi.useGetImageQuery(props.userImage, {
        skip: !props.isCompany,
    });

    const { data: data } = userApi.useGetUserQuery(props.userUUID, {
        skip: props.isOwner,
    });

    return (
        <div className='shadow-2xl p-10'>
            <div className='flex gap-10 mb-8'>
                <div>
                    <div className='text-5xl'>
                        {props.price} ₽
                    </div>
                    <div className='text-gray-500 mt-2'>
                        {props.pricePerM} ₽/м²
                    </div>
                </div>
                <div className='mt-1.5'>
                    <ButtonGreen onClick={() => {}}>
                        <Image src={Heart} alt="add-to-favorite-btn" width={24} height={24}/>
                    </ButtonGreen>
                </div>
            </div>
            <div className='mb-10'>
                <div className='text-2xl font-bold mb-4'>
                    {props.roomQuantity}-комн. {props.type}, {props.dimensions} м²
                </div>
                <div className='text-xl'>
                    Адрес: {props.city}, {props.location}
                </div>
            </div>
            <div>
                <div className='mb-5'>
                    {viewPhone ?
                        <div className='text-3xl text-center'>
                            {props.isOwner ? user?.phone : data?.user.phone}
                        </div>
                        :
                        <ButtonGreen onClick={() => {setViewPhone(true)}}>
                            <div className='w-72 h-8 text-xl'>
                                Показать телефон
                            </div>
                        </ButtonGreen>
                    }
                </div>
                {!props.isOwner && <div>
                    <ButtonGreen onClick={() => {}}>
                        <div className='w-72 h-8 text-xl'>
                            Откликнуться
                        </div>
                    </ButtonGreen>
                </div>}
                {props.isOwner && <div>
                    <Link href={`/p/update/${props.postUUID}`}>
                        <ButtonGreen onClick={() => {}}>
                            <div className='w-72 h-8 text-xl'>Редактировать</div>
                        </ButtonGreen>
                    </Link>
                </div>}
                <hr className='mt-10'/>
                {props.isCompany ?
                    <div className='mt-5 flex gap-10 flex-row '>
                        <div className='mr-auto'>
                            <div className='font-bold'>Застройщик</div>
                                {props.isOwner ?
                                    <div>{user?.userInfo?.firstName} {user?.userInfo?.lastName}</div>
                                    :
                                    <div>{data?.user?.userInfo?.firstName} {data?.user?.userInfo?.lastName}</div>
                                }
                            <div className='hover:underline'>
                                <Link href={`/profile/${props.userUUID}`}>Подробнее о зайстройщике</Link>
                            </div>
                        </div>
                        <div className='ml-auto'>
                            <img src={`data:image/jpeg;base64,${image?.buffer}`} alt={'user'} width={75} height={75}/>
                        </div>
                    </div>
                    :
                    <div className='mt-5 flex gap-10 flex-row '>
                        <div className='mr-auto font-bold'>Собственник</div>
                        <div className='ml-auto'>
                            <Image src={UserSVG} alt={'user'} width={75} height={75}/>
                        </div>
                    </div>
                }
            </div>

        </div>
    );
};

export default PostLittleInfo;