import React from 'react';
import styles from './Events.module.scss'
import Event from "./Event";
import { i18n, withTranslation } from "../../i18n";
import Button from "../Button/Button";

const Events = ({ t }) => {

    const timetable = [
        {
            date: t('day1.date'),
            dayOfWeek: t('day1.dayOfWeek'),
            timetable: [
                {
                    time: t('day1.timetable.1.time'),
                    title: t('day1.timetable.1.title')
                },
                {
                    time: t('day1.timetable.2.time'),
                    title: t('day1.timetable.2.title'),
                    talks: [
                        {
                            title: t('day1.timetable.2.talks.1.title'),
                            name: t('day1.timetable.2.talks.1.name'),
                            company: t('day1.timetable.2.talks.1.company')
                        },
                        {
                            title: t('day1.timetable.2.talks.2.title'),
                            name: t('day1.timetable.2.talks.2.name'),
                            company: t('day1.timetable.2.talks.2.company')
                        },
                        {
                            title: t('day1.timetable.2.talks.3.title'),
                            name: t('day1.timetable.2.talks.3.name'),
                            company: t('day1.timetable.2.talks.3.company')
                        },
                        {
                            title: t('day1.timetable.2.talks.4.title'),
                            name: t('day1.timetable.2.talks.4.name'),
                            company: t('day1.timetable.2.talks.4.company')
                        }
                    ]
                },
                {
                    time: t('day1.timetable.3.time'),
                    session: t('day1.timetable.3.session'),
                    moderators: [t('day1.timetable.3.moderators.1'), t('day1.timetable.3.moderators.2')],
                    title: t('day1.timetable.3.title'),
                    talks: [
                        {
                            title: t('day1.timetable.3.talks.1.title'),
                            name: t('day1.timetable.3.talks.1.name')
                        },
                        {
                            title: t('day1.timetable.3.talks.2.title'),
                            name: t('day1.timetable.3.talks.2.name')
                        },
                        {
                            title: t('day1.timetable.3.talks.3.title'),
                            name: t('day1.timetable.3.talks.3.name')
                        },
                        {
                            title: t('day1.timetable.3.talks.4.title'),
                            name: t('day1.timetable.3.talks.4.name')
                        }
                    ]
                },
                {
                    time: t('day1.timetable.4.time'),
                    title: t('day1.timetable.4.title'),
                    talks: [
                        { title: '' }
                    ]
                },
                {
                    time: t('day1.timetable.5.time'),
                    title: t('day1.timetable.5.title'),
                },
                {
                    time: t('day1.timetable.6.time'),
                    session: t('day1.timetable.6.session'),
                    moderators: [t('day1.timetable.6.moderators.1'), t('day1.timetable.6.moderators.2')],
                    title: t('day1.timetable.6.title'),
                    talks: [
                        {
                            title: t('day1.timetable.6.talks.1.title'),
                            name: t('day1.timetable.6.talks.1.name')
                        },
                        {
                            title: t('day1.timetable.6.talks.2.title'),
                            name: t('day1.timetable.6.talks.2.name')
                        },
                        {
                            title: t('day1.timetable.6.talks.3.title'),
                            experience: [
                                {
                                    title: t('day1.timetable.6.talks.3.experience.1.title'),
                                    name: t('day1.timetable.6.talks.3.experience.1.name')
                                },
                                {
                                    title: t('day1.timetable.6.talks.3.experience.2.title'),
                                    name: t('day1.timetable.6.talks.3.experience.2.name')
                                }
                            ]
                        },
                        {
                            title: t('day1.timetable.6.talks.4.title'),
                            experience: [
                                {
                                    title: t('day1.timetable.6.talks.4.experience.1.title'),
                                    name: t('day1.timetable.6.talks.4.experience.1.name')
                                },
                                {
                                    title: t('day1.timetable.6.talks.4.experience.2.title'),
                                    name: t('day1.timetable.6.talks.4.experience.2.name')
                                }
                            ]
                        }
                    ]
                },
                {
                    time: t('day1.timetable.7.time'),
                    title: t('day1.timetable.7.title'),
                    talks: [
                        { title: '' }
                    ]
                }
            ]
        },
        {
            date: t('day2.date'),
            dayOfWeek: t('day2.dayOfWeek'),
            timetable: [
                {
                    time: t('day2.timetable.1.time'),
                    title: t('day2.timetable.1.title')
                },
                {
                    time: t('day2.timetable.2.time'),
                    title: t('day2.timetable.2.title'),
                    session: t('day2.timetable.2.session'),
                    moderators: [t('day2.timetable.2.moderators.1'), t('day2.timetable.2.moderators.2'), t('day2.timetable.2.moderators.3')],
                    talks: [
                        {
                            title: t('day2.timetable.2.talks.1.title'),
                            experience: [
                                {
                                    title: t('day2.timetable.2.talks.1.experience.1.title'),
                                    name: t('day2.timetable.2.talks.1.experience.1.name')
                                },
                                {
                                    title: t('day2.timetable.2.talks.1.experience.2.title'),
                                    name: t('day2.timetable.2.talks.1.experience.2.name')
                                }
                            ]
                        },
                        {
                            title: t('day2.timetable.2.talks.2.title'),
                            name: t('day2.timetable.2.talks.2.name')
                        },
                        {
                            title: t('day2.timetable.2.talks.3.title'),
                            name: t('day2.timetable.2.talks.3.name')
                        }
                    ]
                },
                {
                    time: t('day2.timetable.3.time'),
                    title: t('day2.timetable.3.title'),
                    talks: [{ title: '' }]
                },
                {
                    time: t('day2.timetable.4.time'),
                    title: t('day2.timetable.4.title'),
                },
                {
                    time: t('day2.timetable.5.time'),
                    moderators: [t('day2.timetable.5.moderators.1'), t('day2.timetable.5.moderators.2'), t('day2.timetable.5.moderators.3')],
                    title: t('day2.timetable.5.title'),
                    talks: [
                        {
                            title: null,
                            experience: [
                                {
                                    title: t('day2.timetable.5.talks.1.experience.1.title'),
                                    name: t('day2.timetable.5.talks.1.experience.1.name')
                                }, {
                                    title: t('day2.timetable.5.talks.1.experience.2.title'),
                                    name: t('day2.timetable.5.talks.1.experience.2.name'),
                                    other: t('day2.timetable.5.talks.1.experience.2.other')
                                }
                            ]
                        }
                    ]
                },
                {
                    title: t('day2.timetable.6.title'),
                    time: t('day2.timetable.6.time'),
                    talks: [{ title: '' }]
                },
                {
                    time: t('day2.timetable.7.time'),
                    title: t('day2.timetable.7.title'),
                    talks: [
                        {
                            title: '',
                            name: t('day2.timetable.7.talks.1.name'),
                            company: t('day2.timetable.7.talks.1.company')
                        },
                        {
                            title: '',
                            name: t('day2.timetable.7.talks.2.name'),
                            company: t('day2.timetable.7.talks.2.company')
                        },
                    ]
                }
            ]
        }
    ]

    return (
        <div className={styles.Events} id="schedule">
            <h2 className={styles.Title}>{t('events.title')}</h2>
            <Event events={timetable}/>
            <br/>
            {i18n.language === 'ru' && <Button
                label={t('buttons.events')}
                color="#000"
                link={'https://moscopar.com/ru/moscopar_program.pdf'}
            />}
        </div>
    );
};

export default withTranslation()(Events);
