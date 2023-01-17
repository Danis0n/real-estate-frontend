import React, { FC, useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import { postApi } from "../../../store/api/post.api";
import ButtonGreen from "../../ui/button/ButtonGreen";
import Select from "../../ui/select/Select";
import Modal from "../../ui/modal/Modal";
import Filter from "../../ui/filter/Filter";
import { filterData } from "../../ui/filter/filter.data";
import FilteredPosts from "../../ui/filtered-posts/FilteredPosts";
import { IPost } from "../../../types/post/post.interface";
import { useRouter } from "next/router";
import { IPostsProps } from "./posts.interface";

export interface IPostsPage {
    posts: IPost[];
    props: IPostsProps;
}

const Posts: FC<IPostsPage> = ({props, posts}) => {
    const [modal, setModal] = useState<boolean>(false);

    const [search, setSearch] = useState<string>('');
    const [deal, setDeal] = useState<string>('');
    const [sort, setSort] = useState<string>('');
    const [city, setCity] = useState<string>('');

    const [postsQuantity, setPostsQuantity] = useState<number>();

    const { data: searchedPosts } = postApi.useGetPostsByParamsQuery(search, {
        skip: search === '',
    });

    const router = useRouter();
    const { dealType } = router.query;

    useEffect(() => {
        if (dealType === 'rent') setDeal('Аренда');
        else if (dealType === 'buy') setDeal('Купить');
    }, []);

    let sortedAndSearchedPosts: IPost[] = !!searchedPosts?.posts ? searchedPosts.posts : posts;

    return <Layout title={'Объявления'}>
        <div className={'flex gap-5 mt-16 ml-72 items-center'}>
            <Select setValue={setSort} elements={props.sort} title={'По умолчанию'}/>
            <Select setValue={setDeal} elements={props.deal} title={'Тип сделки'}/>
            <Select setValue={setCity} elements={props.cities} title={'Город'}/>
            <ButtonGreen onClick={() => {setModal(true)}}>Еще фильтры</ButtonGreen>
            <Modal isVisible={modal} setVisible={setModal}>
                <div className={'absolute -left-1/2'}>
                    <Filter search={setSearch} props={filterData}/>
                </div>
            </Modal>
        </div>
        {!sortedAndSearchedPosts?.length ?
            <div className={'m-16 ml-72 text-lg'}>Объявлений не найдено</div>
            :
            <div className={'m-16 ml-72 text-lg'}>Объявлений найдено: {postsQuantity}</div>
        }
        <div className={'ml-60'}>
            <FilteredPosts
                props={{
                    posts: sortedAndSearchedPosts,
                    deal: deal,
                    sort: sort,
                    city: city,
                    setQuantity: setPostsQuantity
            }}/>
        </div>
    </Layout>
};

export default Posts;