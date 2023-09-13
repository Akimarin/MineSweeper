import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { DialogContent } from '@mui/material';
import { DifficultyLevels } from '../../data/DifficultyLevels';

export function ChoiceDialog(props) {
    const { onClose, gameData, isOpen, setStartGame } = props;

      const handleChoice = (value) => {
        onClose(value);
      };

    return (
    <Dialog open={isOpen}>
        <DialogTitle>Пожалуйста, выберите уровень сложности</DialogTitle>
        <DialogContent>
                <Stack spacing={2} alignItems="center" width="100%">
                    {DifficultyLevels.map((DifficultyLevel, i) => (
                        <Box key={DifficultyLevel.name}  width="50%" >
                            <Button 
                            fullWidth 
                            variant="contained" 
                            color="primary"
                            onClick={()=>handleChoice(i)}
                            >
                                {DifficultyLevel.name}
                            </Button>
                        </Box>
                    ))}
                </Stack>
        </DialogContent>
    </Dialog>
    );
}