export const timetables = [
    {
        date: '24 / 06',
        dayOfWeek: 'четверг',
        timetable: [
            {
                time: '13:30',
                title: 'открытие конференции',
                talks: [
                    {
                        title: '',
                        name: 'Александр Пронин',
                        company: 'ГКУЗ МО ЦПБ СПИД'
                    },
                    {
                        title: '',
                        name: 'Кристин Катлама',
                        company: 'Госпиталь Питье-Сальпетриер'
                    },
                    {
                        title: '',
                        name: 'Марк-Антуан Валантин ',
                        company: 'Госпиталь Питье-Сальпетриер'
                    },
                    {
                        title: '',
                        name: 'Алан Бурде ',
                        company: 'APHP International'
                    }
                ]
            },
            {
                time: '14:00&nbsp;— 16:00',
                session: 'сессия 1',
                moderators: ['Елена Орлова-Морозова', 'Марк-Антуан Валантин'],
                title: 'оказание медицинской помощи при ВИЧ-инфекции',
                talks: [
                    {
                        title: 'Новые препараты, новые стратегии лечения',
                        name: 'Кристин Катлама'
                    },
                    {
                        title: 'ВИЧ - инфекция в Московской области: достижения и новые вызовы',
                        name: 'Елена Дробышевская'
                    },
                    {
                        title: 'Клиника для лечения ВИЧ-инфекции: как оптимизировать работу в 2021 году?',
                        name: 'Роланд Тубиана'
                    },
                    {
                        title: 'ВИЧ в уязвимых группах: как достичь каждого? (опыт проекта OPTICARE)',
                        name: 'Спикер уточняется'
                    }
                ]
            },
            {
                time: '15:20 – 16:00',
                title: 'панельная дискуссия',
                talks: [
                    { title: '' }
                ]
            },
            {
                time: '16:00 – 16:15',
                title: 'перерыв',
            },
            {
                time: '16:15 – 19:00',
                session: 'сессия 2',
                moderators: ['Брижит Отран', 'Григорий Каминский'],
                title: 'новая реальность: <br/>    «COVID-19 и ВИЧ»',
                talks: [
                    {
                        title: 'Многоликий SARS-COV-2',
                        name: 'Профессор Винсент Кальвез'
                    },
                    {
                        title: 'COVID-19: иммунный ответ и вакцинация ВИЧ-положительных',
                        name: 'Профессор Брижит Отран'
                    },
                    {
                        title: 'Вакцинация от COVID-19',
                        experience: [
                            {
                                title: 'Опыт России',
                                name: 'Профессор Григорий Каминский'
                            },
                            {
                                title: 'Опыт Франции',
                                name: 'Марк-Антуан Валантин'
                            }
                        ]
                    },
                    {
                        title: 'Параллельные пандемии: взаимное влияние ВИЧ и COVID-19 на медицинскую помощь',
                        experience: [
                            {
                                title: 'Опыт Московской Области',
                                name: 'Елена Дробышевская'
                            },
                            {
                                title: 'Опыт Питье-Сальпетриер',
                                name: 'Роман Палих'
                            }
                        ]
                    }
                ]
            },
            {
                time: '18:15 – 19:00',
                title: 'панельная дискуссия',
                talks: [
                    { title: '' }
                ]
            }
        ]
    },
    {
        date: '25 / 06',
        dayOfWeek: 'пятница',
        timetable: [
            {
                time: '13:30 – 15:00',
                title: 'лабораторные инструменты для улучшения помощи при ВИЧ-инфекции',
                session: 'сессия 3',
                moderators: ['Энн-Женевьев Марселин', 'Наталья Лебедева', 'Александр Пронин'],
                talks: [
                    {
                        title: 'Возможности вирусологической лаборатории: что необходимо в клинической практике?',
                        experience: [
                            {
                                title: 'Опыт Питье-Сальпетриер',
                                name: 'Энн-Женевьев Марселин'
                            },
                            {
                                title: 'Опыт Московской Области',
                                name: 'Игорь Серков'
                            }
                        ]
                    },
                    {
                        title: 'Преимущества измерения концентрации антиретровирусной терапии',
                        name: 'Жиль Петавин'
                    },
                    {
                        title: 'Первичная резистентность ВИЧ у пациентов из Московской Области',
                        name: 'Наталья Лебедева'
                    }
                ]
            },
            {
                time: '14:30 – 15:00',
                title: 'панельная дискуссия',
                talks: [{ title: '' }]
            },
            {
                time: '15:00 – 15:15',
                title: 'перерыв',
            },
            {
                time: '15:15 – 16:00',
                moderators: ['Кристин Катлама', 'Елена Орлова-Морозова'],
                title: 'лечение ВИЧ при вирусологических неудачах',
                talks: [
                    {
                        title: null,
                        experience: [
                            {
                                title: 'Опыт Питье-Сальпетриер',
                                name: 'Марк-Антуан Валантин'
                            }, {
                                title: 'Опыт Московской Области',
                                name: 'Елена Орлова-Морозова',
                                other: 'Клинические примеры'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'панельная дискуссия',
                time: '15:15 – 16:00',
                talks: [{ title: '' }]
            },
            {
                time: '16:00 – 16:30',
                title: 'закрытие конференции',
                talks: [
                    {
                        title: '',
                        name: 'Александр Пронин',
                        company: 'ГКУЗ МО ЦПБ СПИД'
                    },
                    {
                        title: '',
                        name: 'Кристин Катлама',
                        company: 'Госпиталь Питье-Сальпетриер'
                    },
                ]
            }
        ]
    }
]