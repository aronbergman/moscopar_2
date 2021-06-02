import React from 'react';
import styles from './Footer.module.scss'
import { menu } from "../../menu";
import { withTranslation } from "../../i18n";

const Footer = ({t}) => {

    return (
        <footer className={styles.Footer}>
            <div className={styles.Container}>
                <div className={styles.Contacts}>
                    <a href="tel:84958492969">+7 (495) 849-29-69</a>
                    <a href="mailto:info@spid.center">info@spid.center</a>
                </div>
                <div className={styles.Menu}>
                    {
                        menu.map(item => (
                            <a href={item.link} className={styles.MenuItems}>{t(`header.${item.name}`)}</a>
                        ))
                    }
                </div>
            </div>
        </footer>
    );
};

export default withTranslation()(Footer);
