import React from 'react';
import Button from '../../Button';
import styles from './styles.module.scss';
import svg_basketball from '../../../assets/basketball.svg';
import svg_be from '../../../assets/be.svg';
import svg_instagram from '../../../assets/instagram.svg';
import svg_linkedin from '../../../assets/linkedin.svg';

const Section2 = () => {
    return (
        <section className={styles.wrapper}>
            <Button className={styles.btn_StartAProject} href="#">Start a Project</Button>
            <div className={styles.socials}>
                <a href="#">
                    <img className={`${styles.pointer} ${styles.left}`} src={svg_basketball} alt="basketball" width={25} height={25}/>
                </a>
                <a href="#">
                    <img className={`${styles.pointer} ${styles.left}`} src={svg_be} alt="be" width={25} height={25}/>
                </a>
                <a href="#">
                    <img className={`${styles.pointer} ${styles.left}`} src={svg_instagram} alt="instagram" width={25} height={25}/>
                </a>
                <a href="#">
                    <img className={`${styles.pointer} ${styles.left}`} src={svg_linkedin} alt="linkedin" width={25} height={25}/>
                </a>
            </div>
        </section>
    );
};

export default Section2;