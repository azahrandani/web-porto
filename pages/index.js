import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import {StyledMenu, Menu, StyledBurger, Burger, useOnClickOutside} from '../public/burger_menu.js'

export default function Home() {

  const [open, setOpen] = React.useState(false);
  const node = React.useRef();  

  return (
    <div className={styles.container}>
      <Head>
        <title>Azahra Putri Andani's Page</title>
      </Head>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <h1 className={`${styles.text} ${styles.my_name}`}>Azahra Putri Andani</h1>
      <p className={`${styles.text} ${styles.short_desc}`}>A fresh graduate of Computer Science from Universitas Indonesia.</p>
      <p className={`${styles.text} ${styles.short_desc}`}>I want to build impactful products through my lines of codes.</p>
      <div className={styles.see_works_container}>
        <Link href="/works">
          <button className={`${styles.see_works_button} ${styles.text}`}>
            See My Works
          </button>
        </Link>
      </div>
    </div>
  )
}
