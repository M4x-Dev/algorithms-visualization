import * as React from "react";
import { useState } from "react";
import {
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar
} from "@mui/material";
import { DashboardRounded, Menu, Route } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

type NavigationProps = {
    window?: () => Window,
    children: React.ReactNode,
};

const Navigation = ({window, children}: NavigationProps) => {
    const navigate = useNavigate();

    const drawerWidth = 240;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar>
                <b>Algorithm Visualization</b>
            </Toolbar>
            <Divider/>
            <List>
                <ListItemButton onClick={() => navigate("/")}>
                    <ListItemIcon>
                        <DashboardRounded/>
                    </ListItemIcon>
                    <ListItemText>
                        Dashboard
                    </ListItemText>
                </ListItemButton>
                <ListItemButton onClick={() => navigate("/a_star")}>
                    <ListItemIcon>
                        <Route/>
                    </ListItemIcon>
                    <ListItemText>
                        A* Pathfinding
                    </ListItemText>
                </ListItemButton>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: "flex"}}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                sx={{
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`},
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: "none"}}}
                    >
                        <Menu/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: {xs: "block", sm: "none"},
                        "& .MuiDrawer-paper": {boxSizing: "border-box", width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: "none", sm: "block"},
                        "& .MuiDrawer-paper": {boxSizing: "border-box", width: drawerWidth},
                    }}
                    open>
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
            >
                <Toolbar/>
                {children}
            </Box>
        </Box>
    );
};

export default Navigation;