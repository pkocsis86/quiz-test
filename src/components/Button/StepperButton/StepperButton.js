import React from 'react';
import classes from './StepperButton.module.css';

const StepperButton = (props) => (
    <div className={classes.StepperArea}>
        <button
            className={classes.StepperButton}
            onClick={props.step}
            disabled={props.disabled}
        >{props.children}</button>
    </div>
);

export default StepperButton;