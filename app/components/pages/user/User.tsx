import React, { FC, useState } from 'react';
import Layout from "../../layout/Layout";
import { IUser } from "../../../types/user/user.interface";
import {IPost} from "../../../types/post/post.interface";
import PostItem from "../../ui/post-item/PostItem";
import ButtonGreen from "../../ui/button/ButtonGreen";
import {useAuth} from "../../../hooks/useAuth";

export interface IUserPage {
    user: IUser;
    posts: IPost[];
}

const User: FC<IUserPage> = ({user, posts}) => {

    const { user: me } = useAuth();
    const [showPhone, setShowPhone] = useState<boolean>(false);

    return <Layout title={`Пользователь ${user.userInfo.firstName}`}>
        <div className={'w-[1400px] mr-auto ml-auto'}>
            <div className={'shadow-xl mt-[100px] mb-2 p-10 bg-white flex gap-[300px]'}>
                <div className={'flex gap-5'}>
                    <div>
                        <img src={`data:image/jpeg;base64,${user.imageUrl}`} alt={'logo'} height={150} width={150}/>
                    </div>
                    <div className={'text-4xl mt-2'}>
                        <div>
                            Застройщик
                        </div>
                        <div>
                            {user.userInfo.firstName} {user.userInfo.lastName}
                        </div>
                        <div className={'flex mt-5'}>
                            {showPhone ?
                                <div className={'text-xl mt-4 ml-3 mr-3'}>{user.phone}</div> :
                                <div>
                                    <ButtonGreen onClick={() => {setShowPhone(true)}}>Показать телефон</ButtonGreen>
                                </div>
                            }
                            {me?.id === user.id ? 
                                <div><ButtonGreen onClick={() => {}}>Редактировать</ButtonGreen></div>:
                                <div>
                                    <ButtonGreen onClick={() => {}}>Откликнуться</ButtonGreen>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className={'text-2xl mt-4'}>
                    <div className={'mb-4'}>Официальный сайт: {user.userUr.link}</div>
                    <div>Адрес: {user.userUr.address ? user.userUr.address : (
                        <div className={'text-xl'}>Пользователь еще не разместил о себе информацию</div>
                    )}</div>
                </div>
            </div>
            <div  className={'shadow-xl mb-2 p-10 bg-white '}>
                <div className={'text-3xl font-bold mb-10'}>
                    О застройщике
                </div>
                <div>
                    {user.userUr.description ? (
                        <div>user.userUr.description</div>
                    ) : (
                        <div>Пользователь еще не разместил о себе информацию</div>
                    )}
                </div>
            </div>
            <div  className={'shadow-xl mb-2 p-10 bg-white '}>
                <div className={'text-3xl font-bold mb-10'}>
                    Объекты застройщика
                </div>
                <div>
                    {!!posts && posts.map((post) => {
                        return <PostItem key={post.postUUID} post={post} />
                    })}
                    {posts.length == 0 && (
                        <div>Пользователь еще не разместил объявления</div>
                    )}
                </div>
            </div>
        </div>
    </Layout>
};

export default User;