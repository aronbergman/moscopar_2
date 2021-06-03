import Head from 'next/head'
import Router from 'next/router';
import NProgress from 'nprogress';
import getConfig from 'next/config'
import styles from '../styles/Home.module.scss'
import Main from "../components/Main";
import Header from "../components/Header";
import About from "../components/About";
import Speakers from "../components/Speakers";
import { useEffect, useState } from "react";
import Events from "../components/Events";
import Partners from "../components/Partners";
import Banner from "../components/Banner";
import Information from "../components/Information";
import Question from "../components/Question";
import Footer from "../components/Footer";

const { publicRuntimeConfig = {} } = getConfig() || {};

NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });

Router.onRouteChangeStart = () => {
    NProgress.start();
};

Router.onRouteChangeComplete = () => {
    NProgress.done();
};

Router.onRouteChangeError = () => {
    NProgress.done();
};

export default function Home() {
    const [loader, setLoader] = useState(true)
    const [goingUp, setGoingUp] = useState(false)

    useEffect(() => {
        // Page Loader
        setTimeout(() => {
            setLoader(false)
        }, 1500)

        // Tap to Top Scroll
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 500)
                setGoingUp(true);
            else
                setGoingUp(false);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);

    const tapToTop = () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0
        });
    }

    return (
        <div className={styles.container}>
            <Head>

               <link rel="icon" href="/favicon.ico"/>

                <title>MOSCOPAR 2021</title>
                <meta name="description"
                      content="MOSCOPAR – русско-французская научно-практическая конференция. 24–25 июня 2021"/>

                <!-- Google / Search Engine Tags -->
                <meta itemProp="name" content="MOSCOPAR 2021"/>
                <meta itemProp="description"
                      content="MOSCOPAR – русско-французская научно-практическая конференция. 24–25 июня 2021"/>
                <meta itemProp="image" content="https://moscopar.com/ru/share-pic.png"/>

                <!-- Facebook Meta Tags -->
                <meta property="og:url" content="https://moscopar.com/ru"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="MOSCOPAR 2021"/>
                <meta property="og:description"
                      content="MOSCOPAR – русско-французская научно-практическая конференция. 24–25 июня 2021"/>
                <meta property="og:image"
                      content="https://moscopar.com/ru/share-pic.png"/>

                <!-- Twitter Meta Tags -->
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="MOSCOPAR 2021"/>
                <meta name="twitter:description"
                      content="MOSCOPAR – русско-французская научно-практическая конференция. 24–25 июня 2021"/>
                <meta name="twitter:image"
                      content="https://moscopar.com/ru/share-pic.png"/>


                <link rel="stylesheet" type="text/css" charSet="UTF-8"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                <link rel="stylesheet" type="text/css"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
            </Head>

            {loader &&
            <div className={styles.LoaderWrapper}>
                <div className={styles.Loader}>
                    <img src="/logo.png" alt=""/>
                </div>
            </div>}

            <main className={styles.main}>
                <Header/>
                <Main/>
                <About/>
                <Speakers/>
                <Events/>
                <Partners/>
                <Banner/>
                <Information/>
                <Question/>
                <Footer/>
            </main>

            <div className={[styles.TapTop, 'tap-top'].join(' ')}
                 style={goingUp ? { display: 'block' } : { display: 'none' }}
                 onClick={tapToTop}>
                <svg id="Layer_1"
                     style={{ transform: 'rotate(180deg)' }}
                     data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 143.68 181.43">
                    <path className="cls-1"
                          style={{ fill: '#ff005c' }}
                          d="M140.05,91.44a11.44,11.44,0,0,0-16.17.58l-40,43.06V12.37A12.22,12.22,0,0,0,72.59,0a11.9,11.9,0,0,0-9,3.24A12.06,12.06,0,0,0,59.85,12V135.11L19.81,92A11.44,11.44,0,0,0,3.05,107.59l68.79,73.84,68.79-73.84A11.44,11.44,0,0,0,140.05,91.44Z"/>
                </svg>
            </div>

        </div>
    )
}
