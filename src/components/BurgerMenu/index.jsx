import React, { useState } from 'react';
import getCopyrightText from '../../utils/getCopyrightText';
import styles from './styles.module.scss'

const BurgerMenu = (props) => {
    const { children, isOpen, setIsOpen } = props;

    function clickCloseHandler() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <button className={[styles.background, isOpen ? styles.openBackground : ''].join(' ')}
            onClick={clickCloseHandler}></button>
            <div className={[styles.content, isOpen ? styles.openContent : ''].join(' ')}>
                {children}
                <div className={styles.copyright}>{getCopyrightText()}</div>
            </div>
        </>
    );
};

export default BurgerMenu;