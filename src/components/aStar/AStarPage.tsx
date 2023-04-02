import * as React from "react";
import { useState } from "react";
import AStarField from "./AStarField";
import { Grid, Slider, Theme, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    selectionModeContainer: {
        display: "flex",
        flexDirection: "row",
        marginTop: "1rem",
        marginBottom: "1rem",
    }
}));

export const SELECTION_MODE_SOURCE = "source";
export const SELECTION_MODE_DESTINATION = "destination";
export const SELECTION_MODE_OBSTACLE = "obstacle";

const AStarPage = () => {

    const classes = useStyles();

    const [displayRows, setDisplayRows] = useState<number>(10);
    const [displayColumns, setDisplayColumns] = useState<number>(10);

    const [selectionMode, setSelectionMode] = useState<string>(SELECTION_MODE_SOURCE);

    return (
        <div>
            <h1>A* Pathfinding Algorithm</h1>
            <div>
                <Grid container spacing={2} alignItems="center">
                    <Grid item md={1}>
                        <p>Rows</p>
                    </Grid>
                    <Grid item md={11}>
                        <Slider defaultValue={10} value={displayRows}
                                min={1} max={40}
                                valueLabelDisplay="auto"
                                onChange={(_, value) => setDisplayRows(value as number)}/>
                    </Grid>
                    <Grid item md={1}>
                        <p>Columns</p>
                    </Grid>
                    <Grid item md={11}>
                        <Slider defaultValue={10} value={displayColumns}
                                min={1} max={40}
                                valueLabelDisplay="auto"
                                onChange={(_, value) => setDisplayColumns(value as number)}/>
                    </Grid>
                </Grid>
                <div className={classes.selectionModeContainer}>
                    <p>Selection Mode: </p>
                    <ToggleButtonGroup
                        sx={{
                            marginLeft: "1rem",
                        }}
                        value={selectionMode}
                        exclusive
                        onChange={(_, newAlignment) => setSelectionMode(newAlignment)}>
                        <ToggleButton value={SELECTION_MODE_SOURCE}>Start</ToggleButton>
                        <ToggleButton value={SELECTION_MODE_DESTINATION}>Target</ToggleButton>
                        <ToggleButton value={SELECTION_MODE_OBSTACLE}>Obstacle</ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>
            <AStarField
                rows={displayRows}
                columns={displayColumns}
                selectionMode={selectionMode}/>
        </div>
    );
};

export default AStarPage;