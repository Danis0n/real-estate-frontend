import React, { FC, useState } from 'react';
import styles from './Header.module.scss'
import Image from "next/image";
import ButtonGreen from "../../ui/button/ButtonGreen";
import ButtonGrey from "../../ui/button/ButtonGrey";
import { useAuth } from "../../../hooks/useAuth";
import { useActions } from "../../../hooks/useAction";
import Modal from "../../ui/modal/Modal";
import Login from "../../ui/form/login/Login";
import {LoginRequest} from "../../../types/auth/auth.request";

const Header = () => {

    const { user, isAuth } = useAuth();
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
                        <ButtonGrey onClick={() => {}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                            </svg>
                        </ButtonGrey>
                        <ButtonGrey onClick={() => {}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                            </svg>
                        </ButtonGrey>
                        <ButtonGreen onClick={() => {}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"/>
                            </svg>
                        </ButtonGreen>
                    </div>
                    :
                    <div>
                        <ButtonGrey onClick={() => setIsModal(true)}>Войти</ButtonGrey>
                        <Modal isVisible={isModal} setVisible={setIsModal}>
                            <Login login={login}/>
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