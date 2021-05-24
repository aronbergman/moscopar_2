import React from 'react';
import styles from './Header.module.scss'
import { menu } from "../../menu";
import Burger from "./Burger";

const Header = () => {
    return (
        <>
            <div className={styles.Text}>21–22 сентября <span>онлайн</span></div>
            <div className={styles.Header}>
                <Burger/>

                <div className={styles.Logo}/>

                <div className={styles.Menu}>
                    {
                        menu.map((item, index) => (
                            <a key={index} href={item.link} className={styles.MenuItems} dangerouslySetInnerHTML={{__html: item.name}}/>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Header;
