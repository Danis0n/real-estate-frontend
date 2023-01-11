import React, {FC} from 'react';
import Layout from "../../layout/Layout";
import {IHome} from "./home.interface";
import styles from './Home.module.scss'
import ButtonGrey from "../../ui/button/ButtonGrey";
import Link from "next/link";
import ButtonGreen from "../../ui/button/ButtonGreen";
import SearchInput from "../../ui/search-input/SearchInput";
import {text} from "stream/consumers";
import Select from "../../ui/select/Select";
import {useAuth} from "../../../hooks/useAuth";

interface HomeData {
    props: IHome;
}

const Home: FC<HomeData> = (props: HomeData) => {

    return <>
        <Layout title={'Real Estate'}>
            <div className='bg-center bg-home-bg h-[870px]'>
                <div className='absolute right-96 translate-x-20'>
                    <div className="mt-20 flex gap-2">
                        {props.props.nav.map((navItem) => {
                            return (
                                <ButtonGrey key={navItem.title} onClick={() => {
                                }}>
                                    <Link href={navItem.link} className='text-base'>
                                        {navItem.title}
                                    </Link>
                                </ButtonGrey>
                            )
                        })}
                        <ButtonGrey onClick={() => {
                        }}>
                            <Link href={'/rent'} className='text-base'>
                                Контакты
                            </Link>
                        </ButtonGrey>
                    </div>
                </div>
                <div className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <div className='my-10 text-4xl font-bold'>
                        НАЙДИ СВОЕ МЕСТО ДЛЯ КОМФОРТНОЙ ЖИЗНИ
                    </div>
                    <div className='text-center text-2xl my-10'>
                        среди множества объявлений
                    </div>
                    <div className='text-center'>
                        <ButtonGreen onClick={() => {
                        }}>
                            <div className='text-xl'>Узнать больше</div>
                        </ButtonGreen>
                    </div>
                </div>
            </div>
            <div className='w-full mb-20'>
                <div className='rounded-lg shadow-lg left-1/2 w-1/2 translate-x-1/2 -mt-10 bg-primary-700'>
                    <div className="flex gap-10 p-5">
                        <div>
                            <SearchInput
                                type={'text'}
                                placeholder={'Введите название, улицу и т.д.'}
                                isRequired={false}
                                value={''}
                                setValue={() => {}}/>
                        </div>
                        <div>
                            <Select elements={props.props.cities} title={'Город'}/>
                        </div>
                        <div>
                            <Select elements={props.props.types} title={'Тип'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute mt-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='my-10 text-3xl'>
                    ПОСЛЕДНИЕ ОБЪЯВЛЕНИЯ
                </div>
                <div className='text-center text-lg my-10'>
                    Возможно, Вы искали именно их?
                </div>
            </div>
        </Layout>
    </>
};

export default Home;