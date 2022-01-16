import React from 'react';
import styles from './Footer.module.scss';
import Icon from '../../../src/assets/img/icon/scroll-top.webp';

const Footer = () => <footer className="d-flex justify-content-between">
    <p>© 2021 MORROC&BEAN made with 💜 by <strong>QCYQAPPS</strong></p>
    <a id="scroll-top" href="#" className="align-self-center"><img src={Icon} alt="" /></a>
    <ul class="d-flex">
         <li className={styles.item}><a href="#">Terms &amp; Condition</a></li>
         <li> | | </li>
         <li className={styles.item}><a href="#">Privacy Policy</a></li>
    </ul>
</footer>

export default Footer;



