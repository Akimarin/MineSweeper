import { Table, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from '@mui/material';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react';
 
export function Leaderboard (props) {
    const [leaders, setLeaders] = useState();
    const headDesc = [
        {
            name: "Имя",
        },
        {
            name: "Сложнось",
            align: 'center',
        }, 
        {
            name: "Время",
            align: 'right',
        }]
        
        const visibleLead = () => {}
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    {headDesc.map((desc, i) => (
                        <TableCell
                            key={i} 
                            align={desc.align}
                            direction={desc.name[3]}
                        >
                            {desc.name}
                        </TableCell>
                    ))}
                </TableHead>
                <TableRow>
                    <TableCell>
                        
                    </TableCell>
                </TableRow>
            </Table>
        </TableContainer>
    )
}