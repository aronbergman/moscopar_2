import React from 'react';
import styles from './Button.module.scss'

const Button = ({ label, color, submit }) => {
    return (
        <div style={{display: "flex"}}>
            <button
                style={{ backgroundColor: color }}
                className={styles.Button}
                type={submit}>
                {label}
            </button>
        </div>
    );
};

export default Button;
