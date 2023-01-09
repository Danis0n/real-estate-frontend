import {NextPage} from "next";

export type TypeRoles = {
    allowRoles: string[];
}

export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles;

export type TypeComponentAuthFields = {Component: TypeRoles}