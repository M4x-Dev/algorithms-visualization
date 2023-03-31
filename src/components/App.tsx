import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

const appTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const App = () => {
    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </BrowserRouter>
            </CssBaseline>
        </ThemeProvider>
    );
};

export default App;