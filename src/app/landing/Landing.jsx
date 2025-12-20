import styles from "./Landing.module.css"

export default function Landing() {
    return (
        <section id={styles.Landing}>
            <div className="container">
                <div className="row">
                    <div className={styles.landing__wrapper}>
                        <div className={styles.landing__content}>
                            <div className={styles.landing__content__title}>
                                Gain more knowledge <div className={styles["remove--tablet"]}>
                                in less time</div>
                            </div>
                            <div className={styles["landing__content--subtitle"]}>
                                Great summaries for busy people,
                                <div className={styles["remove--tablet"]}>
                                individuals who barely have time to read,</div>
                                <div className={styles["remove--tablet"]}>
                                and even people who don't like to read.</div>
                            </div>
                            <button className={styles["btn home__cta--btn"]}>Login</button>
                        </div>
                        <figure className={styles["landing__image--mask"]}>
                            <img src="/assets/landing.png" alt="landing"></img>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}