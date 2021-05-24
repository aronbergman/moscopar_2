import React, { useState } from 'react';
import styles from './Event.module.scss'

const Event = ({ events }) => {
    return (
        <div className={styles.Event}>
            {events.map((event) => {
                const [open, setOpen] = useState(false)
                const cls = [styles.ButtonIcon]
                if (!open) cls.push(styles.ButtonIconOpen)

                return (
                    < >
                        <div className={styles.Header} onClick={() => setOpen(!open)}>
                            <div className={styles.Titles}>
                                <h1 className={styles.Title}>{event.date}</h1>
                                {open && <div className={styles.DayOfWeek}>{event.dayOfWeek}</div>}
                            </div>
                            <div className={styles.Button}>
                                <div className={cls.join(' ')}/>
                                {open ? 'свернуть' : 'развернуть'}
                            </div>
                        </div>
                        {open && <div className={styles.Timetable}>
                            <div className={styles.TimetableRow}>
                                <div className={styles.TimetableTime}>
                                    <p>здесь и далее <br/>время московское</p>
                                </div>
                            </div>
                            {
                                event.timetable.map(event => {

                                    return (
                                        <div className={styles.TimetableRow}>
                                            <div className={styles.TimetableTime}>
                                                <div className={styles.TimeEvent} dangerouslySetInnerHTML={{__html: event.time}}/>
                                                <div className={styles.SessionEvent}>{event.session}</div>
                                                {event.moderators && <div className={styles.ModeratorsEvent}>
                                                    <span>Модераторы:</span>
                                                    {event.moderators.map(i => <span>{i}</span>)}
                                                </div>}

                                            </div>
                                            <div className={styles.TimetableEvent}>
                                                <div className={styles.TitleEvent}
                                                     dangerouslySetInnerHTML={{ __html: event.title }}/>

                                                {event.moderators && <div className={styles.ModeratorsEventMobile}>
                                                    <span>Модераторы:</span>
                                                    {event.moderators.map(i => <span>{i}</span>)}
                                                </div>}

                                                {event.talks && event.talks.map(talk => {
                                                    return (
                                                        <div className={styles.DescriptionEvent}>
                                                            {talk.title && <h3>{talk.title}</h3>}
                                                            {(talk.name || talk.company) && <div>
                                                                {talk.name}
                                                                <span>{talk.company}</span>
                                                            </div>}
                                                            {talk.experience && !talk.title && talk.experience.map(i => {
                                                                return (
                                                                    <div className={styles.Experience}>
                                                                        <p>{i.title}</p>
                                                                        <p className={styles.ExperienceName}>{i.name}</p>
                                                                        <p>{i.other}</p>
                                                                    </div>
                                                                )
                                                            })}

                                                            {talk.experience && talk.title && talk.experience.map(i => {
                                                                return (
                                                                    <div className={styles.ExperienceWithTitle}>
                                                                        <p>{i.title}</p>
                                                                        <p className={styles.ExperienceName}>{i.name}</p>
                                                                        {i.other && <p>{i.other}</p>}
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>}
                    </>
                )
            })}
        </div>
    );
}

export default Event;
