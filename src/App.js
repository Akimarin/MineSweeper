import React, { useEffect, useState } from 'react';
import { ThemeProvider} from '@mui/material/styles';
import { Container} from '@mui/material';
import { Navigation } from './components/Navigation';
import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom';
//import AppRoutes from './AppRoutes';
import { newTheme } from './components/data/ThemeSettings';

import { MainMenu } from "./components/pages/main/MainMenu";
import { Game } from "./components/pages/game/Game";
import { DifficultyLevels } from './components/data/DifficultyLevels';
import { Leaderboard } from './components/pages/leaderboard/Leaderboard'
import { Rules } from './components/pages/rules/Rules';


function App() {
  const [gameData, setGameData] = useState(DifficultyLevels[0]);

  const AppRoutes = [
    {
      path: "/",
      element: <MainMenu gameData={gameData} setGameData={setGameData} />
    },
    {
      path: "/Game",
      element: <Game gameData={gameData} setGameData={setGameData} />
    },
    {
      path: "/Leaders",
      element: <Leaderboard />
    },
    {
      path: "/Rules",
      element: <Rules />
    },
  ];
  
  return (
    <Container maxWidth="false">
      <ThemeProvider theme={newTheme}>
          <Navigation/>
          <BrowserRouter basename={"/"}>
              <Routes>
                {AppRoutes.map((AppRoute, index) => (
                  <Route key={index} element={AppRoute.element} path={AppRoute.path} />
              ))}
              </Routes>
            </BrowserRouter>
      </ThemeProvider>
    </Container>
  );
}

export default App;
