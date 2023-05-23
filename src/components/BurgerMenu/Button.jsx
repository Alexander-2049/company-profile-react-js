import React from 'react';
import styles from './styles.module.scss';

const BurgerMenu_Button = ({isOpen, setIsOpen}) => {
    function clickHandler() {
        setIsOpen(!isOpen);
    }

    return (
        <button className={styles.burgerButton} onClick={clickHandler}>
            <div className={styles.burgerButton_line}></div>
            <div className={styles.burgerButton_line}></div>
            <div className={styles.burgerButton_line}></div>
        </button>
    );
};

export default BurgerMenu_Button;