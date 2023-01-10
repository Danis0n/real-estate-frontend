import React, {FC} from 'react';
import {IPostPage} from "./post.interface";
import Layout from "../../layout/Layout";

const Post: FC<IPostPage> = ({post, images}) => {

    return (
        <Layout title={`${post?.name}`}>
            <div>
                {/*<img alt={'img'} src={`data:image/jpeg;base64,${images[1]}`}/>*/}
            </div>
        </Layout>
    )
};

export default Post;