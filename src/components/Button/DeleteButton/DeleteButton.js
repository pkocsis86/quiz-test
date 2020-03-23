import React from 'react';

import classes from './DeleteButton.module.css';

const DeleteButton = (props) => (
    <div className={classes.DeleteArea}>
        <button
            className={classes.DeleteButton}
            onClick={() => props.removeQuiz(props.index)}
        >{props.children}</button>
    </div>
);

export default DeleteButton;