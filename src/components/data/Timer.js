import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react"
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FlagIcon from '@mui/icons-material/Flag';

export function Timer (props) {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [start, setStart] = useState(true);
    const { time, startGame } = props;

    const updateTime = (() => {
        if(seconds === 59){
            setSeconds(0);
            setMinutes(minutes+1);
        }
        else (setSeconds(seconds+1))
        return (seconds, minutes);
    })

    useEffect(()=>{
        if(minutes < time && start && startGame) {
            setTimeout(updateTime, 1000);
        }
        else setStart(false);
    }, [seconds, start])

    return (
        <div>
            <AccessTimeFilledIcon/>
            {minutes==0 ? "" :`${minutes}:`.padStart(2, "0") }
            {`${seconds}`.padStart(2, "0")}
        </div>
    );
}