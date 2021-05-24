import React, { useState } from 'react';
import styles from './About.module.scss'
import { useSpring, animated, config } from 'react-spring'

const About = () => {

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
                    <h1 className={styles.Title}>о конференции</h1>
                    <div className={styles.Description}>
                        Конференция пройдет 24-25 июня 2021 года в&nbsp;онлайн формате. Эксперты по&nbsp;борьбе
                        с&nbsp;ВИЧ из&nbsp;России и&nbsp;Франции соберутся, чтобы обсудить современные тренды
                        в&nbsp;лечении ВИЧ-инфекции, влияние пандемии COVID-19&nbsp;на оказание помощи пациентам
                        с&nbsp;ВИЧ, оптимизацию системы оказания медицинской помощи при ВИЧ, опыт эффективных практик
                        доступа к&nbsp;уязвимым группам и&nbsp;новые подходы в&nbsp;лабораторной диагностике ВИЧ
                        и&nbsp;ко-инфекций.
                    </div>

                    <div className={styles.DescriptionMobile}>
                        Конференция пройдет 24-25 июня 2021 года в&nbsp;онлайн формате. Эксперты по&nbsp;борьбе
                        с&nbsp;ВИЧ из&nbsp;России и&nbsp;Франции соберутся, чтобы обсудить современные тренды
                        в&nbsp;лечении ВИЧ-инфекции.
                    </div>

                </div>
                <div className={styles.Image}/>
            </div>

            <div className={styles.Counts}>
                <div className={styles.CountItem}><span>{Number(2)}</span> <p>дня</p></div>
                <div className={styles.CountLine}/>
                <div className={styles.CountItem}><span>{Number(300)}</span> <p>участников</p></div>
                <div className={styles.CountLine}/>
                <div className={styles.CountItem}><span>{Number(3)}</span> <p>сессии</p></div>
                <div className={styles.CountLine}/>
                <div className={styles.CountItem}><span>{Number(9)}</span> <p>часов</p></div>
                <div className={styles.CountLine}/>
                <div className={styles.CountItem}><span>{Number(19)}</span> <p>спикеров</p></div>
            </div>
        </div>
    );
};

export default About;
