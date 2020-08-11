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
                <title>Azahra Putri Andani's Contacts</title>
            </Head>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        <h1 className={`${styles.text} ${styles.page_title}`}>Contacts</h1>
        <table className={`${styles.table}`}>
            <tr className={`${styles.contact_rows}`}>
                <td className={`${styles.contact_icons_col}`}><img className={`${styles.contact_icons}`} src="/home_icon.png"></img></td>
                <td className={`${styles.text} ${styles.contact_details}`}>Bogor</td>
            </tr>
            <tr className={`${styles.contact_rows}`}>
                <td className={`${styles.contact_icons_col}`}><img className={`${styles.contact_icons}`} src="/email_icon.png"></img></td>
                <td className={`${styles.text} ${styles.contact_details}`}>azahra.andani[at]gmail.com</td>
            </tr>
            <tr className={`${styles.contact_rows}`}>
                <td className={`${styles.contact_icons_col}`}>
                    <a href="https://linkedin.com/in/azahra-andani" target="_blank">
                        <img className={`${styles.contact_icons}`} src="/linkedin_icon.png"></img>
                    </a>
                </td>
                <td className={`${styles.text} ${styles.contact_details}`}>
                    <a className={`${styles.clickable_contact}`} href="https://linkedin.com/in/azahra-andani" target="_blank">
                        linkedin.com/in/azahra-andani
                    </a>
                </td>
            </tr>
            <tr className={`${styles.contact_rows}`}>
                <td className={`${styles.contact_icons_col}`}>
                    <a className={`${styles.clickable_contact}`} href="https://medium.com/@azahra.andani" target="_blank">
                        <img className={`${styles.contact_icons}`} src="/medium_icon.png"></img>
                    </a>
                </td>
                <td className={`${styles.text} ${styles.contact_details}`}>
                    <a className={`${styles.clickable_contact}`} href="https://medium.com/@azahra.andani" target="_blank">
                        medium.com/@azahra.andani
                    </a>
                </td>
            </tr>
            <tr className={`${styles.contact_rows}`}>
                <td className={`${styles.contact_icons_col}`}>
                    <a className={`${styles.clickable_contact}`} href="https://instagram.com/azahraandani" target="_blank">
                        <img className={`${styles.contact_icons}`} src="/instagram_icon.png"></img>
                    </a>
                </td>
                <td className={`${styles.text} ${styles.contact_details}`}>
                    <a className={`${styles.clickable_contact}`} href="https://instagram.com/azahraandani" target="_blank">
                        azahraandani
                    </a>
                </td>
            </tr>
        </table>
        </div>
    )
}
