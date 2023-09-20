import { Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { Chunk } from "./models/Chunk";

import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { WritingEditor } from "./WritingEditor";


export const Card: FunctionComponent<Chunk> = ({ id, type, title, content, category }) => {
    const [side, setSide] = useState(false);
    const [split, setSplit] = useState(false);

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
    const handleSplitClick = () => {
        setSplit(!split);
    }
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, direction: 'ltr', marginTop: '0.5rem' }}>

            <div className={`card ${side ? "side" : ""} ${split ? "split" : ""}`}>
                <div className="front" style={{ width: "100%", height: "100%" }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, direction: 'rtl', marginTop: '0.5rem' }}>
                        <IconButton aria-label="like" onClick={handleLikeClick}>
                            <ThumbUpIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="flip" onClick={handleFlipClick}>
                            <FlipCameraAndroidIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="split" onClick={handleSplitClick}>
                            <VerticalSplitIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                    </Box>
                    <div style={{ display: "flex", height: "70%", alignItems: "center", justifyContent: "center" }}>
                        {title}
                    </div>
                </div>
                <div className="back">
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, direction: 'rtl', marginTop: '0.5rem' }}>
                        <IconButton aria-label="like" onClick={handleLikeClick}>
                            <ThumbUpIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="flip" onClick={handleFlipClick}>
                            <FlipCameraAndroidIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="split" onClick={handleSplitClick}>
                            <VerticalSplitIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                    </Box>
                    <Typography style={{ whiteSpace: "pre-line", fontSize: "1.2rem", overflow: "auto", height: "450px" }}>
                        {content}
                    </Typography>
                </div>
            </div>
            <div className={`${split ? "split-editor" : "split-editor-hide"}`}>
                <WritingEditor></WritingEditor>
            </div>
        </Box>
    );
}
