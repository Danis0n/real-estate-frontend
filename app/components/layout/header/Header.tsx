import React, { FC, useState } from 'react';
import styles from './Header.module.scss'
import Image from "next/image";
import Link from 'next/link';
import ButtonGreen from "../../ui/button/ButtonGreen";
import ButtonGrey from "../../ui/button/ButtonGrey";
import { useAuth } from "../../../hooks/useAuth";
import { useActions } from "../../../hooks/useAction";
import Modal from "../../ui/modal/Modal";
import Login from "../../ui/form/login/Login";
import {LoginRequest} from "../../../types/auth/auth.request";
import Options from '../../../../public/options.svg'
import {IHeaderItem} from "./header.interface";

interface HeaderProps {
    items: IHeaderItem[];
}

const Header: FC<HeaderProps> = (items: HeaderProps) => {
    const { isAuth } = useAuth();
    const { login } = useActions();

    const [isModal, setIsModal] = useState<boolean>(false);

    const handleLogin = (data: LoginRequest) => {
        login(data);
    }

    return <>
        <nav className={styles.parent}>
            <div className={styles.main}>
                    <Image src='logo.svg' className="mr-3 h-6 sm:h-9" alt="Real Estate logo" width={200} height={200}/>
                <div>
                    <ul className={styles.support}>
                        <li><div className={styles.item}>Поддержка:</div></li>
                        <li><div className={styles.supportItem}>+7(777)777-77-77</div></li>
                        <li><div className={styles.supportItem}> d.linko@bk.ru</div></li>
                    </ul>
                </div>
                <div className={styles.action}>
                {isAuth ?
                    <div>
                        {items.items.map((item) => {
                            return (
                                <ButtonGrey key={item.link} onClick={() => {}}>
                                    <Link href={item.link}>
                                        <Image src={item.icon} alt={item.link} width={24} height={24}/>
                                    </Link>
                                </ButtonGrey>
                            )
                        })}
                        <ButtonGreen onClick={() => {}}>
                            <Image src={Options} alt={'options'} width={24} height={24}/>
                        </ButtonGreen>
                    </div>
                    :
                    <div>
                        <ButtonGrey onClick={() => setIsModal(true)}>Войти</ButtonGrey>
                        <Modal isVisible={isModal} setVisible={setIsModal}>
                            <Login login={handleLogin}/>
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