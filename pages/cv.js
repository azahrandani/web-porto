import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import {StyledMenu, Menu, StyledBurger, Burger, useOnClickOutside} from '../public/burger_menu.js'

export default function Works() {
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();

    return (
        <div className={styles.container}>
            <Head>
                <title>Azahra Putri Andani's CV</title>
            </Head>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        <h1 className={`${styles.text} ${styles.page_title}`}>CV</h1>
        <p className={`${styles.text} ${styles.download_cv_inst}`}>Click the button below if you want to download my CV as PDF</p>
        <div className={styles.download_cv_button_container}>
            <a href='/CV_Azahra.pdf' download="CV_Azahra.pdf">
                <button className={`${styles.see_works_button} ${styles.text}`}>
                    Download CV
                </button>
            </a>   
        </div>
        </div>
    )
}
