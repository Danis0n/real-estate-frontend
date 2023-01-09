import React, {FC, PropsWithChildren, useEffect} from 'react';
import Head from "next/head";
import Sidebar from "../sidebar/Sidebar";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import {headerItems} from "./header/header.data";

const Layout: FC<PropsWithChildren<{title: string}>> = ({title, children}) => {

    return <>
        <Head>
            <title>{title}</title>
        </Head>
        <main>
            <Sidebar/>
            <section>
                <Header items={headerItems}/>
                <div>{children}</div>
                <Footer/>
            </section>
        </main>
    </>
};

export default Layout;