import React from 'react';
import styles from './../Speakers.module.scss'

const Square = ({ photo, color, nameFirst, nameSecond, description, arrow, textColor, nameColor = undefined }) => {
    return (
        <div className={styles.Square} style={{ backgroundColor: color }}>

            {photo && <div className={styles.Image} style={{ backgroundImage: `url(${photo})` }}/>}
            {nameFirst && <h3 className={styles.Name} style={{ textAlign: arrow, color: nameColor }}             >

                <div style={{background: color}} dangerouslySetInnerHTML={{ __html: nameFirst }}/>

                <svg
                    style={arrow === 'left' ? {right: 0, transform: 'rotate(180deg)'}: {left: 0}}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138 16" fill="none">
                    <path style={{fill: nameColor}} d="M0.792892 7.29289C0.402374 7.68342 0.402374 8.31658 0.792892 8.70711L7.15686 15.0711C7.54738 15.4616 8.18054 15.4616 8.57108 15.0711C8.96159 14.6805 8.96159 14.0474 8.57108 13.6569L2.91422 8L8.57108 2.34315C8.96159 1.95262 8.96159 1.31946 8.57108 0.928932C8.18054 0.538408 7.54738 0.538408 7.15686 0.928932L0.792892 7.29289ZM138 7L1.5 7V9L138 9V7Z" fill="white"/>
                </svg>

            </h3>}

            {nameSecond && <h3 className={styles.NameSecond} style={{ textAlign: arrow, color: nameColor  }}             >
                <div style={{background: color}} dangerouslySetInnerHTML={{ __html: nameSecond }}/>
            </h3>}

            {description && <div
                style={{ textAlign: arrow, color: textColor }}
                className={styles.Description}>{description}</div>}
        </div>
    );
}

export default Square;
