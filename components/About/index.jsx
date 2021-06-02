import React, { useState } from 'react';
import styles from './About.module.scss'
import { useSpring, animated, config } from 'react-spring'
import { withTranslation } from "../../i18n";

const About = ({t}) => {

    function Number(num) {
        const [flip, set] = useState(false)
        const { number } = useSpring({
            reset: true,
            reverse: flip,
            from: { number: 0 },
            number: num,
            delay: 200,
            config: config.molasses,
        })

        return <animated.div>{number.to(n => n.toFixed(0))}</animated.div>
    }

    return (
        <div className={styles.About} id="about">
            <div className={styles.Rows}>
                <div className={styles.Container}>
                    <h1 className={styles.Title}>{t('about.title')}</h1>
                    <div className={styles.Description} dangerouslySetInnerHTML={{__html: t('about.description')}}/>
                    <div className={styles.DescriptionMobile} dangerouslySetInnerHTML={{__html: t('about.descriptionMobile')}}/>
                </div>
                <div className={styles.Image}/>
            </div>

            <div className={styles.Counts}>
                <div className={styles.CountItem}><span>{Number(2)}</span> <p>{t('about.day')}</p></div>
                <div className={styles.CountLine}/>
                <div className={styles.CountItem}><span>{Number(300)}</span> <p>{t('about.people')}</p></div>
                <div className={styles.CountLine}/>
                <div className={styles.CountItem}><span>{Number(3)}</span> <p>{t('about.sessions')}</p></div>
                <div className={styles.CountLine}/>
                <div className={styles.CountItem}><span>{Number(9)}</span> <p>{t('about.hour')}</p></div>
                <div className={styles.CountLine}/>
                <div className={styles.CountItem}><span>{Number(19)}</span> <p>{t('about.speakers')}</p></div>
            </div>
        </div>
    );
};

export default withTranslation()(About);
