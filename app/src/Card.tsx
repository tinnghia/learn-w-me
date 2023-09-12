import { Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { Chunk } from "./models/Chunk";

export const Card: FunctionComponent<Chunk> = ({ id, type, title, content, category }) => {
    const [side, setSide] = useState(false);

    function handleClick() {
        setSide(!side);
        console.log(side);
    }
    return (
        <div>
            <div className="icon-bar">
                <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                <a href="#" className="google"><i className="fa fa-google"></i></a>
                <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                <a href="#" className="youtube"><i className="fa fa-github"></i></a>
            </div>
            <div className={`card ${side ? "side" : ""}`} onClick={handleClick}>
                <div className="front">{title}</div>
                <div className="back">
                    <Typography style={{ whiteSpace: "pre-line", fontSize: "1.2rem" }}>
                        {content}
                    </Typography>
                </div>
            </div>
        </div>
    );
}
