import { Typography } from "@mui/material";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { Chunk } from "./models/Chunk";

import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

export const Card: FunctionComponent<Chunk> = ({ id, type, title, content, category }) => {
    const [side, setSide] = useState(false);

    const handleClick = () => {
        if (side) return;
        setSide(!side);
    }
    const handleFlipClick = () => {
        setSide(!side);
    }
    const handleLikeClick = (event: any) => {
        event.stopPropagation();
    }
    return (
        <div>

            <div className={`card ${side ? "side" : ""}`} onClick={handleClick}>
                <div className="front">
                    {title}
                </div>
                <div className="back">
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, direction: 'rtl', marginTop: '0.5rem' }}>
                        <IconButton aria-label="like" onClick={handleLikeClick}>
                            <ThumbUpIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="flip" onClick={handleFlipClick}>
                            <FlipCameraAndroidIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                    </Box>
                    <Typography style={{ whiteSpace: "pre-line", fontSize: "1.2rem", overflow: "auto", height: "450px" }}>
                        {content}
                    </Typography>
                </div>
            </div>
        </div>
    );
}
