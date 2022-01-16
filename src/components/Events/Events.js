import React from 'react';
import Card from './Card/Card';
import styles from './Events.module.scss';
import cards from '../../data/cards';

const Events = () => 
        <article>
            <h2>Ongoing events</h2>
            <div className="row">
            {
                cards.map(item=><Card {...item} />)
            }
            </div>
        </article>

export default Events;