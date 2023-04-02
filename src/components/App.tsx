import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AStarPage from "./aStar/AStarPage";
import Navigation from "./Navigation";

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
                    <Navigation>
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/a_star" element={<AStarPage/>}/>
                        </Routes>
                    </Navigation>
                </BrowserRouter>
            </CssBaseline>
        </ThemeProvider>
    );
};

export default App;