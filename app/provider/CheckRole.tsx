import React, {FC, PropsWithChildren} from 'react';
import {TypeComponentAuthFields} from "./private-route.interface";
import {useAuth} from "../hooks/useAuth";
import {useRouter} from "next/router";

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
    children,
    Component: {allowRoles}
}) => {
    console.log(allowRoles);

    const {isLoading, user} = useAuth();
    const {replace, pathname} = useRouter()
    console.log(user?.roles);

    const Children = () => <>{children}</>;

    if (isLoading) return null;

    if (user && allowRoles.includes(user.roles[0].name)) return <Children/>
    else pathname !== '/' && replace('/');


    // if (allowRoles) pathname !== '/' && replace('/');
    return null;
};

export default CheckRole;