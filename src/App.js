import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ImageEditor, { ObjectListContainer as ObjectList } from './store/reducers/editor/ImageEditorContainer';
import ImageGallery from './components/editor/ImageGallery';
import MainBar from './components/dashboard/MainBar';
import './App.css'
import { Provider } from 'react-redux';
import Store from '../src/store/Store';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
}));

/**
 * Renders the RemoApp UI structure
 */
export default function RemoApp() {
    const classes = useStyles();
    return (
        <Provider store={Store}>
            <div className={classes.root}>
                <CssBaseline />
                <MainBar/>
                <ObjectList/>
                <ImageEditor/>
                <ImageGallery/>
            </div>
        </Provider>
    );
}