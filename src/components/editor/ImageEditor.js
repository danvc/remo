import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '../../store/reducers/editor/ToolbarContainer';
import Container from '@material-ui/core/Container';
import MultiCrops from '../../store/reducers/cropper/MultiCropsContainer';
import AlertDialog from '../utils/AlertDialog';
import colors from '../../css/defaultColors';
import ImageEditorTags from './ImageEditorTags';

const useStyles = theme => ({
    title: {
        backgroundColor: colors.primary,
        color: 'white'
    },
    container: {
        marginTop: 90
    },
    projectTitle: {
        padding: '8px 8px 0px 8px !important',
    },
    toolBox: {
        padding: '0px 8px 8px 8px !important',
    },
    chipList: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            marginRight: theme.spacing(0.5),
        },
    },
    chips: {
        color: 'white',
        borderColor: 'white'
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 770,
        backgroundColor: colors.secondary
    },
});

/**
 * ImageEditor is the main component responsible to load an image and allow the user to create the boxes in 
 * order to send the coordinates of each box to be analyzed by the machine learning.
 */
class ImageEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // to handle the dialog box that confirms the object deletion
            openDeleteAlert: false,
        }
    }

    /**
     * Changes the coordinates stored in the reducer
     */
    changeCoordinate = (coordinate, index, coordinates) => {
        this.props.addCoordinates(coordinates);
    }

    /**
     * Show the dialog form to confirm the deletion of the box.
     */
    confirmDeletion = (coordinate, index, coordinates) => {
        this.setState({
            // shows up the dialog 
            openDeleteAlert: true,
        });

        // injects a method to call the reducer to remove coordinates
        // it's going to be called when the `handleConfirm` method is triggered
        // from the message confirmation.
        this.deleteObject = () =>{
            this.setState({
                // closes the dialog
                openDeleteAlert: false,
            }, () => {
                // inject the method that is going to be performed to
                // remove the coordinates
                this.props.removeCoordinates(coordinates)
            })
        }
    }

    /**
     * Closes the message form
     */
    cancelDeletion = () => {
        this.setState({ openDeleteAlert: false})
    }

    render() {
        const { classes } = this.props;
        return (
            <Container className={classes.container}>
                {/* Alert dialog that shows up to confirm the deletion of a box */}
                <AlertDialog
                    open={this.state.openDeleteAlert}
                    title='Delete object'
                    description='Are you sure you want to delete this object?'
                    handleConfirm={this.deleteObject}
                    handleCancel={this.cancelDeletion}
                    onClose={this.cancelDeletion}
                    />
                {/* Image editor */}
                <Grid container spacing={3}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm container className={classes.title}>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs className={classes.projectTitle}>
                                        {/* Title of the project (mock data) */}
                                        <Typography gutterBottom variant="overline">
                                            PROJECT: [Motorcycle Recognition]
                                        </Typography>
                                    </Grid>
                                    <Toolbar/>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                {/* Renders the crops inside the image */}
                                <MultiCrops
                                    src="https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/softail/fxdr-114/gallery/20-softail-fxdr114-k2.jpg?impolicy=myresize&rw=1137"
                                    width={740}
                                    coordinates={this.props.imageEditor.coordinates}
                                    onChange={this.changeCoordinate}
                                    onDelete={this.confirmDeletion}
                                />
                            </Grid>
                            {/* Renders a gallery of images that could be used  */}
                            <ImageEditorTags/>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
        );
    }
}

export default withStyles(useStyles)(ImageEditor)
