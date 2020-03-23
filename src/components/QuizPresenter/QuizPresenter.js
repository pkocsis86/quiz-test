import React from 'react';

import DeleteButton from '../Button/DeleteButton/DeleteButton';
import TEXT from '../../assets/Text';
import classes from './QuizPresenter.module.css';

const QuizPresenter = (props) => {
    const answers = (
        <div>
            {props.quiz.answers.map((item, index) => {
                let answerStyle = [classes.Answer];
                if (item.isAnswerRight) answerStyle.push(classes.Right);
                else answerStyle.push(classes.Wrong);
                return (<p className={answerStyle.join(' ')} key={index}>{`${item.answer}`}</p>)
            })}
        </div>
    );

    return (
        <div className={classes.QuizPresenter}>
            <label className={classes.PresenterTitle}>{props.quiz.question}</label>
            {answers}
            <DeleteButton
                index={props.index}
                removeQuiz={props.removeQuiz}
            >{TEXT.QUIZ_SESSION.DELETE}</DeleteButton>
        </div>
    );
};

export default QuizPresenter;