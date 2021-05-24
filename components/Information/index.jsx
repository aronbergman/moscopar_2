import React, { useState } from 'react';
import styles from './Information.module.scss'
import image1 from './../../public/one.png'
import image2 from './../../public/two.png'
import Button from "../Button/Button";

const Information = () => {
    const [open, setOpen] = useState(false)
    const cls = [styles.ButtonIcon]
    if (!open) cls.push(styles.ButtonIconOpen)
    const items = [
        {
            title: 'зарегистри&shy;руйтесь',
            image: image1,
            description: 'Регистрация по ссылке на нашем сайте или с помощью рассылки, которая придет Вам на почту.\n' +
                'После регистрации Вам направят письмо с ссылкой на трансляцию и подробной программой мероприятия.'
        },
        {
            title: 'проверьте подключение',
            image: image2,
            description: 'Рекомендуем для просмотра конференции использовать браузеры Google Chrome или Opera.\n' +
                'Желательно иметь качественное соединение с сетью Интернет и релевантную скорость доступа\n' +
                '(не менее 20 мб/сек).'
        }
    ]

    return (
        <div className={styles.Information} id="information">
            <h2 className={styles.Title}>информация <br/>для участников</h2>

            <div className={styles.InformationRow}>
                <div className={styles.Header} onClick={() => setOpen(!open)}>
                    <div className={styles.Titles}>
                        <h1 className={styles.Title}>как принять участие</h1>
                    </div>
                    <div className={styles.Button}>
                        <div className={cls.join(' ')}/>
                        {open ? 'свернуть' : 'развернуть'}
                    </div>
                </div>
                {open && <div>
                    <div className={styles.Items}>
                        {items.map(i => (
                            <div className={styles.Item}>
                                <div className={styles.Image} style={{ backgroundImage: `url(${i.image})` }}/>
                                <div className={styles.Text}>
                                    <div className={styles.Title} dangerouslySetInnerHTML={{__html: i.title}}/>
                                    <div className={styles.Description}>{i.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button label={"регистрация"} color={'#FF005C'}/>
                </div>}
            </div>


        </div>
    );
};

export default Information;
