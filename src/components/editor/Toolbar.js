import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CropFree from '@material-ui/icons/CropFree';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ZoomIn from '@material-ui/icons/ZoomIn';
import ZoomOut from '@material-ui/icons/ZoomOut';
import Grid from '@material-ui/core/Grid';
import colors from '../../css/defaultColors';

// component style
const useStyles = makeStyles(theme => ({
    ...colors,
    button: {
        borderColor: '#656686'
    },
    remoColor: {
        color: colors.remoColor
    }
}));

/**
 * Renders the tooblar used to manipulate the photo. It goes inside the ImageEditor component
 * @param {*} props 
 */
const ToolBar = (props) => {
    const classes = useStyles();
    return (
    <Grid item>
        <ButtonGroup aria-label="small outlined button group">
            <Button onClick={props.setAllowCreateNewBox} className={classes.button}><CropFree className={props.toolbar.allowCreateNewBox ? classes.remoColor : classes.icon}/></Button>
            <Button className={classes.button}><ZoomIn className={classes.icon}/></Button>
            <Button className={classes.button}><ZoomOut className={classes.icon}/></Button>
        </ButtonGroup>
    </Grid>
    );
};

export default ToolBar;