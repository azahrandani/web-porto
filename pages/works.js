import styles from '../styles/Home.module.css'
import Carousel from 'react-images'
import Link from 'next/link'
import Head from 'next/head'
import {StyledMenu, Menu, StyledBurger, Burger, useOnClickOutside} from '../public/burger_menu.js'
import ReactCardFlip from 'react-card-flip'

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

const OvoDesc = () => {
    return (
        <div>
            <div className={`${styles.text} ${styles.work_desc}`}>
                I did internship at OVO as a <a className={`${styles.highlight}`}>Software Engineer (Backend)</a> from June until August 2019. PT. Visionet Internasional (OVO) is a multinational financial technology company leading Indonesian payments, rewards, and financial services platform. OVO is accepted in more than 300 cities across Indonesia.
            </div>
            <div className={`${styles.parent_jobs_image}`}>
                <div className={`${styles.work_jobs}`}>
                    <div className={`${styles.text} ${styles.work_desc}`}>
                    My jobs were:
                    <ul className={`${styles.ul}`}>
                        <li>Building a <a className={`${styles.highlight}`}>Java</a> HTTP-calls library from scratch which is used internally for the microservices to communicate. It has features like synchronous and asynchronous calling. It also implements a circuit breaker using <a className={`${styles.highlight}`}>Hystrix</a> library.</li>
                        <li>Applying the library to existing microservices.</li>
                        <li>Implementing <a className={`${styles.highlight}`}>unit test</a> with minimum coverage of 90%.</li>
                        <li>Writing a documentation for the library.</li>
                        <li>Participating in daily Sprint meeting.</li>
                        <li>Presenting the result of the work by the end of the internship in front of the engineers and the CTO.</li>
                    </ul>
                    </div>
                </div>
                <div className={`${styles.work_image_container}`}>
                    <img className={`${styles.work_image}`} src="ovo_pic.png"></img>
                </div>
            </div>
        </div>
    )
}

const ConnectdotDesc = () => {
    return (
        <div>
            <div className={`${styles.text} ${styles.work_desc}`}>
                This is a 4-months group college project from February until May 2019. We built a website application for our client, a design and software house named IDGW, that helps middle-low society to find jobs. In this project, I was the <a className={`${styles.highlight}`}>Software Engineer (mainly Frontend)</a> and the <a className={`${styles.highlight}`}>UI/UX Designer</a>.
            </div>
            <div className={`${styles.parent_jobs_image}`}>
                <div className={`${styles.work_jobs}`}>
                    <div className={`${styles.text} ${styles.work_desc}`}>
                    My jobs were:
                    <ul className={`${styles.ul}`}>
                        <li>Building the mockup and deciding design guidelines by using <a className={`${styles.highlight}`}>Figma</a>.</li>
                        <li>Building the components and pages using <a className={`${styles.highlight}`}>React</a> and the base SCSS files according to the design guidelines.</li>
                        <li>Doing a little bit of backend jobs using <a className={`${styles.highlight}`}>Python’s Django</a>.</li>
                        <li>Implementing <a className={`${styles.highlight}`}>TDD</a> with minimum coverage of 95%.</li>
                        <li>Participating in Sprint meeting twice a week and Sprint planning & review once in two weeks.</li>
                        <li>Showing the demo of the products to the client.</li>
                    </ul>
                    </div>
                </div>
                <div className={`${styles.work_image_container}`}>
                    <img className={`${styles.work_image}`} src="connectdot_pic.png"></img>
                    <div>
                        <a href="https://youtu.be/VwMH2Lhsaa4" target="_blank">
                            <button className={`${styles.watch_demo_button} ${styles.text} ${styles.connectdot_button_1}`}>Watch Demo</button>
                        </a>
                        <a href="https://www.figma.com/file/EujvFqyVtZT7aXAnsyutUa4d/Mockup-Connectdot?node-id=53:695" target="_blank">
                            <button className={`${styles.watch_demo_button} ${styles.text} ${styles.connectdot_button_2}`}>See Mockup</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const calorieImages = [{source: 'calorie_1.png'}, {source: 'calorie_2.png'}, {source: 'calorie_3.png'}, {source: 'calorie_4.png'}, {source: 'calorie_5.png'}, {source: 'calorie_6.png'}, {source: 'calorie_7.png'}, {source: 'calorie_8.png'}, {source: 'calorie_9.png'}, {source: 'calorie_10.png'}, {source: 'calorie_11.png'}]

const CalorieDesc = () => {
    return (
        <div>
            <div className={`${styles.text} ${styles.work_desc}`}>
                This is a 4-months individual college project for my Mobile Development class which I did on September until December 2019. It is an <a className={`${styles.highlight}`}>Android application</a> which can be used to calculate BMI and help users to plan food menu daily according to their calories need.
            </div>
            <div className={`${styles.parent_jobs_image}`}>
                <div className={`${styles.work_jobs}`}>
                    <div className={`${styles.text} ${styles.work_desc}`}>
                    It has features like:
                    <ul className={`${styles.ul}`}>
                        <li>Calculating BMR and BMI.</li>
                        <li>Providing a list of food menu and its calories for users to pick as their daily menu.</li>
                        <li>Saving the food menu to the calendar and remind users about their menu for the day via notifications.</li>
                        <li>Providing countdown timer to accompany users to exercise and inform them how many calories have been burned afterwards.</li>
                    </ul>
                    <div className={`${styles.jobs_calorie}`}>
                        My jobs were:
                        <ul className={`${styles.ul}`}>
                            <li>Building the mockup by using <a className={`${styles.highlight}`}>Figma</a>.</li>
                            <li>Building the app using <a className={`${styles.highlight}`}>Java’s Android SDK</a> and <a className={`${styles.highlight}`}>Android Studio</a>.</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className={`${styles.work_image_container} ${styles.calorie_right_container}`}>
                    <a className={`${styles.text} ${styles.work_desc} ${styles.highlight}`}>Swipe for next pict</a>
                    <div className={`${styles.calorie_images_container}`}>
                        <Carousel views={calorieImages}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ThesisDesc = () => {
    return (
        <div>
            <div className={`${styles.text} ${styles.work_desc}`}>
                My thesis project is titled “Mapping The Spread of Diseases in Indonesia using News and Twitter Data”. I made an automation process to map the spread of communicable diseases in Indonesia, including Covid-19, from news and tweets data using <a className={`${styles.highlight}`}>machine learning</a>, <a className={`${styles.highlight}`}>rule-based</a>, and <a className={`${styles.highlight}`}>dictionary-based</a> approach. The map is then presented on a website and is available on <a className={`${styles.credits_link}`} href="https://azahrandani.github.io/disease-mapping/" target="_blank">bit.ly/peta-skripsi-zahra</a>.
            </div>
            <div className={`${styles.parent_jobs_image}`}>
                <div className={`${styles.work_jobs}`}>
                    <div className={`${styles.text} ${styles.work_desc}`}>
                    My jobs were:
                    <ul className={`${styles.ul}`}>
                        <li>Extracting news data from 11 news sites in Indonesia and twitter data using Twitter API.</li>
                        <li>Cleaning the data.</li>
                        <li>Labelling the data.</li>
                        <li>Performing <a className={`${styles.highlight}`}>classification</a> to differentiate which data consists of disease-related cases using <a className={`${styles.highlight}`}>Multinomial Naive Bayes</a>, <a className={`${styles.highlight}`}>Logistic Regression</a>, and <a className={`${styles.highlight}`}>Extreme Gradient Boosting</a>.</li>
                        <li>Performing <a className={`${styles.highlight}`}>classification</a> to group the data according to the types of disease using <a className={`${styles.highlight}`}>Support Vector Machine</a> and <a className={`${styles.highlight}`}>Word2Vec</a>.</li>
                        <li>Performing <a className={`${styles.highlight}`}>classification</a> to differentiate which data consists of disease-related locations using <a className={`${styles.highlight}`}>Support Vector Machine</a>.</li>
                        <li>Designing a <a className={`${styles.highlight}`}>rule-based</a> and <a className={`${styles.highlight}`}>dictionary-based</a> approach to identify disease locations.</li>
                        <li>Presenting the result on an online map on top of <a className={`${styles.highlight}`}>React</a>.</li>
                    </ul>
                    </div>
                </div>
                <div className={`${styles.work_image_container}`}>
                    <img className={`${styles.work_image}`} src="thesis_pic.png"></img>
                    <a href="https://azahrandani.github.io/disease-mapping" target="_blank">
                        <button className={`${styles.watch_demo_button} ${styles.text}`}>Show me!</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

const ExerciseCard = ({image, title, description, link}) => {
    const [isFlipped, setIsFlipped] = React.useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }
    return (
        <div className={`${styles.exercise_card}`}>
            <ReactCardFlip className={`${styles.front_back_card}`} isFlipped={isFlipped} flipDirection="horizontal" cardZIndex="-5">
                <div>
                    <button className={`${styles.flip_button}`} onClick={handleClick}>
                        <img className={`${styles.exercise_img}`} src={image}></img>
                        <p className={`${styles.exercise_text}`}>{title}</p>
                    </button>
                </div>
                <div>
                    <button className={`${styles.flip_button}`} onClick={handleClick}>
                        <p className={`${styles.exercise_text}`}>{description}</p>
                        <button className={`${styles.see_result_button} ${styles.exercise_text}`}><a href={link} target="_blank">See Result</a></button>
                    </button>
                </div>
            </ReactCardFlip>
        </div>
    )
}

const ExerciseDesc = () => {
    return (
        <div>
            <div className={`${styles.text} ${styles.work_desc}`}>
                These are just exercises that I did on my current free time to get my hands dirty on JavaScript. It is a <a className={`${styles.highlight}`}>Vanilla Javascript</a> Course that is given by John Smilga from <a className={`${styles.credits_link}`} href="https://youtu.be/3PHXvlpOkf4" target="_blank">FreeCodeCamp</a>. John has provided a base code for the HTML and CSS, so I only focused on finishing the HTML and doing the logic on JavaScript. So far, I have finished 3 projects on the course.
            </div>
            <div className={`${styles.parent_jobs_image}`}>
                <div className={`${styles.exercise_cards_container}`}>
                    <ExerciseCard image="exercise_1.png" title="Color Flipper" description="This page has a button to change the background color of the body in two ways. First, from a pre-defined list of color. Second, by randomly generating hex value." link="https://azahra-color-flipper.netlify.app/"/>
                    <ExerciseCard image="exercise_2.png" title="Counter" description="This is a simple counter that increments, decrements, and resets the value and changes the text color according to the value." link="https://azahra-counter.netlify.app/"/>
                    <ExerciseCard image="exercise_3.png" title="Reviews" description="This page shows reviews from a list and navigates through them by previous, next, and 'surprise me' buttons that will show random review from the list." link="https://azahra-reviews.netlify.app/"/>
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
                <OvoDesc/>
            }
            {number === '3' &&
                <ConnectdotDesc/>
            }
            {number === '4' &&
                <CalorieDesc/>
            }
            {number === '5' &&
                <ThesisDesc/>
            }
            {number === '6' &&
                <ExerciseDesc/>
            }
        </div>
    )
}

const WorksContent = ({ work, setWork }) => {
    const workButtonClickHandle = (number) => {
        setWork(number);
    }

    return (
        <div className={`${styles.works_container}`}>
            <div className={`${styles.work_button_container}`}>
                <WorkButton active={work == '1'} number='1' text='Pusilkom - Intern' workButtonClickHandle={workButtonClickHandle}/>
                <WorkButton active={work == '2'} number='2' text='OVO - Intern' workButtonClickHandle={workButtonClickHandle}/>
                <WorkButton active={work == '3'} number='3' text='ConnectDot - Group Project' workButtonClickHandle={workButtonClickHandle}/>
                <WorkButton active={work == '4'} number='4' text='Calorie - Individual Project' workButtonClickHandle={workButtonClickHandle}/>
                <WorkButton active={work == '5'} number='5' text='Thesis Project' workButtonClickHandle={workButtonClickHandle}/>
                <WorkButton active={work == '6'} number='6' text='Exercises' workButtonClickHandle={workButtonClickHandle}/>
            </div>
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
