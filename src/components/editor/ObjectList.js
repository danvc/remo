import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Badge from "@material-ui/core/Badge";
import CategoryIcon from "@material-ui/icons/CategoryOutlined";
import LocalOfferOutlined from "@material-ui/icons/LocalOfferOutlined";
import GreenCheckbox from '../utils/Checkbox';
import colors from '../../css/defaultColors';

// defines the left panel/drawer width
const drawerWidth = 240;

// define the component styles
const useStyles = makeStyles(theme =>
    createStyles({
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
        listItemIcon: colors.listItemIcon,
        listItem: colors.listItem,
        checkBox: colors.checkBox,
        divider: colors.divider,
        listItemText: colors.listItemText,
        badge: colors.badge
    })
);

/**
 * ATTENTION: This component is responsible to render the Object Inspector, which includes everything related to a box or a picture.
 * We could be decomposing each Component and its responsibilities in different files, but, in order to have something cool to 
 * show, all lists of properties are listed here
 * @param {*} props 
 */
const ObjectList = (props) => {
    const classes = useStyles();
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={
                { paper: classes.drawerPaper }
            }
        >
            <div className={classes.toolbar} />
            {/* Renders the OBJECT INSPECT */}
            <List
                dense={true}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader
                        component="div"
                        id="nested-list-subheader"
                        className={classes.labels}>
                        Object Inspector
                    </ListSubheader> 
                }
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

                {props.imageEditor.coordinates.map((coordinate, index) => (
                    <ListItem key={index} className={classes.listItem}>
                        <ListItemIcon className={classes.listItemIcon}>
                            <GreenCheckbox
                                edge="start"
                                checked={coordinate.enabled}
                                tabIndex={-1}
                                onClick={() => {props.disableCoordinate(coordinate)}}
                                disableRipple
                                inputProps={{ "aria-labelledby": "1" }}
                            />
                        </ListItemIcon>
                        <ListItemText primary={`${index + 1} - ${coordinate.id}`} className={classes.listItemText}/>
                    </ListItem>
                ))}
            </List>
            <Divider className={classes.divider} />
            
            {/* Renders the CLASSES */}
            <List
                dense={true}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader
                        component="div"
                        id="nested-list-subheader"
                        className={classes.labels}>
                        Classes
                    </ListSubheader>
                }>
                <ListItem>
                    <TextField
                            className={classes.textField}
                            fullWidth
                            placeholder="Type to search"
                            variant="outlined"
                            margin="dense"
                            InputProps={
                                {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon className={classes.textFieldIcon} />
                                        </InputAdornment>
                                    )
                                }
                            }
                    />
                </ListItem>
                {["Automobiles", "Places", "Unknow"].map((text, index) => (
                    <ListItem button key={text} className={classes.listItem}>
                        <ListItemIcon className={classes.listItemIcon}>
                            <CategoryIcon />
                        </ListItemIcon>
                        <ListItemText primary={text} className={classes.listItemText}/>
                    </ListItem>
                ))}
            </List>
            <Divider className={classes.divider} />

            {/* Renders the TAGS */}
            <List
                dense={true}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader
                        component="div"
                        id="nested-list-subheader"
                        className={classes.labels}
                    >
                        Tags
                    </ListSubheader>
                }
            >
                <ListItem>
                    <TextField
                            className={classes.textField}
                            fullWidth
                            placeholder="Type to search"
                            variant="outlined"
                            margin="dense"
                            InputProps={
                                {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon className={classes.textFieldIcon} />
                                        </InputAdornment>
                                    )
                                }
                            }
                    />
                </ListItem>
                {["motorcycle", "street", "landscape", "tire", "helmet"].map((text, index) => (
                    <ListItem
                        className={classes.listItem}
                        button
                        selected={[0, 3, 4].indexOf(index) >= 0}
                        key={text}>
                        <ListItemIcon className={classes.listItemIcon}>
                            <LocalOfferOutlined />
                        </ListItemIcon>
                        <ListItemText primary={text} className={classes.listItemText}/>
                        <Badge
                            badgeContent={1}
                            color="secondary"
                            classes={{ badge: classes.badge }}
                        />
                    </ListItem>
                )
                )}
            </List>
            <Divider className={classes.divider} />        
        </Drawer>
    );
};

export default ObjectList;
