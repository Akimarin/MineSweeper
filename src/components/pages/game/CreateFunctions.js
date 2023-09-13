import React, { useState } from 'react';

export const initField = (props) => {
    const {height, width, mines} = props;

      const data = [];
          for (let i=0; i<height; i++) {
              data.push([]);
              for (let j=0; j<width; j++) {
                  data[i][j] = {
                      x: i,
                      y: j,
                      isMine: false,
                      neighbors: 0,
                      isEmpty: false,
                      isShow: false,
                      isFlug: false,
                      isQuestion: false,
                      };
              }
          }
        let setMines = generateMines (data, height, width, mines);
        let setNeighbors = getNeighborsMines  ( setMines, height, width);
        return setNeighbors;    
  }

  const generateMines = (data, height, width, mines) => {
    let count = 0;
    while (count < mines) {
      let x = Math.floor(Math.random() * height);
      let y = Math.floor(Math.random() * width);
        if (!data[x][y].isMine){
          data[x][y].isMine = true;
          count++;
        }
    }
    return data;
  }
 
  
  export const findCell = (data, height, width, i, j) => {
    let neighbors = [];
    const indexAround = [
      [-1, 0], //сверху
      [1, 0], //снизу
      [0, -1], //слева
      [0, 1], //справа
      [-1, -1], //верхний левый
      [-1, 1], //верний правый
      [1, 1], //нижний правый
      [1, -1], //нижний левый
    ];
    indexAround.forEach(([x, y]) => {
      const X = i + x;
      const Y = j + y;
      const ruleX =  X >= 0 && X <height;
      const ruleY = Y >= 0 && Y < width;
      if (ruleX && ruleY)
        neighbors.push(data[X][Y]);
      });
    return neighbors;
  }
  
  const getNeighborsMines = (data, height, width) => {
    let newNeighbors = data;
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        let countMines = 0;
        const minesCell = findCell(
          data,
          height,
          width,
          data[i][j].x,
          data[i][j].y,
        );
        minesCell.map((value) => {
            if (value.isMine)
              return countMines++;
        });
        if (countMines==0)
            newNeighbors[i][j].isEmpty = true;
        newNeighbors[i][j].neighbors = countMines;
      }
    }
    return newNeighbors;
  }