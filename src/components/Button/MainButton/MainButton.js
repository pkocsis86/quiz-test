import React from 'react';

import classes from './MainButton.module.css';

const MainButton = (props) => (
    <div className={classes.MainArea}>
        <button className={classes.MainButton}
            onClick={() => props.click(props.id)}
        >{props.children}</button>
    </div>
);

export default MainButton;