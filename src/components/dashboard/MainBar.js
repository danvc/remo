import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import remoalogo from "../../img/remoailogo.svg";
import { fade, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import colors from "../../css/defaultColors";

/**
 * Defines the style for this specific component
 */
const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    remoLogo: {
        height: 30
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        color: "white",
        backgroundColor: colors.secondary
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        borderColor: "#1f78d2",
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(27),
            width: "auto"
        }
    },
    textField: {
        width: 500,
        backgroundColor: "#3b3c5a",
        borderRadius: 4,
        "& .MuiFormControl-marginNormal": {
            marginTop: "8 important!"
        },
        "& .MuiInputBase-input": {
            color: "white"
        }
    },
    searchIcon: {
        color: "#c4c4c4"
    },
    grow: {
        flexGrow: 1
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    }
}));

/**
 * Renders the Toolbar for the Application
 */
const MainBar = () => {
    const classes = useStyles();
    
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <img src={remoalogo} alt="Remo.ai" className={classes.remoLogo} />
                <div className={classes.search}>
                    {/* Global Search Field */}
                    <TextField
                        id="outlined-basic"
                        className={classes.textField}
                        margin="none"
                        placeholder={`Search a project or file`}
                        variant="outlined"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                            </InputAdornment>
                            )
                        }}
                    />
                </div>
                <div className={classes.grow} />
                {/* Renders the App Icon for menus */}
                <div className={classes.sectionDesktop}>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                        <IconButton color="inherit">
                    <MenuIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};
        
export default MainBar;
        