import React, { Component } from 'react';

import TitleInput from '../../components/TitleInput/TitleInput';
import QuestionInput from '../../components/QuestionInput/QuestionInput';
import SubmitButton from '../../components/Button/SubmitButton/SubmitButton';
import { createEmptyAnswers } from '../containers.util';
import TEXT from '../../assets/Text';
import classes from './QuizCreator.module.css';

class QuizCreator extends Component {
    state = {
        question: '',
        answers: createEmptyAnswers(this.props.answersCount),
        isQuestionAnswered: false
    };

    questionHandler = (question) => {
        this.setState({ question });
    };

    answersTextHandler = (answerIndex, answer) => {
        const answers = [...this.state.answers];
        answers[answerIndex].answer = answer;
        this.setState({ answers });
    };

    answersRightHandler = (answerIndex, isAnswerRight) => {
        const answers = [...this.state.answers].map((item, index) =>
            answerIndex === index ? { ...item, isAnswerRight } : { ...item, isAnswerRight: false });
        this.setState({ answers });
    };

    quizHandler = (event) => {
        event.preventDefault();
        this.props.addQuiz({ ...this.state });
        this.setState({
            question: '',
            answers: createEmptyAnswers(this.props.answersCount),
            isQuestionAnswered: false
        })
    }

    render() {
        const questionInput = (
            <form onSubmit={(event) => this.quizHandler(event)}>
                <TitleInput
                    label={TEXT.QUIZ_SESSION.QUESTION}
                    questionHandler={(event) => this.questionHandler(event.target.value)}
                    value={this.state.question}
                ></TitleInput>
                <div className={classes.Answers}>
                    <label>{TEXT.QUIZ_SESSION.ANSWERS}</label>
                    {this.state.answers.map((item, index) => (
                        <QuestionInput
                            label={`${index + 1}.`}
                            key={index}
                            answer={item.answer}
                            isAnswerRight={item.isAnswerRight}
                            answerText={(event) => this.answersTextHandler(index, event.target.value)}
                            answerRight={(event) => this.answersRightHandler(index, event.target.checked)}
                        ></QuestionInput>
                    ))}
                </div>
                <div className={classes.SubmitArea}>
                    <SubmitButton>{TEXT.QUIZ_SESSION.ADD}</SubmitButton>
                </div>
            </form>
        );

        return (<div className={classes.QuizCreator}>{questionInput}</div>);
    }
}

export default QuizCreator;