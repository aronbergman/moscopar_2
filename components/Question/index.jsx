import React, { useState } from 'react';
import styles from './Question.module.scss'
import Button from "../Button/Button";
import axios from "axios";

const Question = () => {
    const [state, setState] = useState({
        question: '',
        name: '',
        phone: '',
        email: '',
    });

    const handleChange = (event) => {
        setState((state) => ({
            ...state,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('api/feedback', {
            name: state.name,
            email: state.email,
            phone: state.phone,
            message: state.question,
            code: 2
        }, {
            crossDomain: true,
            // headers: {
            //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            //     'Access-Control-Allow-Origin': '*',
            // }
        }).then(r => {
            setState({
                question: '',
                name: '',
                phone: '',
                email: '',
            })
        })
    }

    return (
        <div className={styles.Question} id="question">
            <h2 className={styles.Title}>задать вопрос</h2>

            <form onSubmit={handleSubmit}>
                <div className={styles.Form}>
                    <div className={styles.FormQuestion}>
                        <textarea placeholder="вопрос" name="question" value={state.question}
                                  onChange={handleChange}/>
                    </div>
                    <div className={styles.FormContact}>
                        <input placeholder="ФИО" type="text" name="name" value={state.name} onChange={handleChange}/>
                        <input placeholder="телефон" type="text" name="phone" value={state.phone}
                               onChange={handleChange}/>
                        <input placeholder="e-mail" type="text" name="email" value={state.email}
                               onChange={handleChange}/>

                    </div>
                </div>

                <div className={styles.FormSubmit}>
                    <Button label={"отправить"} color={'#000'} submit/>

                    <div className={styles.CheckBox}>
                        <label className={styles.checkbox}>
                            <input type="checkbox"
                                   defaultChecked={true}
                            />
                            <span/>
                        </label>
                        <p>я согласен с условиями и способами обработки и хранения персональных данных</p>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default Question;
