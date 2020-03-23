import React from 'react';

import MainButton from '../Button/MainButton/MainButton';
import { gameMenu } from '../../containers/containers.util';
import TEXT from '../../assets/Text';
import classes from './MainMenu.module.css';

const MainMenu = (props) => (
    <div className={classes.MainMenu}>
        <label className={classes.MainTitle}>{TEXT.MAIN_MENU.TITLE}</label>
        <div className={classes.MainArea}>
            <MainButton
                id={gameMenu.QUIZ_SESSION}
                click={props.click}
            >{TEXT.MAIN_MENU.CREATE_QUIZ}
            </MainButton>
            {props.isGame ? (<MainButton
                id={gameMenu.GAME_SESSION}
                click={props.click}
            >{TEXT.MAIN_MENU.START_GAME}
            </MainButton>) : null}
        </div>
    </div>
);

export default MainMenu;