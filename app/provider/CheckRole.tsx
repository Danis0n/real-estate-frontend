import React, {FC, PropsWithChildren} from 'react';
import {TypeComponentAuthFields} from "./private-route.interface";
import {useAuth} from "../hooks/useAuth";
import {useRouter} from "next/router";

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
    children,
    Component: {allowRoles}
}) => {
    const {isLoading, user} = useAuth();
    const {replace, pathname} = useRouter()

    const Children = () => <>{children}</>;

    if (isLoading) return null;

    if (user && allowRoles.includes(user.roles[0])) return <Children/>
    else pathname !== '/' && replace('/');

    return null;
};

export default CheckRole;