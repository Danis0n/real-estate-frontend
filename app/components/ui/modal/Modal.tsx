import React, {FC, PropsWithChildren} from 'react';
import styles from './Modal.module.scss'

interface ModalType {
    children: React.ReactNode;
    isVisible: boolean,
    setVisible: (isVisible: boolean) => void;
}

const Modal: FC<ModalType> = ({isVisible, setVisible, children}) => {
    if (!isVisible) return null;

    return <>
        <div className={styles.modal} onClick={() => setVisible(false)}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    </>
};

export default Modal;