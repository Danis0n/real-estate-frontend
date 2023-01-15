import React, {FC} from 'react';
import {useSearch} from "./useSearch";
import styles from './Search.module.scss'
import PostSearchItem from "../ui/post-search-item/PostSearchItem";

const Search: FC = () => {

    const { posts, handleSearch, searchTerm, isSuccess } = useSearch();

    return (
        <div className={styles.search_top}>
            <label>
            <input
                type={'text'}
                placeholder={'Поиск объявлений'}
                value={searchTerm}
                onChange={handleSearch}
            />
            </label>
            {isSuccess && (
                <div className={styles.result}>
                    {posts?.length? (
                        posts.map((post) => <div key={post.postUUID} className={'mb-5'}>
                            <PostSearchItem post={post}/>
                        </div>)
                    ) : (
                        <div>Посты не найдены!</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Search;