import React from 'react';
import classes from './TitleInput.module.css';

const TitleInput = (props) => (
    <div>
        <label>{props.label}</label><br />
        <input
            className={classes.TitleInput}
            type="text"
            onChange={props.questionHandler}
            value={props.value}
            required
        ></input>
    </div>
);

export default TitleInput;