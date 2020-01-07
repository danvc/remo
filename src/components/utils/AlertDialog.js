import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import colors from '../../css/defaultColors';
import PropTypes from 'prop-types'

// Component style
const useStyles = theme => ({
    dialogTitle: {
        backgroundColor: colors.primary,
        color: 'white'
    },
    dialogContent: {
        backgroundColor: colors.secondary,
        color: 'white',
        fontWeight: 300
    },
    dialogActions: {
        backgroundColor: colors.secondary
    },
    dialogButtons: {
        color: colors.remoColor
    }
});

/**
 * Renders a Dialog message 
 */
class AlertDialog extends React.Component{    
    render() {
        const { classes } = this.props;
        return (
        <div>
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title" className={classes.dialogTitle}>{this.props.title}</DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <DialogContentText id="alert-dialog-description" className={classes.dialogContent}>
                    {this.props.description}
                </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
                <Button onClick={this.props.handleConfirm} className={classes.dialogButtons}>
                    Confirm
                </Button>
                <Button onClick={this.props.handleCancel} className={classes.dialogButtons} autoFocus>
                    Cancel
                </Button>
            </DialogActions>
            </Dialog>
        </div>
        );
    }
}
// Required props
AlertDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    handleCancel: PropTypes.func.isRequired
}

export default withStyles(useStyles)(AlertDialog);