import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import { useNavigate } from "react-router-dom";
import AccountCircle from '@mui/icons-material/AccountCircle';
import ChurchIcon from '@mui/icons-material/Church';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Collapse, Divider, Fab, Link, ListSubheader, Menu, MenuItem } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import * as ActionTypes from "../../../Store/Menu/ActionTypes"
import { useEffect } from 'react';
import { useState } from 'react';
import { ExpandLess, ExpandMore, Settings } from '@mui/icons-material';
import "../css/styles.css"

import { useTheme } from '@mui/styles';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    borderRight: "1px dashed rgba(145, 158, 171, 0.24)",
    zIndex: 0,
    backgroundColor: "transparent",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },

    borderRight: "1px dashed rgba(145, 158, 171, 0.24)",
    zIndex: 0,
    backgroundColor: "transparent"
});

const DrawerHeader = styled('div')(({ theme }) => ({
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),

    backgroundImage: "none",
    display: "flex",
    flexDirection: "column",
    boxSizing: "borderBox",
    flexShrink: 0,
    position: "fixed",
    top: "0px",
    left: "auto",
    right: "0px",
    color: "rgb(255, 255, 255)",
    boxShadow: "none",
    height: "72px",
    zIndex: 1101,
    backdropFilter: "blur(6px)",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    transition: "height 200ms cubicBezier(0.4, 0, 0.2, 1) 0ms",
    width: open ? "calc(100% - 240px)" : "calc(100% - 65px)",
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function BasePage({ children }) {
    const theme = useTheme()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [mode, setMode] = useState(sessionStorage.getItem("theme") ?? "light")
    const { open, fixedMenu, isMobile } = useSelector(state => state?.MenuReducer);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState();
    const [selectedCollapseMenu, setSelectedCollapseMenu] = useState();


    useEffect(() => {
        setSelectedIndex(sessionStorage.getItem("selectedMenu") || 1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDrawerOpen = () => {
        dispatch({ type: ActionTypes.OPEN_MENU })
    };

    const handleDrawerClose = () => {
        dispatch({ type: ActionTypes.CLOSE_MENU })
        setConfigCollapse(false)
        setMasterCollapse(false)
    };
    const menuItemData = [
        { id: '1', name: "Dashboard", to: "/dashboard", icon: <DashboardIcon fontSize='small' /> },
        { id: '3', name: "Users", to: "/users", icon: <ChurchIcon fontSize='small' /> },
        { id: '4', name: "Master", to: "/master", icon: <ChurchIcon fontSize='small' /> },
        { id: '5', name: "Blood Group", to: "/bloodgroup", icon: <ChurchIcon fontSize='small' /> },
        { id: '6', name: "Not Found", to: "/404", icon: <ChurchIcon fontSize='small' /> },
        { id: '7', name: "Org Chart", to: "/org-chart", icon: <DeviceHubIcon fontSize='small' /> },
    ]

    const handleListItemClick = (event, index, url) => {
        navigate(url);
        sessionStorage.setItem("selectedMenu", index);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Popup menu
    const [configCollapse, setConfigCollapse] = useState(false);
    const [masterCollapse, setMasterCollapse] = useState(false);
    const [anchorEl1, setAnchorEl1] = useState(null);
    const openMenu = Boolean(anchorEl1);
    const handleClickCollapseMenu = (event, value) => {
        setSelectedCollapseMenu(value)
        setAnchorEl1(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl1(null);
    };
    const ITEM_HEIGHT = 48;
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <Typography color="primary" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            SPMS
                        </Typography>
                        {(
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="red"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <div style={{
                                        marginTop: "12px",
                                        marginBottom: "12px",
                                        paddingLeft: "20px",
                                        paddingRight: "20px"
                                    }}>
                                        <Typography variant='subtitle2'>User Name</Typography>
                                        <Typography variant='body2'>test@gmail.com</Typography>
                                    </div>
                                    <Divider />
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>

                <IconButton size='small' sx={{
                    borderRadius: "50%",
                    color: "rgb(99, 115, 129)",
                    fontSize: "1.125rem",
                    padding: "0px",
                    top: "32px",
                    position: "fixed",
                    left: open ? "226px" : "52px",
                    backgroundColor: "rgb(255, 255, 255)",
                    zIndex: 1101,
                    border: "1px dashed rgba(145, 158, 171, 0.24)"
                }} onClick={open ? handleDrawerClose : handleDrawerOpen}>
                    {open ? <ChevronLeftIcon sx={{ fontSize: "18px", width: "1em", height: "1em" }} /> : <ChevronRightIcon sx={{ fontSize: "18px", width: "1em", height: "1em" }} />}
                </IconButton>

                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                        SPMS
                    </DrawerHeader>
                    <List
                        subheader={
                            open ? <ListSubheader component="div" id="nested-list-subheader">
                                Nested List Items
                            </ListSubheader> : <Divider />
                        }
                    >
                        {menuItemData.map((menuItem, index) => (
                            <ListItem key={menuItem?.id} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    selected={selectedIndex === menuItem?.name}
                                    onClick={(event) => handleListItemClick(event, menuItem?.name, menuItem?.to)}
                                    sx={{
                                        fontWeight: 600,
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {menuItem?.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={menuItem?.name} sx={{ opacity: open ? 1 : 0, fontWeight: 600 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <List subheader={
                        open ? <ListSubheader component="div" id="nested-list-subheader">
                            Nested List Items
                        </ListSubheader> : <Divider />
                    }>
                        <ListItemButton selected={selectedIndex === 'user'}
                            onClick={(event) => handleListItemClick(event, 'user', "/users")} >
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Users"} />
                        </ListItemButton>
                        {/* Configurations */}
                        <ListItemButton onClick={(event) => !open ? handleClickCollapseMenu(event, "config") : setConfigCollapse(!configCollapse)}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Configurations" />
                            {configCollapse ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={configCollapse} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton selected={selectedIndex === "config1"}
                                    onClick={(event) => handleListItemClick(event, "config1", "/bloodgroup")} sx={{ pl: 4 }}>
                                    <ListItemIcon sx={{ minWidth: "auto", marginRight: "16px" }}>
                                        <span style={{
                                            width: "4px",
                                            height: "4px",
                                            borderRadius: "50%",
                                            backgroundColor: theme?.palette.primary.main,
                                            transition: "transform 200ms cubicBezier(0.4, 0, 0.2, 1) 0ms",
                                            transform: "scale(2)"
                                        }}></span>
                                    </ListItemIcon>
                                    <ListItemText primary="Blood Group" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        {/* Masters */}
                        <ListItemButton onClick={(event) => !open ? handleClickCollapseMenu(event, "master") : setMasterCollapse(!masterCollapse)}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Masters" />
                            {masterCollapse ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={masterCollapse} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton selected={selectedIndex === "master1"}
                                    onClick={(event) => handleListItemClick(event, "master1", "/company")} sx={{ pl: 4, justifyContent: "center" }}>
                                    <ListItemIcon>
                                        <span style={{
                                            width: "4px",
                                            height: "4px",
                                            borderRadius: "50%",
                                            backgroundColor: theme?.palette.primary.main,
                                            transition: "transform 200ms cubicBezier(0.4, 0, 0.2, 1) 0ms",
                                            transform: "scale(2)"
                                        }}></span>
                                    </ListItemIcon>
                                    <ListItemText primary="Comany" />
                                </ListItemButton>

                                <Link href="#" underline='none'>
                                    <ListItemButton
                                        // selected={selectedIndex === "master2"}
                                        onClick={(event) => handleListItemClick(event, "master2", "/department")}
                                        sx={{
                                            pl: 4, justifyContent: "center",
                                            WebkitTapHighlightColor: "transparent",
                                            outline: "0px",
                                            border: "0px",
                                            margin: "0px 0px 4px",
                                            cursor: "pointer",
                                            userSelect: "none",
                                            verticalAlign: "middle",
                                            appearance: "none",
                                            display: "flex",
                                            flexGrow: 1,
                                            justifyContent: "flex-start",
                                            alignItems: "center",
                                            textDecoration: "none",
                                            minWidth: "0px",
                                            boxSizing: "border-box",
                                            textAlign: "left",
                                            // padding: "8px 12px 8px 16px",
                                            // transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                                            position: "relative",
                                            textTransform: "capitalize",
                                            color: selectedIndex === "department" ? "primary" : "grey",
                                            borderRadius: "8px",
                                            height: "36px",
                                            backgroundColor: "transparent"
                                        }}
                                    >
                                        <ListItemIcon>
                                            <span style={{
                                                width: "4px",
                                                height: "4px",
                                                borderRadius: "50%",
                                                backgroundColor: theme?.palette.primary.main,
                                                transition: "transform 200ms cubicBezier(0.4, 0, 0.2, 1) 0ms",
                                                transform: "scale(2)"
                                            }}></span>
                                        </ListItemIcon>
                                        <ListItemText primary="Department" />
                                    </ListItemButton>
                                </Link>
                            </List>
                        </Collapse>
                    </List>
                </Drawer>
                <Menu
                    anchorEl={anchorEl1}
                    id="account-menu"
                    open={openMenu}
                    onClose={handleMenuClose}
                    PaperProps={{
                        elevation: 1,
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                        sx: {
                            borderRadius: "10px",
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            ml: 6.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 15,
                                left: -4.5,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                >
                    {selectedCollapseMenu === "config" &&
                        <>
                            <MenuItem sx={{ fontColor: "black", fontWeight: 600, color: "black" }}>Configurations</MenuItem>
                            <MenuItem selected={selectedIndex === "config1"} onClick={(event) => handleListItemClick(event, "config1", "/bloodgroup")}>Blood Group</MenuItem>
                        </>
                    }
                    {selectedCollapseMenu === "master" &&
                        <>
                            <MenuItem sx={{ fontColor: "black", fontWeight: 600, color: "black" }}>Master</MenuItem>
                            <MenuItem selected={selectedIndex === "master1"} onClick={(event) => handleListItemClick(event, "master1", "/company")}>Company</MenuItem>
                            <MenuItem selected={selectedIndex === "master2"} onClick={(event) => handleListItemClick(event, "master2", "/department")}>Department</MenuItem>
                        </>
                    }
                </Menu>
                <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                    <DrawerHeader />
                    {children}
                    <div><Toaster position='top-right' /></div>
                </Box>

                <Box sx={{
                    right: "24px",
                    bottom: "24px",
                    zIndex: 999,
                    position: "fixed",
                    borderRadius: "50%",
                    boxShadow: "rgb(99 115 129 / 36%) -12px 12px 32px -4px",
                    backdropFilter: "blur(6px)",
                    backgroundColor: "rgba(255, 255, 255, 0.8)"
                }}>
                    <Fab aria-label="settings">
                        <Settings />
                    </Fab>
                </Box>
            </Box>
        </>

    );
}
