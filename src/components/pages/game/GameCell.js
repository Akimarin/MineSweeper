import { Box } from "@mui/material";
import React from "react";
import { getColor } from "../../data/ColorCell";
import { RClick } from "./GameFunctions";

export function GameCell (props) {
    const { i,
            j, 
            LClick, 
            cell,
            cellsData,
            setStartGame,
            width,
            height,
            setCellsData,
            setCountFlags,
            countFlags,
        } = props 

    const getValue = (props) => {
        
        const {isMine, neighbors, isShow, isFlag, isQuestion}= props;
        if (!isShow){
            if  (isFlag) return "🏴";
            if (isQuestion) return "?";
            else return "";
        }
        if (isMine) return "💥";
        
        if (neighbors==0) return "";
        else return neighbors;
    };
    
    const getBgColor = (isShow) => {
    if (!isShow) return "#bac2a5";
    else return "#e5e6ca";

    }
    return (
            <Box 
                component="div" 
                width="30px" 
                height="30px"
                sx={{
                    border: "1px solid grey",
                    textAlign: "center",
                    justifyContent: "center",
                    color: getColor(cell.neighbors, cell.isShow),
                    fontWeight: 700,
                    bgcolor: getBgColor(cell.isShow)
                }}
                onClick={(event) => LClick(event, cellsData, height, width, i, j, {setStartGame, setCellsData})}
                onContextMenu={(event) => RClick(event, cellsData, i, j, countFlags, {setCountFlags, setCellsData})}>
                {getValue(cell)}
            </Box>
    );
}