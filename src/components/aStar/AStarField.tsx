import * as React from "react";
import { useEffect, useState } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import AStarNode, { NodeType } from "./AStarNode";
import { SELECTION_MODE_DESTINATION, SELECTION_MODE_SOURCE } from "./AStarPage";

type AStarFieldProps = {
    rows: number;
    columns: number;
    selectionMode: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fieldContainer: {
            display: "flex",
            flexDirection: "column",
        },
        fieldRowContainer: {
            display: "flex",
            flexDirection: "row",
        },
    }),
);

const AStarField = (props: AStarFieldProps) => {

    const classes = useStyles();

    const [typeMap, setTypeMap] = useState<NodeType[][]>(
        Array.from({length: props.columns},
            () => Array.from({length: props.rows}, () => NodeType.Default)));

    useEffect(() => {
        setTypeMap(Array.from({length: props.columns},
            (_, column) => Array.from({length: props.rows},
                (_, row) => {
                    if (column >= typeMap.length || row >= typeMap[column].length) {
                        return NodeType.Default;
                    } else {
                        return typeMap[column][row];
                    }
                })));
    }, [props.columns, props.rows]);

    const _typeFromSelectionMode = (mode: string) => {
        if (mode === SELECTION_MODE_SOURCE) {
            return NodeType.Source;
        } else if (mode === SELECTION_MODE_DESTINATION) {
            return NodeType.Destination;
        } else {
            return NodeType.Obstacle;
        }
    };

    return (
        <div className={classes.fieldContainer}>
            {typeMap.map((arr, row) => (
                <div className={classes.fieldRowContainer}>
                    {arr.map((item, column) => (
                        <AStarNode type={item} onClick={() => {
                            const targetNodeType = _typeFromSelectionMode(props.selectionMode);

                            setTypeMap(typeMap.map((arr, i) => arr.map((item, j) => {
                                if (i === row && j === column) {
                                    if (targetNodeType === NodeType.Obstacle) {
                                        return item === NodeType.Obstacle ? NodeType.Default : NodeType.Obstacle;
                                    } else {
                                        return targetNodeType;
                                    }
                                } else {
                                    if (targetNodeType === NodeType.Obstacle) {
                                        return item;
                                    } else {
                                        return item === targetNodeType ? NodeType.Default : item;
                                    }
                                }
                            })));
                        }}/>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default AStarField;