import React from 'react';
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { descButtons } from './data/DescButtons';

export function Navigation() {
    return (
        <AppBar position="static">
            <Container maxWidth="false">
                <Toolbar>
                    <Typography
                        component="a"
                        href="/"
                        variant="h5"
                        sx={{
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".2rem",
                        textDecoration: "none",
                        color: "inherit",
                        }}
                    >
                        MineSweeper
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                        {descButtons.map((desc) => (
                            <Button
                                key={desc.name}
                                color="inherit"
                                sx={{ my: 2, display: 'block' }}
                                href={desc.url}
                            >
                                {desc.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
  }