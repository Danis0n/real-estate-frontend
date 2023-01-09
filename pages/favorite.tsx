import React from 'react';
import {NextPageAuth} from "../app/provider/private-route.interface";
import Layout from "../app/components/layout/Layout";

const FavoritePage: NextPageAuth = () => {
    return <Layout title={'Favorite'}>fav</Layout>
};
FavoritePage.allowRoles = [ 'admin', 'user', 'company'];

export default FavoritePage;