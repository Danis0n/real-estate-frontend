import React, {FC, PropsWithChildren, useEffect} from 'react';
import Head from "next/head";
import Sidebar from "../sidebar/Sidebar";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import {useActions} from "../../hooks/useAction";

const Layout: FC<PropsWithChildren<{title: string}>> = ({title, children}) => {

    const { refresh } = useActions();

    useEffect(() => {
        if (localStorage.getItem('token'))
            refresh();
    }, [])

    return <>
        <Head>
            <title>{title}</title>
        </Head>
        <main>
            <Sidebar/>
            <section>
                <Header/>
                <div>{children}</div>
                <Footer/>
            </section>
        </main>
    </>
};

export default Layout;