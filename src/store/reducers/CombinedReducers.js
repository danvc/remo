import { combineReducers } from 'redux';
import ToolbarReducer from './editor/ToolbarReducer';
import ImageEditorReducer from './editor/ImageEditorReducer';

/**
 * Combines all the reducers to be send to the store, sharing all data through the whole app
 */
export default combineReducers({
    // all reducers should be added here
    ToolbarReducer,
    ImageEditorReducer
})