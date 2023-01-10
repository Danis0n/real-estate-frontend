import {FC, PropsWithChildren} from "react";
import {TypeComponentAuthFields} from "./private-route.interface";
import dynamic from "next/dynamic";

const  DynamicCheckRole = dynamic(() => import('./CheckRole'), {
    ssr: false,
})

const AuthProvide: FC<PropsWithChildren<TypeComponentAuthFields>> = (
    {Component: {allowRoles}, children}
) => {
    return allowRoles == null ? (
        <>{children}</>
    ) : (
        <DynamicCheckRole Component={{allowRoles}} >{children}</DynamicCheckRole>
    )
}

export default AuthProvide;