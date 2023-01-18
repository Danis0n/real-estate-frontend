import React from 'react';
import CreatePost from "../../app/components/pages/post/create/CreatePost";
import {NextPageAuth} from "../../app/provider/private-route.interface";
import {postsData} from "../../app/components/pages/posts/posts.data";

const CreatePage: NextPageAuth = () => {
    return <CreatePost cities={postsData.cities}/>
};

CreatePage.allowRoles = [ 'admin', 'user', 'company'];

export default CreatePage;