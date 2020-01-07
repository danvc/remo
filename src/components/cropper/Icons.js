import React from 'react'
import Protypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Clear';

/**
 * Components styles
 */
const useStyles = makeStyles(theme => ({
    rmcIconContainer: {
        width: '15px',
        height: '15px',
        cursor: 'pointer',
        float: 'right',
        background: '#262626',
        opacity: '0.8'
      },
    rmcIcon: {
        position: 'relative',
        top: '-4px',
        width: '15px',
        color: 'white'
    },
    rmcNumber: {
        width: '15px',
        height: '15px',
        float: 'left',
        fontSize: '12px',
        background: '#262626',
        textAlign: 'center',
        lineHeight: '15px',
        color: 'white',
        opacity: '0.8'
      }
}));

/**
 * Renders the Delete icon in the box
 * @param {} props 
 */
export const DeleteIcon = props =>  {

    const classes = useStyles();
    return (
        <div
            className={classes.rmcIconContainer}
            {...props}>
            <RemoveIcon className={classes.rmcIcon}/>
        </div>
    )
}

/**
 * Renders the Number icon in the box
 * @param {*} param0 
 */
export const NumberIcon = ({ number }) => {
    const classes = useStyles();
    return (
        <div className={classes.rmcNumber}>
        { number }
      </div>    
    );
}



const { number } = Protypes

NumberIcon.propTypes = {
    number,
}

NumberIcon.defaultProps = {
    number: '',
}