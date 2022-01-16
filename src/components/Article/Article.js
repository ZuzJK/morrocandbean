import React from 'react';
import styles from './Article.module.scss';
            
const Article = ({title, subtitle, content, img}) =>
        <article>  
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <p className={styles.content}>
                {content}
                {
                    img?<img className={styles.img} src={img} alt='' />:''
                } 
            </p>
        </article>;

export default Article;