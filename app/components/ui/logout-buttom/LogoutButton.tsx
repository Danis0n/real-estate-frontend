import React, {FC, PropsWithChildren} from 'react';
import {api} from "../../../store/api/api";
import {useAuth} from "../../../hooks/useAuth";
import styles from './LogoutButtom.module.scss'
import {useActions} from "../../../hooks/useAction";

const LogoutButton: FC<PropsWithChildren> = ({children}) => {

    const { isAuth } = useAuth();
    const { logout } = useActions();
    const [logoutRequest, { status }] = api.useLogoutMutation()

    const handleLogout = () => {
        logoutRequest(null).unwrap();
        logout();
    }

    return <button onClick={() => handleLogout()} className={styles.logoutButton}>{children}</button>
};

export default LogoutButton;