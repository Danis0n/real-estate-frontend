import React, {FC} from 'react';
import styles from './SearchInput.module.scss'

interface InputType {
    type: string;
    placeholder: string;
    isRequired: boolean;
    value: string;
    setValue: (isVisible: string) => void
}

const SearchInput: FC<InputType> = (props: InputType) => {
    return <input
        className={styles.searchInput}
        type={props.type}
        placeholder={props.placeholder}
        required={props.isRequired}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}/>
};

export default SearchInput;