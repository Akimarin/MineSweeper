import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { ChoiceDialog } from './ChoiceDialog';
import { descButtons } from '../../data/DescButtons';
import { DifficultyLevels } from '../../data/DifficultyLevels';


export function MainMenu({gameData, setGameData}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = (value) => {
        setIsOpen(false);
        setGameData(DifficultyLevels[value]);
        
    };

    console.log(gameData);
    return (
        <Box height="90vh">
            <Stack spacing={2} justifyContent="center" alignItems="center" height="100%">
                {descButtons.map((descButton, index) => (
                    <Box key={index} width="50%">
                        <Button 
                        fullWidth 
                        variant="contained" 
                        color={descButton.color}
                        href={descButton.url}
                        >
                            {descButton.name}
                        </Button>
                    </Box>
                ))}
            </Stack>
            <ChoiceDialog
            isOpen={isOpen}
            onClose={handleClose}
            gameData={gameData}
            />
        </Box>
    );
  }
  