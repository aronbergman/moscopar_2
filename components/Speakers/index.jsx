import React from 'react';
import Slider from "react-slick";
import styles from './Speakers.module.scss'
import Square from "./Square";
import anton from '../../public/anton.jpeg'
import katlama from '../../public/katlama.jpeg'
import otran from '../../public/otran.jpeg'
import marselin from '../../public/marselin.jpeg'
import palih from '../../public/palih.jpeg'
import pronin from '../../public/pronin.jpg'
import drobyshevskaya from '../../public/drobyshevskaya.jpg'
import kaminsky from '../../public/kaminsky.jpg'
import orlovaMorozova from '../../public/orlovaMorozova.jpg'


const Speakers = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 10000,
                settings: 'unslick'
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={styles.Speakers} id="speakers">
            <h2 className={styles.Title}>спикеры</h2>

            <Slider {...settings}>
                <div>
                    <div className={styles.Squires}>
                        <div className={styles.Mobile}>
                            <Square photo={katlama} color={'#FF005C'}/>
                            <Square
                                nameFirst={' Кристин '}
                                nameSecond={' Катлама '}
                                description={'профессор Университета Сорбонны, Института общественного здравоохранения и эпидемиологии им. Пьера Луи Пастера, руководитель исследовательской группы по антиретровирусной стратегии Французского национального агентства по исследованию ВИЧ, основатель и президент AFRAVIH, член правления EACS'}
                                arrow={'right'}
                                color={'#FF005C'}
                            />
                        </div>
                        <div className={styles.Mobile}>
                            <Square photo={otran} color={'#002381'}/>
                            <Square
                                nameFirst={' Брижит '}
                                nameSecond={' Отран '}
                                description={'профессор иммунологии в Университетской больнице Питье-Сальпетриер в Париже, Университета Пьера и Марии Кюри, Франция'}
                                arrow={'right'}
                                color={'#002381'}
                                textColor={'white'}
                            />
                        </div>
                        <div className={styles.Mobile}>
                            <Square
                                nameFirst={' Анн-Женевьев '}
                                nameSecond={' Марселин '}
                                description={'профессор медицины в Университете Сорбонны в Париже, Франция, клинический вирусолог в больнице Питье-Сальпетриер'}
                                arrow={'left'}
                                color={'#265CDD'}
                                nameColor={'#00CFFF'}
                                textColor={'white'}
                            />
                            <Square photo={marselin} color={'#00CFFF'}/>
                        </div>
                        <div className={styles.Mobile}>
                            <Square
                                nameFirst={' Роман '}
                                nameSecond={' Палих '}
                                description={'врач отделения инфекционных заболеваний Больницы Питье-Сальпетриер'}
                                arrow={'left'}
                                color={'#00CFFF'}/>
                            <Square photo={palih} color={'#fff'}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.Squires}>
                        <div className={styles.Mobile}>
                            <Square photo={pronin} color={'#FF005C'}/>
                            <Square
                                nameFirst={' Пронин '}
                                nameSecond={' Александр Юрьевич '}
                                description={'главный врач Московского Областного Центра СПИД. главный внештатный специалист Министерства здравоохранения Московской области по проблемам диагностики и лечения ВИЧ-инфекции, к.м.н.'}
                                arrow={'right'}
                                color={'#FF005C'}
                            />
                        </div>
                        <div className={styles.Mobile}>
                            <Square photo={drobyshevskaya} color={'#002381'}/>
                            <Square
                                nameFirst={' Дробышевская '}
                                nameSecond={' Елена Владимировна '}
                                description={'заместитель главного врача по медицинской части Московского Областного Центра СПИД, врач высшей категории'}
                                arrow={'right'}
                                color={'#002381'}
                                textColor={'white'}
                            />
                        </div>
                        <div className={styles.Mobile}>
                            <Square
                                nameFirst={' Орлова-Морозова '}
                                nameSecond={' Елена Александровна '}
                                description={'заведующая амбулаторно-поликлиническим отделением Московского Областного Центра СПИД, к.м.н.'}
                                arrow={'left'}
                                color={'#265CDD'}
                                nameColor={'#00CFFF'}
                                textColor={'white'}
                            />
                            <Square photo={orlovaMorozova} color={'#00CFFF'}/>
                        </div>
                        <div className={styles.Mobile}>
                            <Square
                                nameFirst={' Каминский '}
                                nameSecond={' Григорий Дмитриевич '}
                                description={'руководитель отдела инфекционной патологии НМИЦ ФПИ, врач-инфекционист, доктор медицинских наук'}
                                arrow={'left'}
                                color={'#00CFFF'}/>
                            <Square photo={kaminsky} color={'#fff'}/>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Speakers;
