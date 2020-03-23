import React from 'react';

import classes from './QuestionInput.module.css';

const QuestionInput = (props) => (
    <div className={classes.QuestionInput}>
        <label>{props.label}</label>
        <input className={classes.Input} type="text" onChange={props.answerText} value={props.answer} required />
        <input className={classes.Radio} type="radio" onChange={props.answerRight} checked={props.isAnswerRight} />
    </div>
);

export default QuestionInput;