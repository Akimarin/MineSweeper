import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function Rules () {

    return (
        <Box width="100%" height="90vh">
        <Typography variant="h3">
            Правила игры
        </Typography>
        <Typography variant="body1">
            Кликом левой кнопки мыши можно открыть закрытую клетку
            <li>
                Если в клетке мина, то вы проигрываете
            </li>
            <li>
                Если в соседних 8 клетках, граничащих с ней хотя бы углом, есть хоть одна мина, то клетка покажет число мин в этих клетках.
            </li>
            <li>
            Если первые два условия не выполнены, то клетка автоматически открывает все восемь клеток вокруг себя и остаются пустой.
            Так клетки открываться должны, пока не дойдут до границы игрового поля, либо не наткнутся на клетки, под которыми будут цифры.
            </li>
        </Typography>
        <Typography variant="body1">
            На правую кнопку мыши можно поставить клетку и поставить метки: "флажок" или убрать его
        </Typography>
        <Typography variant="body1">
            Если все поля либо открыты, либо помечены флажками, а на счетчике 0, то вы побеждаете.
        </Typography>
        <Typography variant="h4">
            Удачи!
        </Typography>
        

    </Box>
    )
}