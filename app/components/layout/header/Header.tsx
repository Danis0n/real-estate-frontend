import React, { FC, useState } from 'react';
import styles from './Header.module.scss'
import Image from "next/image";
import Link from 'next/link';
import ButtonGreen from "../../ui/button/ButtonGreen";
import ButtonGrey from "../../ui/button/ButtonGrey";
import { useAuth } from "../../../hooks/useAuth";
import Modal from "../../ui/modal/Modal";
import Login from "../../login/Login";
import {IHeaderItem} from "./header.interface";
import Logo from '../../../../public/logo.svg';
import Dropdown from "../../ui/dropdown/Dropdown";

interface HeaderProps {
    items: IHeaderItem[];
}

const Header: FC<HeaderProps> = (items: HeaderProps) => {
    const { isAuth } = useAuth();

    const [isModal, setIsModal] = useState<boolean>(false);

    return <>
        <nav className={styles.parent}>
            <div className={styles.main}>
                <Link href={'/'}>
                    <Image src={Logo} className="mr-3 h-6 sm:h-9" alt="Real Estate logo" width={200} height={200}/>
                </Link>
                <div>
                    <ul className={styles.support}>
                        <li><div className={styles.item}>Поддержка:</div></li>
                        <li><div className={styles.supportItem}>+7(777)777-77-77</div></li>
                        <li><div className={styles.supportItem}> d.linko@bk.ru</div></li>
                    </ul>
                </div>
                <div className={styles.action}>
                {isAuth ?
                    <div className={'flex justify-items-center'}>
                        {items.items.map((item) => {
                            return (
                                <ButtonGrey key={item.link} onClick={() => {}}>
                                    <Link href={item.link}>
                                        <Image src={item.icon} alt={item.link} width={24} height={24}/>
                                    </Link>
                                </ButtonGrey>
                            )
                        })}
                        <div>
                            <Dropdown/>
                        </div>
                    </div>
                    :
                    <div>
                        <ButtonGrey onClick={() => setIsModal(true)}>Войти</ButtonGrey>
                        <Modal isVisible={isModal} setVisible={setIsModal}>
                            <Login/>
                        </Modal>
                        <ButtonGreen onClick={() => {}}>Регистрация</ButtonGreen>
                    </div>
                }
                </div>
            </div>
        </nav>
    </>
};

export default Header;