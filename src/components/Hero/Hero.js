import React from 'react';
import styles from './Hero.module.scss';
import heroImage from '../../assets/img/bg/hero-position-img.webp';

const Hero = () => {
    return (
        <div className={`container ${styles.hero}`}>
            <h1 className={styles.lead}>Explore thee world of MORROC.</h1>
            <p>
                Free mobile MMO-RPG full of monsters and magic,
                 meet other players and play together!
            </p>

            <div className={styles.img}>
                <img src={heroImage} alt="" />
            </div>
        </div>
    );
};

export default Hero;