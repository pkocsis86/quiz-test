import React from 'react';
import AnswerInput from '../AnswerInput/AnswerInput';
import SubmitButton from '../Button/SubmitButton/SubmitButton';
import TEXT from '../../assets/Text';
import classes from './GamePresenter.module.css';

const GamePresenter = (props) => {
    let submitButton = (
        <div className={classes.SubmitArea}>
            <SubmitButton disabled={props.answerIndex === undefined}>{TEXT.GAME_SESSION.ANSWER}</SubmitButton>
        </div>
    );
    if (props.quiz.isQuestionAnswered) {
        submitButton = (
            <div className={classes.SubmitAreaEmpty}></div>
        );
    }

    const answers = (
        <form onSubmit={(event) => { event.preventDefault(); props.answerQuiz() }}>
            {props.quiz.answers.map((item, index) => {
                return (<AnswerInput
                    highlight={props.quiz.isQuestionAnswered && item.isAnswerRight}
                    name={props.name}
                    key={index}
                    chosenAnswer={() => props.chosenAnswer(index)}
                    isChosen={props.answerIndex === index || item.isChosen ? true : false}
                    disabled={props.quiz.isQuestionAnswered}
                >{item.answer}</AnswerInput>)
            })}
            {submitButton}
        </form>
    );

    return (
        <div className={classes.GamePresenter}>
            <label className={classes.PresenterTitle}>{props.quiz.question}</label>
            {answers}
        </div>
    );
};

export default GamePresenter;