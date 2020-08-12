import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import {StyledMenu, Menu, StyledBurger, Burger, useOnClickOutside} from '../public/burger_menu.js'

const WorkButton = ({active, number, text, workButtonClickHandle}) => {
    return (
        <button onClick={() => workButtonClickHandle(number)} className={ active ? `${styles.active_work_button} ${styles.text}` : `${styles.passive_work_button} ${styles.text}` }>
            {text}
        </button>
    )
}

const PusilkomDesc = () => {
    return (
        <div>
            <div className={`${styles.text} ${styles.work_desc}`}>
                I did internship at Pusilkom as a <a className={`${styles.highlight}`}>Software Engineer (Backend) </a>from January until February 2019.  Pusilkom is the Center for Computer Science of Universitas Indonesia. It builds and maintains software products related to university information system. Its clients are the faculties in Universitas Indonesia and other universities or institutions in Indonesia.
            </div>
            <div className={`${styles.parent_jobs_image}`}>
                <div className={`${styles.work_jobs}`}>
                    <div className={`${styles.text} ${styles.work_desc}`}>
                    My jobs were:
                    <ul className={`${styles.ul}`}>
                        <li>Adding features for an Enterprise University Information System to manage grades, schedules, and e-learning using <a className={`${styles.highlight}`}>PHP </a> and the framework <a className={`${styles.highlight}`}>Yii</a>.</li>
                        <li>Participating in daily Sprint meeting, weekly Sprint planning, and Sprint review.</li>
                        <li>Showing the demo of the products to the real clients.</li>
                    </ul>
                    </div>
                </div>
                <div className={`${styles.work_image_container}`}>
                    <img className={`${styles.work_image}`} src="pusilkom_pic.png"></img>
                </div>
            </div>
        </div>
    )
}

const WorkDescription = ({number}) => {
    return (
        <div>
            {number === '1' &&
                <PusilkomDesc/>
            }
            {number === '2' &&
                <div className={`${styles.text}`}> It's OVO </div>
            }
            {number === '3' &&
                <div className={`${styles.text}`}> It's ConnectDot </div>
            }
            {number === '4' &&
                <div className={`${styles.text}`}> It's Calorie </div>
            }
            {number === '5' &&
                <div className={`${styles.text}`}> It's Thesis </div>
            }
        </div>
    )
}

const WorksContent = ({ work, setWork }) => {
    const workButtonClickHandle = (number) => {
        setWork(number);
    }

    return (
        <div className={`${styles.work_button_container}`}>
            <WorkButton active={work == '1'} number='1' text='Pusilkom - Intern' workButtonClickHandle={workButtonClickHandle}/>
            <WorkButton active={work == '2'} number='2' text='OVO - Intern' workButtonClickHandle={workButtonClickHandle}/>
            <WorkButton active={work == '3'} number='3' text='ConnectDot - Group Project' workButtonClickHandle={workButtonClickHandle}/>
            <WorkButton active={work == '4'} number='4' text='Calorie - Individual Project' workButtonClickHandle={workButtonClickHandle}/>
            <WorkButton active={work == '5'} number='5' text='Thesis Project' workButtonClickHandle={workButtonClickHandle}/>
            <div className={`${styles.work_desc_outline}`}>
                <WorkDescription number={work} />
            </div>
        </div>
    )
  }

export default function Works() {
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();

    const [work, setWork] = React.useState('1');

    return (
        <div className={styles.container}>
            <Head>
                <title>Azahra Putri Andani's Works</title>
            </Head>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        <h1 className={`${styles.text} ${styles.page_title}`}>Works</h1>
        <WorksContent work={work} setWork={setWork}/>
        </div>
    )
}
