import React from 'react';
import styles from './Article.module.scss';


/*

{title, subtitle, content, img}


<h2 className={styles.title}>{title}</h2>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <p className={styles.content}>
                {content}
                {
                    img?<img className={styles.img} src={img} alt='' />:''
                } 
                { props}
            </p>
            */
const Article = (props) =>
        <article>
            {console.log(props)}
        </article>;

export default Article;