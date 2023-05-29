import svg_circle_bg from '../../../assets/Half circle bg.svg';
import svg_woman_bg from '../../../assets/womanBG.svg';
import png_woman from '../../../assets/woman.png';
import svg_circle_bg2 from '../../../assets/Ellipse 39.svg';
import styles from './styles.module.scss';
import Button from '../../Button';

import { useInView } from 'react-hook-inview'
import useCountUp from '../../../hooks/useCountUp.js';
import { useEffect } from 'react';
import addCommasToNumber from '../../../utils/addCommasToNumber';

const Section3 = () => {
    const [ref, isVisible] = useInView({
      threshold: 0,
    })

    const { count: count1, setStart: setStart1 } = useCountUp({ endValue: 200, duration: 1500 });
    const { count: count2, setStart: setStart2 } = useCountUp({ endValue: 1230, duration: 2200 });

    useEffect(() => {
        if(!isVisible) return;
        setStart1(true);
        setStart2(true);
    }, [isVisible])

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
                <div ref={ref} className={styles.col2}>
                    <div className={styles.a}>
                        <span className={styles.amount}>{count1}+</span>
                        <p>Complite Project</p>
                    </div>
                    <div className={styles.b}>
                        <span className={styles.amount}>{addCommasToNumber(count2)}</span>
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