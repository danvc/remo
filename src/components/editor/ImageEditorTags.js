import React from 'react';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../css/defaultColors';

/**
 * Component style
 */
const useStyles = makeStyles(theme => ({
    chipList: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            marginRight: theme.spacing(0.5),
        },
    },
    chips: {...colors.chips}

}));

/**
 * Show tags related to the picture or could be added for the reference of the picture
 */
const ImageEditorTags = () => {
    const classes = useStyles();
    return (
        <Grid item className={classes.chipList}>
            <Chip label="motorcycle" variant="outlined" size="small" onDelete={()=>{}} className={classes.chips} />
            <Chip label="tire" variant="outlined" size="small" onDelete={()=>{}} className={classes.chips} />
            <Chip label="helmet" variant="outlined" size="small" onDelete={()=>{}} className={classes.chips}  />
        </Grid>
    );
};

export default ImageEditorTags;