import React from 'react';
import TEXT from '../../../assets/Text';
import classes from './QuitButton.module.css';

const QuitButton = (props) => (
    <div className={classes.QuitArea}>
        <button
            className={classes.QuitButton}
            onClick={() => props.click(props.id)}
        >{TEXT.QUIT}</button>
    </div>
);

export default QuitButton;