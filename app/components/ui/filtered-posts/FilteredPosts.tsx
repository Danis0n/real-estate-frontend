import React, { FC } from 'react';
import { IFilteredPosts } from "./filtered-posts.interface";
import { IPost } from "../../../types/post/post.interface";
import PostItem from "../post-item/PostItem";

interface IFilteredPostsProps {
    props: IFilteredPosts;
}

const FilteredPosts: FC<IFilteredPostsProps> = (props: IFilteredPostsProps) => {

    let posts: IPost[] = props.props.posts;

    if (props.props.deal !== '' && props.props.deal !== 'Тип сделки')
        posts = posts.filter(post => post.deal === props.props.deal)

    if (props.props.sort !== '' && props.props.deal !== 'По умолчанию') {
        if (props.props.sort === 'price')
            posts = [...posts].sort((a,b) => b.info.price - a.info.price);
        else posts = [...posts].sort((a,b) => b.info.dimensions - a.info.dimensions);
    }
    console.log(props.props.sort);
    return (
        <div>
            {!!posts && posts.map((post) => {
                return <PostItem key={post.postUUID} post={post} />
            })}
        </div>
    );
};

export default FilteredPosts;