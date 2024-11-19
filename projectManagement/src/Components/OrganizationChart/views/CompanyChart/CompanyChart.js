import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import _ from "lodash";
import clsx from "clsx";
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import organization from "./org.json";
import { Avatar, Badge, Box, Card, CardContent, CardHeader, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        // background: "white",
        // display: "inline-block",
        // borderRadius: 16,
        // padding: "10px"

        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        display: "inline-flex"
    },
    expand: {
        transform: "rotate(0deg)",
        marginTop: -10,
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.short
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    avatar: {
        backgroundColor: "#ECECF4"
    }
}));

function Organization({ org, onCollapse, collapsed }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    let backgroundColor = "white";
    return (
        <Card
            variant="outlined"
            className={classes.root}
            style={{ backgroundColor }}
        >
            <CardHeader
                avatar={
                    <Tooltip
                        title={`${_.size(
                            org.organizationChildRelationship
                        )} Sub Profile, ${_.size(org.account)} Sub Account`}
                        arrow
                    >
                        <Badge
                            style={{ cursor: "pointer" }}
                            color="secondary"
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right"
                            }}
                            showZero
                            invisible={!collapsed}
                            overlap="circular"
                            badgeContent={_.size(org.organizationChildRelationship)}
                            onClick={onCollapse}
                        >
                            <Avatar className={classes.avatar}>
                                <BusinessIcon color="primary" />
                            </Avatar>
                        </Badge>
                    </Tooltip>
                }
                title={<Typography variant="subtitle2">{org.tradingName}</Typography>}
                action={
                    <IconButton size="small" onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                }
            />

            <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleClose}>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <BusinessIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Add Sub Profile" />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <AccountBalanceIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Add Sub Account" />
                </MenuItem>
            </Menu>
            <IconButton
                size="small"
                onClick={onCollapse}
            // className={clsx(classes.expand, {
            //     [classes.expandOpen]: !collapsed
            // })}
            >
                <ExpandMoreIcon />
            </IconButton>
        </Card>
    );
}
function Account({ a }) {
    const classes = useStyles();

    const opacity = 1;
    return (
        <Card
            variant="outlined"
            className={classes.root}
            style={{ cursor: "pointer", opacity }}
        >
            <CardHeader
                avatar={
                    <Avatar className={classes.avatar}>
                        <AccountBalanceIcon color="primary" fontSize="small" />
                    </Avatar>
                }
                title={<Typography variant="subtitle2">{a.name}</Typography>}
            />
        </Card>
    );
}
function Product({ p }) {
    const classes = useStyles();
    return (
        <Card variant="outlined" className={classes.root}>
            <CardContent>
                <Typography variant="subtitle2">{p.name}</Typography>
            </CardContent>
        </Card>
    );
}
function Node({ o, parent }) {
    const [collapsed, setCollapsed] = React.useState(o.collapsed);
    const handleCollapse = () => {
        setCollapsed(!collapsed);
    };
    React.useEffect(() => {
        o.collapsed = collapsed;
    });
    const T = parent
        ? TreeNode
        : (props) => (
            <Tree
                {...props}
                lineWidth={"2px"}
                lineColor={"#bbc"}
                lineBorderRadius={"12px"}
            >
                {props.children}
            </Tree>
        );
    return collapsed ? (
        <T
            label={
                <Organization
                    org={o}
                    onCollapse={handleCollapse}
                    collapsed={collapsed}
                />
            }
        />
    ) : (
        <T
            label={
                <Organization
                    org={o}
                    onCollapse={handleCollapse}
                    collapsed={collapsed}
                />
            }
        >
            {_.map(o.account, (a, index) => {
                console.log(a);
                return (
                    <TreeNode key={index} label={<Account a={a} />}>
                        <TreeNode label={<Product p={a.product} />} />
                    </TreeNode>
                )
            })}
            {_.map(o.organizationChildRelationship, (c, index) => (
                <Node key={index} o={c} parent={o} />
            ))}
        </T>
    );
}

export default function CompanyChart(props) {
    console.log(organization);
    return (
        <Box bgcolor="background" padding={4} height="80vh">
            <Node o={organization} />
        </Box>
    );
}
