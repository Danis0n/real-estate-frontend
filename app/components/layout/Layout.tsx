import React, {FC, PropsWithChildren, useEffect} from 'react';
import Head from "next/head";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import {headerItems} from "./header/header.data";

const Layout: FC<PropsWithChildren<{title: string}>> = ({title, children}) => {

    return <>
        <Head>
            <title>{title}</title>
        </Head>
        <main>
            <section>
                <Header items={headerItems}/>
                <div className='mb-auto'>{children}</div>
                <Footer/>
            </section>
        </main>
    </>
};

export default Layout;