import React from 'react';
import styles from './Button.module.scss'

const Button = ({ label, color, submit, link }) => {

    const onClick = () => {
        window.open(link, '_blank')
    }

    return (
        <div style={{display: "flex"}}>
            <button
                onClick={link ? onClick : undefined}
                style={{ backgroundColor: color }}
                className={styles.Button}
                type={submit}>
                {label}
            </button>
        </div>
    );
};

export default Button;
