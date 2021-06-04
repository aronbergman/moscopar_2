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
import calvez from '../../public/calvez.jpg'
import valantin from '../../public/valantin.jpg'

import serkov from '../../public/serkov.jpg'
import lebedeva from '../../public/lebedeva.jpg'
import { withTranslation } from "../../i18n";


const Speakers = ({ t }) => {
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
            <h2 className={styles.Title}>{t('speakers.title')}</h2>

            <Slider {...settings}>
                <div className={styles.RadiusAndColors}>
                    <div className={styles.Squires}>
                        <div className={styles.Mobile}>
                            <Square photo={katlama} color={'#FF005C'}/>
                            <Square
                                nameFirst={t('speakers.katlama.nameFirst')}
                                nameSecond={t('speakers.katlama.nameSecond')}
                                description={t('speakers.katlama.description')}
                                arrow={'right'}
                                color={'#FF005C'}
                            />
                        </div>
                        <div className={styles.Mobile}>
                            <Square photo={otran} color={'#002381'}/>
                            <Square
                                nameFirst={t('speakers.otran.nameFirst')}
                                nameSecond={t('speakers.otran.nameSecond')}
                                description={t('speakers.otran.description')}
                                arrow={'right'}
                                color={'#002381'}
                                textColor={'white'}
                            />
                        </div>
                        <div className={styles.Mobile}>
                            <Square
                                nameFirst={t('speakers.marselin.nameFirst')}
                                nameSecond={t('speakers.marselin.nameSecond')}
                                description={t('speakers.marselin.description')}
                                arrow={'left'}
                                color={'#265CDD'}
                                nameColor={'#00CFFF'}
                                textColor={'white'}
                            />
                            <Square photo={marselin} color={'#00CFFF'}/>
                        </div>
                        <div className={styles.Mobile}>
                            <Square
                                nameFirst={t('speakers.palih.nameFirst')}
                                nameSecond={t('speakers.palih.nameSecond')}
                                description={t('speakers.palih.description')}
                                arrow={'left'}
                                color={'#00CFFF'}/>
                            <Square photo={palih} color={'#fff'}/>
                        </div>
                    </div>
                </div>

                <div className={styles.RadiusAndColorsSecond}>
                    <div className={styles.Squires}>
                        <div className={styles.Mobile}>
                            <Square photo={calvez} color={'#FF005C'}/>
                            <Square
                                nameFirst={t('speakers.calvez.nameFirst')}
                                nameSecond={t('speakers.calvez.nameSecond')}
                                description={t('speakers.calvez.description')}
                                arrow={'right'}
                                color={'#FF005C'}
                            />
                        </div>
                        <div className={styles.Mobile}>
                            <Square photo={valantin} color={'#002381'}/>
                            <Square
                                nameFirst={t('speakers.valantin.nameFirst')}
                                nameSecond={t('speakers.valantin.nameSecond')}
                                description={t('speakers.valantin.description')}
                                arrow={'right'}
                                color={'#002381'}
                                textColor={'white'}
                            />
                        </div>

                        <div className={styles.Mobile}>
                            <Square
                                nameFirst={t('speakers.pronin.nameFirst')}
                                nameSecond={t('speakers.pronin.nameSecond')}
                                description={t('speakers.pronin.description')}
                                arrow={'left'}
                                color={'#265CDD'}
                                nameColor={'#00CFFF'}
                                textColor={'white'}
                            />
                            <Square photo={pronin} color={'#00CFFF'}/>
                        </div>
                        <div className={styles.Mobile}>
                            <Square
                                nameFirst={t('speakers.drobyshevskaya.nameFirst')}
                                nameSecond={t('speakers.drobyshevskaya.nameSecond')}
                                description={t('speakers.drobyshevskaya.description')}
                                arrow={'left'}
                                color={'#00CFFF'}/>
                            <Square photo={drobyshevskaya} color={'#fff'}/>
                        </div>
                    </div>
                </div>

                <div className={styles.RadiusAndColorsSecond}>
                    <div className={styles.Squires}>
                        <div className={styles.Mobile}>
                            <Square photo={orlovaMorozova} color={'#FF005C'}/>
                            <Square
                                nameFirst={t('speakers.orlovaMorozova.nameFirst')}
                                nameSecond={t('speakers.orlovaMorozova.nameSecond')}
                                description={t('speakers.orlovaMorozova.description')}
                                arrow={'right'}
                                color={'#FF005C'}
                            />
                        </div>
                        <div className={styles.Mobile}>
                            <Square photo={kaminsky} color={'#002381'}/>
                            <Square
                                nameFirst={t('speakers.kaminsky.nameFirst')}
                                nameSecond={t('speakers.kaminsky.nameSecond')}
                                description={t('speakers.kaminsky.description')}
                                arrow={'right'}
                                color={'#002381'}
                                textColor={'white'}
                            />
                        </div>
                        <div className={styles.Mobile}>
                            <Square
                                nameFirst={t('speakers.serkov.nameFirst')}
                                nameSecond={t('speakers.serkov.nameSecond')}
                                description={t('speakers.serkov.description')}
                                arrow={'left'}
                                color={'#265CDD'}
                                nameColor={'#00CFFF'}
                                textColor={'white'}
                            />
                            <Square photo={serkov} color={'#00CFFF'}/>
                        </div>
                        <div className={styles.Mobile}>
                            <Square
                                nameFirst={t('speakers.lebedeva.nameFirst')}
                                nameSecond={t('speakers.lebedeva.nameSecond')}
                                description={t('speakers.lebedeva.description')}
                                arrow={'left'}
                                color={'#00CFFF'}/>
                            <Square photo={lebedeva} color={'#fff'}/>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    );
};

export default withTranslation()(Speakers);
