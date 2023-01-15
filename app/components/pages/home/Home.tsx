import React, {FC, useState} from 'react';
import Layout from "../../layout/Layout";
import {IHome} from "./home.interface";
import ButtonGrey from "../../ui/button/ButtonGrey";
import Link from "next/link";
import ButtonGreen from "../../ui/button/ButtonGreen";
import SearchInput from "../../ui/search-input/SearchInput";
import {text} from "stream/consumers";
import {postApi} from "../../../store/api/post.api";
import PostItem from "../../ui/post-item/PostItem";
import Search from "../../search/Search";

interface HomeData {
    props: IHome;
}

const Home: FC<HomeData> = (props: HomeData) => {

    // const { data: searchedPosts } = postApi.

    const [search, setSearch] = useState<string>('');

    const { data: latestPosts } = postApi.useGetLatestQuery(null);
    console.log(latestPosts);
    return <>
        <Layout title={'Real Estate'}>
            <div className='bg-center bg-home-bg h-[870px]'>
                <div className='absolute right-96 translate-x-20'>
                    <div className="mt-20 flex gap-2">
                        {props.props.nav.map((navItem) => {
                            return (
                                <Link key={navItem.title} href={navItem.link} className='text-base'>
                                <ButtonGrey key={navItem.title} onClick={() => {}}>{navItem.title}</ButtonGrey>
                                </Link>
                            )
                        })}
                        <ButtonGrey onClick={() => {}}>
                            <Link href={'/'} className='text-base'>Контакты</Link>
                        </ButtonGrey>
                    </div>
                </div>
                <div className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <div className='my-10 text-4xl font-bold'>
                        НАЙДИ СВОЕ МЕСТО ДЛЯ КОМФОРТНОЙ ЖИЗНИ
                    </div>
                    <div className='text-center text-2xl my-10'>
                        среди множества объявлений
                    </div>
                    <div className='text-center'>
                        <Link href={'/posts'} className=''>
                            <ButtonGreen onClick={() => {}}><div className={'text-xl'}>Узнать больше</div></ButtonGreen>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-full mb-20'>
                <div className='mr-auto ml-auto rounded-lg shadow-lg w-[1000px] -mt-10 bg-primary-700'>
                    <div className="flex gap-10 p-5 justify-center justify-items-center">
                        <Search/>
                    </div>
                </div>
                <div className='mt-20'>
                    <div className='my-10 text-3xl text-center'>ПОСЛЕДНИЕ ОБЪЯВЛЕНИЯ</div>
                    <div className='text-center text-lg my-10'>Возможно, Вы искали именно их?</div>
                </div>
                <div className={'ml-60'}>
                    {!!latestPosts && latestPosts.posts.map((post) => {
                        return <PostItem key={post.postUUID} post={post} />
                    })}
                </div>
            </div>

        </Layout>
    </>
};

export default Home;