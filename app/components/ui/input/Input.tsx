import React, {FC} from 'react';
import styles from './Input.module.scss'

interface InputType {
    type: string;
    placeholder: string;
    isRequired: boolean;
    value: string;
    setValue: (isVisible: string) => void
}

const Input: FC<InputType> = (props: InputType) => {
    return <input
        className={styles.input}
        type={props.type}
        placeholder={props.placeholder}
        required={props.isRequired}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}/>
};

export default Input;