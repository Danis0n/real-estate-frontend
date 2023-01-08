import React, {FC, PropsWithChildren, ReactNode} from 'react';
import styles from './Button.module.scss';

interface CLinkType {
    children: ReactNode;
    onClick: React.MouseEventHandler<HTMLElement>;
}

const ButtonGreen: FC<CLinkType> = (props: CLinkType) => {
    return <button onClick={props.onClick} className={styles.buttonGreen}>{props.children}</button>
};

export default ButtonGreen;