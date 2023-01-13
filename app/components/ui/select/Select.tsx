import React, {FC} from 'react';
import styles from './Select.module.scss'

interface IType {
    title: string;
    value: string;
}

interface Params {
    elements: IType[];
    title: string
    setValue: (e: string) => void;
}

const Select: FC<Params> = (props: Params) => {
    return <select className={styles.select} onChange={ (e) => props.setValue(e.currentTarget.value) }>
        <option defaultValue={props.title}>{props.title}</option>
        {props.elements.map((element) => {
          return <option key={element.value} value={element.value}>{element.title}</option>
        })}
    </select>
};

export default Select;