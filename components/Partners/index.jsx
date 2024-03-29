import React from 'react';
import Slider from "react-slick";
import styles from './Partners.module.scss'
import image1 from '../../public/partners/1.png'
import image2 from '../../public/partners/2.png'
import image3 from '../../public/partners/3.png'
import image4 from '../../public/partners/4.png'
import image5 from '../../public/partners/5.png'
import image6 from '../../public/partners/6.png'
import image7 from '../../public/partners/7.png'
import image8 from '../../public/partners/8.png'
import image9 from '../../public/partners/9.png'
import image10 from '../../public/partners/10.png'
import image11 from '../../public/partners/11.png'
import image12 from '../../public/partners/12.jpeg'
import { withTranslation } from "../../i18n";

const Partners = ({ t }) => {
    const partners = [
        { image: image3, link: "https://www.hivmo.ru/" },
        { image: image9, link: "https://www.aphp.fr/" },
        { image: image6, link: "https://spid.center/" },
        { image: image1, link: "" },
        { image: image4, link: "" },
        { image: image2, link: "" },
        { image: image7, link: "" },
        { image: image5, link: "" },
        { image: image8, link: "" },
        { image: image10, link: "" },
        { image: image11, link: "https://medvestnik.ru/" },
        { image: image12, link: "" },
    ]

    const settings = {
        // autoplay: true,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <div className={styles.Partners} id="partners">
            <h2 className={styles.Title}>{t('partners.title')}</h2>

            <div className={styles.Images}>
                {
                    partners.map((i, index) => (
                        i.link.length ? <a
                                href={i.link}
                                target="_blank"
                                key={index}
                                className={styles.Image}
                                style={{ backgroundImage: `url(${i.image})` }}/> :
                            <div
                                key={index}
                                className={styles.Image}
                                style={{ backgroundImage: `url(${i.image})` }}/>
                    ))}
            </div>

            <div className={styles.ImagesSlider}>
                <Slider {...settings}>
                    {
                        partners.map((i, index) => (
                            <div key={index}>
                                <div className={styles.Image}>
                                    <img src={i.image}/>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>


        </div>
    );
};

export default withTranslation()(Partners);
