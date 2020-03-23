import React from 'react';
import classes from './SubmitButton.module.css';

const SubmitButton = (props) => (
    <input
        className={classes.SubmitButton}
        type="submit"
        value={props.children}
        disabled={props.disabled} />
);

export default SubmitButton;