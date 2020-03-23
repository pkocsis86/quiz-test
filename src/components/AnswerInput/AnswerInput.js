import React from 'react';

import classes from './AnswersInput.module.css';

const AnswerInput = (props) => {
    let answerStyle = [classes.AnswersInput];
    if (props.highlight) answerStyle.push(classes.Green);

    return (
        <div className={answerStyle.join(' ')}>
            <input className={classes.Radio} type="radio"
                name={props.name}
                onChange={props.chosenAnswer}
                checked={props.isChosen}
                disabled={props.disabled}
            />
            <p className={classes.AnswerText}>{props.children}</p>
        </div>
    );
};

export default AnswerInput;