import React from 'react';
import { menu } from "../../menu";
import Burger from "./Burger";
import { i18n, withTranslation } from './../../i18n'
import styles from './Header.module.scss'

const Header = ({ t }) => {
    return (
        <>
            <div className={styles.Text}>21–22 сентября <span>онлайн</span></div>
            <div className={styles.Header}>
                <Burger/>

                <div className={styles.Logo}/>

                <div className={styles.Menu}>
                    {
                        menu.map((item, index) => (
                            <a key={index} href={item.link} className={styles.MenuItems}>{t(`header.${item.name}`)}</a>
                        ))
                    }
                    <div className={styles.MenuItems} onClick={() => i18n.changeLanguage(i18n.language === 'fr' ? 'ru' : 'fr')}>
                        {t('header.change-locale')}
                    </div>
                </div>
            </div>
        </>
    );
};

export default withTranslation()(Header);
