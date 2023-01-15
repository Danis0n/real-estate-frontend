import React, { FC, useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import { postApi } from "../../../store/api/post.api";
import ButtonGreen from "../../ui/button/ButtonGreen";
import Select from "../../ui/select/Select";
import { IPostsPage } from "./posts.interface";
import Modal from "../../ui/modal/Modal";
import Filter from "../../ui/filter/Filter";
import { filterData } from "../../ui/filter/filter.data";
import FilteredPosts from "../../ui/filtered-posts/FilteredPosts";
import { IPost } from "../../../types/post/post.interface";
import { useRouter } from "next/router";

interface IPostsPageProps {
    props: IPostsPage;
}

const Posts: FC<IPostsPageProps> = (props: IPostsPageProps) => {

    const [modal, setModal] = useState<boolean>(false);
    const { data: posts } = postApi.useGetPostsQuery(null);
    const [search, setSearch] = useState<string>('');
    const [deal, setDeal] = useState<string>('');
    const [sort, setSort] = useState<string>('');

    const { data: searchedPosts } = postApi.useGetPostsByParamsQuery(search, {
        skip: search === '',
    });

    const router = useRouter();
    const { dealType } = router.query;

    useEffect(() => {
        if (dealType === 'rent') setDeal('Аренда');
        else if (dealType === 'buy') setDeal('Купить');
    }, []);

    // @ts-ignore
    let sortedAndSearchedPosts: IPost[] = !!searchedPosts?.posts ? searchedPosts.posts : posts?.posts;

    return <Layout title={'Объявления'}>
        <div className={'flex gap-5 mt-16 ml-72 items-center'}>
            <Select setValue={setSort} elements={props.props.sort} title={'По умолчанию'}/>
            <Select setValue={setDeal} elements={props.props.deal} title={'Тип сделки'}/>
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
            <div className={'m-16 ml-72 text-lg'}>Объявлений найдено: {sortedAndSearchedPosts?.length}</div>
        }
        <div className={'ml-60'}>
            <FilteredPosts props={{posts: sortedAndSearchedPosts, deal: deal, sort: sort}}/>
        </div>
    </Layout>
};

export default Posts;