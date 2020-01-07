import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ImageList from "./ImageList";
import ListSubheader from "@material-ui/core/ListSubheader";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import colors from '../../css/defaultColors';

// defines the with of the right panel/drawer
const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: "100%",
            maxWidth: 360,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: colors.primary
        },
        toolbar: theme.mixins.toolbar,
        labels: colors.labels,
        textField: colors.textField,
        textFieldIcon: colors.textFieldIcon,

    })
);

/**
 * Shows up a gallery of images related to a project
 */
const ImageGallery = () => {
    const classes = useStyles();
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={
                {
                    paper: classes.drawerPaper
                }
            }
            anchor="right"
        >
            <div className={classes.toolbar} />
            <List
                dense={true}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader
                        component="div"
                        id="nested-list-subheader"
                        className={classes.labels}>
                        Gallery
                    </ListSubheader>
                }
                className={classes.root}
            >
                <ListItem>
                    <TextField
                        className={classes.textField}
                        fullWidth
                        placeholder="Type to search"
                        variant="outlined"
                        margin="dense"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon className={classes.textFieldIcon} />
                                </InputAdornment>
                            )
                        }}
                    />
                </ListItem>
                {/* Renders a image list content all pictures related to the project */}
                <ImageList />
            </List>
        </Drawer>
    );
};

export default ImageGallery;
