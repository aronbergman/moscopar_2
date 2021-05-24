import React from 'react';
import styles from './Main.module.scss'
import Button from "./../Button/Button";

const Main = () => {
    return (
        <div className={styles.Main}>
            <div className={styles.Titles}>
                <h2 className={styles.Description}>24–25 июня <span>онлайн</span></h2>
                <h1 className={styles.Title}>российско-французская <br/>
                    научно-практическая <br/>
                    конференция</h1>
                <Button
                    label="Регистрация"
                    color="#000"
                />
            </div>

            <div className={styles.Image}/>
        </div>
    );
};

export default Main;
