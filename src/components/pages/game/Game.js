import React, { useState, useEffect } from 'react';
import { Board } from './Board';
import Paper from "@mui/material/Paper";
import { Button, Grid, Typography } from '@mui/material';
import { ChoiceDialog } from '../main/ChoiceDialog';
import { DifficultyLevels } from '../../data/DifficultyLevels';
import { InfoGame } from './InfoGame';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export function Game(props) {
    const [startGame, setStartGame] = useState(false);
    const [countFlags, setCountFlags] = useState(0);
    const {gameData, setGameData} = props;
    const [isOpen, setIsOpen] = useState(true);
    const [time, setTime] = useState(DifficultyLevels[0].minutes);

    const handleClose = (value) => {
        setIsOpen(false);
        setGameData(DifficultyLevels[value]);
        setStartGame(true);
    };

    useEffect ( () => {
        if(countFlags==gameData.mines && countFlags!=0){
            setStartGame(false);
        }
    })
    //при попытке поднять состояние с доской на этот уровень слетают параметры высоты при первом рендере
    //если делать рестарт то либо запоминать предыдущее сотояние объекта либо через новую функцию в useEffect
    const restart = () => {
        setStartGame(true);
        setCountFlags(0);
        
    }

    if(isOpen)
    return (
        <div>
            <ChoiceDialog
                isOpen={isOpen}
                onClose={handleClose}
            />
        </div>
    );
    return (
        <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="90vh"
        spacing={{ xs: 2, md: 3 }} //ПОПРАВИТЬ РАССТОЯНИЕ
        >
            <Grid item xs="auto">
                    {/*<Button 
                        color="secondary"
                        startIcon={<RestartAltIcon/>}
                        onClick={()=> restart()}
                    >
                        Restart
                    </Button>*/}
                    <Paper elevation={3} sx={{ padding: "1rem" }}>
                        <InfoGame
                         mines={gameData.mines}
                         time={time}
                         countFlags={countFlags}
                         startGame={startGame}
                        />
                    <Board 
                        width={gameData.width}
                        height={gameData.height}
                        mines={gameData.mines}
                        setStartGame={setStartGame}
                        setCountFlags={setCountFlags}
                        countFlags={countFlags}
                    />
                </Paper>
            </Grid>
        </Grid>
    );
  }
  