import React from 'react';
import styles from './Card.module.scss';
/*
<article className={`col-lg-4 col-md-4 col-sm-6 d-flex flex-column justify-content-end align-items-center 
p-3 g-3 ${styles.card}`}>
<article className={` ${styles.card}`}>
*/
const Card = ({title,content}) => 
        <article className={`col-lg-4 col-md-4 col-sm-6 d-flex flex-column justify-content-end align-items-center p-3  ${styles.card}`}>
          
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.content}>
                {content}
            </p>
        </article>

export default Card;