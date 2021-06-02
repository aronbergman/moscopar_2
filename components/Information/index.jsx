import React, { useState } from 'react';
import styles from './Information.module.scss'
import image1 from './../../public/one.png'
import image2 from './../../public/two.png'
import Button from "../Button/Button";
import { withTranslation } from "../../i18n";

const Information = ({t}) => {
    const [open, setOpen] = useState(false)
    const cls = [styles.ButtonIcon]
    if (!open) cls.push(styles.ButtonIconOpen)
    const items = [
        {
            title: t('information.item1.title'),
            image: image1,
            description: t('information.item1.description')
        },
        {
            title: t('information.item2.title'),
            image: image2,
            description: t('information.item2.description')
        }
    ]

    return (
        <div className={styles.Information} id="information">
            <h2 className={styles.Title}>{t('information.title1')} <br/>{t('information.title2')}</h2>

            <div className={styles.InformationRow}>
                <div className={styles.Header} onClick={() => setOpen(!open)}>
                    <div className={styles.Titles}>
                        <h1 className={styles.Title}>{t('information.what')}</h1>
                    </div>
                    <div className={styles.Button}>
                        <div className={cls.join(' ')}/>
                        {open ? t('events.off') : t('events.on')}
                    </div>
                </div>
                {open && <div>
                    <div className={styles.Items}>
                        {items.map(i => (
                            <div className={styles.Item}>
                                <div className={styles.Image} style={{ backgroundImage: `url(${i.image})` }}/>
                                <div className={styles.Text}>
                                    <div className={styles.Title} dangerouslySetInnerHTML={{__html: i.title}}/>
                                    <div className={styles.Description}>{i.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button label={t('banner.registration')} color={'#FF005C'} link={'https://events.webinar.ru/38722755/moscopar/'}/>
                </div>}
            </div>
        </div>
    );
};

export default withTranslation()(Information);
