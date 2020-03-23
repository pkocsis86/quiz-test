import React from 'react';

import QuitButton from '../Button/QuitButton/QuitButton';
import { gameMenu } from '../../containers/containers.util';
import QuizCreator from '../../containers/QuizCreator/QuizCreator';
import QuizPresenter from '../QuizPresenter/QuizPresenter';
import TEXT from '../../assets/Text';
import classes from './QuizSession.module.css';

const QuizSession = (props) => {

    const quizPresenter = (
        <div>
            {props.quiz.map((item, index) =>
                (<QuizPresenter
                    key={index}
                    quiz={item}
                    index={index}
                    removeQuiz={props.removeQuiz}
                ></QuizPresenter>))}
        </div>
    );

    return (
        <div className={classes.QuizSession}>
            <QuitButton
                id={gameMenu.MAIN_MENU}
                click={props.click}
            ></QuitButton>
            <label className={classes.SessionTitle}>{TEXT.QUIZ_SESSION.TITLE}</label>
            <label className={classes.CreatorTitle}>{TEXT.QUIZ_SESSION.CREATED_QUESTIONS}</label>
            {quizPresenter}
            <label className={classes.CreatorTitle}>{TEXT.QUIZ_SESSION.NEW_QUIZ}</label>
            <QuizCreator
                answersCount={props.answersCount}
                addQuiz={props.addQuiz}
            ></QuizCreator>
        </div>
    );
}

export default QuizSession;