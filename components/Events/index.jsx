import React from 'react';
import styles from './Events.module.scss'
import Event from "./Event";
import { timetables } from "./timetables";
import { withTranslation } from "../../i18n";

const Events = ({t}) => {

    return (
        <div className={styles.Events} id="schedule">
            <h2 className={styles.Title}>{t('events.title')}</h2>
            <Event events={timetables}/>
        </div>
    );
};

export default withTranslation()(Events);
