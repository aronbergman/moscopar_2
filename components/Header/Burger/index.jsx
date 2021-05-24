import React, { useEffect, useState } from 'react';
import { menu } from "../../../menu";

const Burger = () => {
    useEffect(
        () => {
            (function () {
                var body = document.body;
                var burgerMenu = document.getElementsByClassName('b-menu')[0];
                var burgerContain = document.getElementsByClassName('b-container')[0];
                var burgerNav = document.getElementsByClassName('b-nav')[0];
                var tapTop = document.getElementsByClassName('tap-top')[0];
                var burgerLink = document.getElementsByClassName('b-link')

                burgerMenu.addEventListener('click', function toggleClasses() {
                    [body, burgerContain, burgerNav, tapTop].forEach(function (el) {
                        el.classList.toggle('open');
                    });
                }, false);

                [...burgerLink].forEach(function (el) {
                    el.addEventListener('click', function toggleClasses() {
                        [body, burgerContain, burgerNav, tapTop].forEach(function (el) {
                            el.classList.toggle('open');
                        });
                    }, false)
                })
            })();
        }, []
    );

    return (
        <>
            <div className="b-nav">

                {menu.map((item, index) =>
                    <li key={index}><a className="b-link"
                           href={item.link}
                           dangerouslySetInnerHTML={{ __html: item.name }}/>
                    </li>
                )}
            </div>


            <div className="b-container">
                <div className="b-menu">
                    <div className="b-bun b-bun--top"></div>
                    <div className="b-bun b-bun--mid"></div>
                    <div className="b-bun b-bun--bottom"></div>
                </div>

            </div>
        </>
    );
};

export default Burger;
