import React  from 'react';
import styles from './Video.module.scss'
import { withTranslation } from "../../i18n";

const Video = ({ t }) => {
    return (
        <div className={styles.Speakers} id="video">
            <h2 className={styles.Title}>{t('video.title')}</h2>

            <div className={styles.Videos}>
                <iframe
                    width="980"
                    height="500"
                    src={`https://www.youtube.com/embed/czUqdXRa638`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />

                <iframe
                    width="980"
                    height="500"
                    src={`https://www.youtube.com/embed/oUYbnZofrzA`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default withTranslation()(Video);
