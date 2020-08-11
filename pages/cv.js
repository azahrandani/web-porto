import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {StyledMenu, Menu, StyledBurger, Burger, useOnClickOutside} from '../public/burger_menu.js'

export default function Works() {
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();

    return (
        <div className={styles.container}>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        <h1 className={`${styles.text} ${styles.page_title}`}>CV</h1>
        </div>
    )
}
