import Button from '../../Button';
import styles from './styles.module.scss';

import image1 from '../../../assets/image1.png';
import image2 from '../../../assets/image2.png';
import image3 from '../../../assets/image3.png';

const Section5 = () => {
    return (
        <section className={`${styles.wrapper} mw`}>
            <div className={styles.title}>
                <p>Project</p>
                <h2>Success Project</h2>
                <p>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est </p>
            </div>

            <div className={styles.posters}>
                <div className={styles.left} style={{backgroundImage: `url(${image1})`}}>
                    <div className={styles.bottomLeft}>
                        <h2>Website Design</h2>
                        <p>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar</p>
                    </div>
                    <div className={styles.bottomRight}>
                        <a href="#">{`Let's work`}</a>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.textBoxWrapper} style={{backgroundImage: `url(${image2})`}}>
                        <div className={styles.bottom}>
                            <h2>Website Design</h2>
                            <p>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar</p>
                        </div>
                    </div>
                    <div className={styles.textBoxWrapper} style={{backgroundImage: `url(${image3})`}}>
                        <div className={styles.bottom}>
                            <h2>Website</h2>
                            <p>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar</p>
                        </div>
                    </div>
                </div>
            </div>

            <Button href="#">View Our Project</Button>
        </section>
    );
};

export default Section5;