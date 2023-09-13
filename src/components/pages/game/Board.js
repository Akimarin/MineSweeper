import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import { GameCell } from './GameCell';
import { initField } from './CreateFunctions';
import { LClick } from './GameFunctions';

export function Board (props) {
  const {width, height, mines, setStartGame, setCountFlags, countFlags, startGame} = props;
  const [cellsData, setCellsData] = useState(initField(props));

  return (
          <Box
          component="div"
          sx={{
              display: "grid",
              gridTemplateColumns: `repeat(${width}, auto)`,
              gridTemplateRows: `repeat(${height}, auto)`,
            }}
          >
              {cellsData.map((col, i) =>
                col.map((cell, j) => (
                  <GameCell
                    key={`${i}-${j}`}
                    cell={cell}
                    LClick={LClick}
                    i={i}
                    j={j}
                    cellsData={cellsData}
                    setStartGame={setStartGame}
                    setCellsData={setCellsData}
                    setCountFlags={setCountFlags}
                    width={width}
                    height={height}
                    countFlags={countFlags}
                  />
                ))
              )}
          </Box>
        );
}