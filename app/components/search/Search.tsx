import React, {FC} from 'react';
import {useSearch} from "./useSearch";
import styles from './Search.module.scss'

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
                        posts.map((post) => <div key={post.postUUID}>{post.name}</div>)
                    ) : (
                        <div>Посты не найдены!</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Search;