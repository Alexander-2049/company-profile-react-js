import React from 'react';
import styles from './styles.module.scss';
import svg_pointer1 from '../../../assets/Vector 587.svg';
import svg_pointer2 from '../../../assets/Vector 588.svg';
import svg_arrow from '../../../assets/Arrow 1.svg';
import svg_star from '../../../assets/Star 3.svg';
import svg_curveLine from '../../../assets/Vector 585.svg';

const Section1 = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.titleWrapper}>

                    <div className={styles.text}>
                        <span className={styles.descriptionTop}>Designing With Us</span>
                        <h1 className={styles.title}>The Beloved Design Company in Konoha</h1>
                        <span className={styles.descriptionBottom}>With us achieving dreams in building your products, together say <u>“Yes”</u> to extraordinary designs</span>
                    </div>


                    <div className={styles.imagesWrapper}>
                        <div className={styles.imageLeft}>
                            <img className={`${styles.pointer} ${styles.left}`} src={svg_pointer1} alt="Pointer 1" width={38} height={38}/>
                            <div className={styles.frame}>
                                <div className={styles.leftFrameTitle}>Weekly Growth</div>
                                <div className={styles.graph}>
                                    <img src={svg_curveLine} alt="Graphic" width={144} height={53}/>
                                </div>
                                <div className={styles.frameBottom}>
                                    <div className={styles.position}>
                                        <div className={`${styles.elipse} ${styles.red}`}></div>
                                        <span>12345</span>
                                    </div>
                                    <div className={styles.position}>
                                        <div className={`${styles.elipse} ${styles.blue}`}></div>
                                        <span>2.4%</span>
                                    <img src={svg_arrow} alt="arrow up"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.imageRight}>
                            <img className={`${styles.pointer} ${styles.right}`} src={svg_pointer2} alt="Pointer 2" width={38} height={38}/>
                            <div className={styles.frame}>
                                <div className={styles.line1}>Client Trusted</div>
                                <div className={styles.rightFrameBottom}>
                                    <div className={styles.avatars}>
                                        <img src={'https://picsum.photos/32?1'}/>
                                        <img src={'https://picsum.photos/32?2'}/>
                                        <img src={'https://picsum.photos/32?3'}/>
                                        <img src={'https://picsum.photos/32?4'}/>
                                        <img src={'https://picsum.photos/32?5'}/>
                                    </div>
                                    <div className={styles.rating}>
                                        <div className={styles.star}>
                                            <img src={svg_star} alt="star"/>
                                        </div>
                                        <span>1,234+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
            
            <ul className={styles.list}>
                <li>UI/UX Design</li>
                <li>Prototype</li>
                <li>Web Design</li>
                <li>Landing Page</li>
                <li>Mobile Design</li>
                <li>Development</li>
            </ul>
        </section>
    );
};

export default Section1;