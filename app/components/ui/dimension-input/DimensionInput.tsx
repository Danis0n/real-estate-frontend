import React, {FC} from 'react';
import styles from './DimensionInput.module.scss'

interface InputType {
    type: string;
    placeholder: string;
    isRequired: boolean;
    value: any;
    setValue: (isVisible: any) => void
}

const DimensionInput: FC<InputType> = (props: InputType) => {
    return <input
        className={styles.input}
        type={props.type}
        placeholder={props.placeholder}
        required={props.isRequired}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}/>
};

export default DimensionInput;