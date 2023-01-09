import {IHeaderItem} from "./header.interface";
import Bell from '../../../../public/bell.svg'
import Heart from '../../../../public/heart.svg'

export const headerItems: IHeaderItem[] = [
{
    link: '/favorite',
    icon: Bell
},
{
    link: '/notifications',
    icon: Heart
}]