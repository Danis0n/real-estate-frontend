import React, {FC} from 'react';
import styles from './Select.module.scss'

interface IType {
    title: string;
    value: string;
}

interface Params {
    elements: IType[];
    title: string
}

const Select: FC<Params> = (props: Params) => {
    return <select id="countries"
                   className={styles.select}>
        <option selected>{props.title}</option>
        {props.elements.map((element) => {
          return <option key={element.value} value={element.value}>{element.title}</option>
        })}
    </select>
};

export default Select;