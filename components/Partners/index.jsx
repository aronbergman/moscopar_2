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
// import image9 from '../../public/partners/9.png'
// import image10 from '../../public/partners/10.png'

const Partners = () => {
    const partners = [
        {image: image1},
        {image: image2},
        {image: image3},
        {image: image4},
        {image: image5},
        {image: image6},
        {image: image7},
        {image: image8},
        // {image: image9},
        // {image: image10},
    ]

    const settings = {
        autoplay: true,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <div className={styles.Partners} id="partners">
            <h2 className={styles.Title}>партнеры</h2>

            <div className={styles.Images}>
                {
                    partners.map((i, index) => {

                        return(
                            <div
                                key={index}
                                className={styles.Image}
                                style={{backgroundImage: `url(${i.image})`}}/>
                        )
                    })
                }
            </div>

            <div className={styles.ImagesSlider}>
                <Slider {...settings}>
                    {
                        partners.map((i, index) => {

                            return(
                                <div>
                                    <div
                                        key={index}
                                        className={styles.Image}
                                        style={{backgroundImage: `url(${i.image})`}}/>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>


        </div>
    );
};

export default Partners;
