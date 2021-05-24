import React from 'react';
import styles from './Events.module.scss'
import Event from "./Event";
import { timetables } from "./timetables";

const Events = () => {

    return (
        <div className={styles.Events} id="schedule">
            <h2 className={styles.Title}>программа</h2>
            <Event events={timetables}/>
        </div>
    );
};

export default Events;
