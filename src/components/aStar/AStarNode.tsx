import * as React from "react";
import { Button } from "@mui/material";

export enum NodeType {
    Default,
    Source,
    Destination,
    Obstacle
}

type AStarNodeProps = {
    type: NodeType;
    onClick: () => void;
};

const AStarNode = ({type, onClick}: AStarNodeProps) => {

    const _colorFromNodeType = (type: NodeType) => {
        switch (type) {
            case NodeType.Source:
                return "green";
            case NodeType.Destination:
                return "red";
            case NodeType.Obstacle:
                return "black";
            default:
                return "";
        }
    };

    return (
        <Button
            sx={{
                width: "0rem",
                height: "4rem",
                margin: "0.25rem",
                backgroundColor: _colorFromNodeType(type)
            }}
            onClick={onClick}
            variant="contained"/>
    );
};

export default AStarNode;