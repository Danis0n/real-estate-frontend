import React, {FC, ReactNode} from 'react';
import styles from './Button.module.scss'

interface CLinkType {
    children: ReactNode;
    onClick: React.MouseEventHandler<HTMLElement>;
}

const ButtonGrey: FC<CLinkType> = (props: CLinkType) => {
    return <button onClick={props.onClick} className={styles.buttonGrey}>{props.children}</button>
};

export default ButtonGrey;