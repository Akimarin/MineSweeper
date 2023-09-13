import React from 'react';
import { findCell } from './CreateFunctions';
import {produce} from "immer"

    const openCell = (data, height, width, i, j) => {
        let emptyCells = findCell(data, height, width, i, j);
        let openedCells = data;
        emptyCells.map (cell => {
            if((cell.isEmpty || !cell.isMine) && !cell.isShow & !cell.isFlag)
                openedCells[cell.x][cell.y].isShow = true;
            if(cell.isEmpty)
            openCell(data, i, j);
        })

        return openedCells;
    }

    export const LClick = (event,  data, height, width, i, j, {setStartGame, setCellsData}) => {
        console.log(data[i][j]);
        event.preventDefault(); 
        if(data[i][j].isFlag || data[i][j].isShow)
            return null;

        let openedCells = produce(data, (draft) => {
            Object.assign(draft[i][j], {isShow: true});
            if(draft[i][j].isEmpty) {
                openCell(draft, height, width, i, j);
            }
        })
        
        if(data[i][j].isMine){
            setCellsData(GameOver( data, height, width));
            return setStartGame(false);
        }
        
        setCellsData(openedCells);

    }

    export const RClick = (event, data, i, j, countFlags, {setCountFlags, setCellsData}) => {
        event.preventDefault();
        console.log("",data[i][j]);
        if (data[i][j].isShow) 
            return null;
        let markered = produce(data, (draft) => {
            if(!draft[i][j].isFlag && !draft[i][j].isQuestion){
                Object.assign(draft[i][j], {isFlag: true});
                //можно передать в countFlags количество мин и просто вычитать
                setCountFlags(countFlags + 1);
            }

            else if(!draft[i][j].isQuestion){
                Object.assign(draft[i][j], {isQuestion: true});
                Object.assign(draft[i][j], {isFlag: false});
                setCountFlags(countFlags - 1);
            }
            else Object.assign(draft[i][j], {isQuestion: false});
        })

        setCellsData( markered);
    }

    const GameOver = (data, height, width) => {
        const openBoard = produce(data, (draft) => {
            for (let i = 0; i < height; i++) {
                for (let j = 0; j < width; j++) {
                    Object.assign(draft[i][j], {isShow: true});
                }
            }
        })
        return openBoard;
    }

 