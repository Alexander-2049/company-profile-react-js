import styles from './styles.module.scss';
import svg_timeline from '../../../assets/timeline.svg';
import png_happyClients from '../../../assets/happyClients.png';
import Button from '../../Button';

const Section4 = () => {
    return (
        <section className={`${styles.wrapper} mw`}>
            <div className={styles.block}>
                <div className={styles.text}>
                    <p>Why Choose Us</p>
                    <h2>Fast Work is our focus</h2>
                    <p>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.</p>
                </div>
                <div className={styles.image}>
                    <img src={svg_timeline} alt="timeline"/>
                </div>
            </div>
            <div className={`${styles.block} ${styles.reverse}`}>
                <div className={styles.text}>
                    <p>Who We are</p>
                    <h2>Trusted 100% by many people Gradually</h2>
                    <p>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.</p>
                    <Button className={styles.button}>{`Let's work`}</Button>
                </div>
                <div className={styles.image}>
                    <img src={png_happyClients} alt="timeline"/>
                </div>
            </div>
        </section>
    );
};

export default Section4;