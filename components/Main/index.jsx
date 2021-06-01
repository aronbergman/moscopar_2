import React from 'react';
import { i18n, Link, withTranslation } from './../../i18n'
import Button from "./../Button/Button";
import styles from './Main.module.scss'

const Main = ({ t }) => {
    return (
        <div className={styles.Main}>
            <div className={styles.Titles}>
                <h2 className={styles.Description}>{t(`main.description`)} <span>{t(`main.online`)}</span></h2>
                <h1 className={styles.Title}>{t('main.title1')}<br/>
                    {t('main.title2')} <br/>
                    {t('main.title3')}</h1>
                <Button
                    label={t('buttons.registration')}
                    color="#000"
                    link={'https://events.webinar.ru/38722755/moscopar/'}
                />
            </div>

            <div className={styles.Image}/>
        </div>
    );
};

export default withTranslation()(Main);
