import React from 'react';
import styles from './Footer.module.scss'
import { menu } from "../../menu";

const Footer = () => {

    return (
        <footer className={styles.Footer}>
            <div className={styles.Container}>
                <div className={styles.Contacts}>
                    <a href="tel:88001234567">8 (800) 123-45-67</a>
                    <a href="mailto:moscopar@gmail.com">moscopar@gmail.com</a>
                </div>
                <div className={styles.Menu}>
                    {
                        menu.map(item => (
                            <a href={item.link} className={styles.MenuItems} dangerouslySetInnerHTML={{__html: item.name}}/>
                        ))
                    }
                </div>
            </div>
        </footer>
    );
};

export default Footer;
