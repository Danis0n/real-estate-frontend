interface INav {
    title: string;
    link: string;
}

interface IType {
    title: string;
    value: string;
}

export interface IHome {
    nav: INav[];
    types: IType[];
    cities: IType[];
}