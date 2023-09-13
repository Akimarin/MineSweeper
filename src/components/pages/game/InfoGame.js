import React, { useState } from 'react';
import Card from "@mui/material/Card";
import { Timer } from '../../data/Timer';
import { Typography } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import Stack from '@mui/material/Stack';

export const InfoGame = (props) => {
    const {mines, time, countFlags, startGame} = props;
    return (
    <Card
        variant="outlined"
        sx={{
        padding: "1rem",
        marginBottom: "1rem",
        bgcolor: "#ffecb3", //перенести потом в theme
        textAlign: "center",
        }}
        >
            
        <Typography variant="h5">
            <Stack  direction="row" alignItems="center" justifyContent="space-between">
                <div>
                    <FlagIcon/> {countFlags}/{mines}
                </div>
                <Timer time={time} startGame={startGame} />
            </Stack>
        </Typography>
            
    </Card>
    );
}