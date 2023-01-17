import React from 'react';
import CreatePost from "../../app/components/pages/post/create/CreatePost";
import {NextPageAuth} from "../../app/provider/private-route.interface";

const CreatePage: NextPageAuth = () => {
    return <CreatePost/>
};

CreatePage.allowRoles = [ 'admin', 'user', 'company'];

export default CreatePage;