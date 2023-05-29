import svg_circle_bg from '../../../assets/Half circle bg.svg';
import svg_woman_bg from '../../../assets/womanBG.svg';
import png_woman from '../../../assets/woman.png';
import svg_circle_bg2 from '../../../assets/Ellipse 39.svg';
import styles from './styles.module.scss';
import Button from '../../Button';

const Section3 = () => {
    return (
        <section className={`${styles.sectionWrapper} mw`}>
            <img width={1140} height={1140/2} className={styles.backgroundImageCircle} src={svg_circle_bg} alt="circle background"/>
            <div className={styles.leftBox}>
                <img className={styles.backgroundImageCircle2} src={svg_circle_bg2} alt="circle background"/>
                <img className={styles.backgroundImageWomanBG} src={svg_woman_bg} alt="human background"/>
                <img className={styles.backgroundImageWoman} src={png_woman} alt="human"/>
                
                <div className={styles.textBox}>
                    <p>{`Let’s Development`}</p>
                    <h2>Work With Us</h2>
                    <p>Together we build your Product</p>
                </div>
            </div>
            <div className={styles.rightBox}>
                <div className={styles.col1}>
                    <h2>Trusted Partner</h2>
                    <p>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.</p>
                </div>
                <div className={styles.col2}>
                    <div className={styles.a}>
                        <span className={styles.amount}>200+</span>
                        <p>Complite Project</p>
                    </div>
                    <div className={styles.b}>
                        <span className={styles.amount}>1,230</span>
                        <p>Client Trusted</p>
                    </div>
                </div>
                <div className={styles.col3}>
                    <Button href="#">{`Let's work`}</Button>
                </div>
            </div>
        </section>
    );
};

export default Section3;