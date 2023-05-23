import React, { useState } from 'react';
import BurgerMenu from '../BurgerMenu';
import BurgerMenu_Button from '../BurgerMenu/Button';
import styles from './styles.module.scss'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen}>
            <ul className={styles.burgerLinks}>
                <li><a href="#" className={styles.logo}>Kreasi Digital</a></li>
                <li><a href="#" className={styles.active}>Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Pricing</a></li>
            </ul>
        </BurgerMenu>
        <header className={styles.wrapper}>
            <div className={styles.left}>
                <a href="#" className={styles.logo}>Kreasi Digital</a>
            </div>
            <div className={styles.BurgerMenu_Button}>
                <BurgerMenu_Button isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
            <div className={styles.center}>
                <ul className={styles.links}>
                    <li><a href="#" className={styles.active}>Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Pricing</a></li>
                </ul>
            </div>
            <div className={styles.right}>
                <a className={styles.bttn_letsTalk} href="#">Let's Talk</a>
            </div>
        </header>
        </>
    );
};

export default Header;