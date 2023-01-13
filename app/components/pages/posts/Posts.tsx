import React, {FC, useState} from 'react';
import Layout from '../../layout/Layout';
import { postApi } from "../../../store/api/post.api";
import ButtonGreen from "../../ui/button/ButtonGreen";
import SearchInput from "../../ui/search-input/SearchInput";
import Select from "../../ui/select/Select";
import {IPostsPage} from "./posts.interface";
import PostItem from "../../ui/post-item/PostItem";
import Modal from "../../ui/modal/Modal";
import Filter from "../../ui/filter/Filter";
import {filterData} from "../../ui/filter/filter.data";
import {postsData} from "./posts.data";
import {api} from "../../../store/api/api";
import {userApi} from "../../../store/api/user.api";

interface IPostsPageProps {
    props: IPostsPage;
}

const Posts: FC<IPostsPageProps> = (props: IPostsPageProps) => {

    const [modal, setModal] = useState<boolean>(false);
    const { data: posts } = postApi.useGetPostsQuery(null);
    const [search, setSearch] = useState<string>('');

    const { data: searchedPosts } = postApi.useGetPostsByParamsQuery(search, {
        skip: search === '',
    });

    console.log(search);

    return <Layout title={'Объявления'}>
        <div className={'flex gap-5 mt-16 ml-72 items-center'}>
            <Select setValue={() => {}} elements={props.props.sort} title={'По умолчанию'}/>
            <Select setValue={() => {}} elements={props.props.deal} title={'Тип сделки'}/>
            <ButtonGreen onClick={() => {setModal(true)}}>Еще фильтры</ButtonGreen>
            <Modal isVisible={modal} setVisible={setModal}>
                <div className={'absolute -left-1/2'}>
                    <Filter search={setSearch} props={filterData}/>
                </div>
            </Modal>
            <SearchInput
                type={'text'}
                placeholder={'Введите название, улицу и т.д.'}
                isRequired={false}
                value={''}
                setValue={() => {}}
            />
            <ButtonGreen onClick={() => {}}><div className={'w-[100px]'}>Найти</div></ButtonGreen>
        </div>
            <div className={'m-16 ml-72 text-lg'}>Объявлений найдено: {posts?.posts.length}</div>
        <div className={'ml-60'}>
            {!!posts && posts.posts.map((post) => {
                return <PostItem post={post} key={post.postUUID}/>
            })}
        </div>
    </Layout>
};

export default Posts;