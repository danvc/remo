import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Creators as Actions } from './ImageEditorReducer';
// import all React components that are going to receive data or methods as props
import ImageEditor from '../../../components/editor/ImageEditor';
import ObjectList from '../../../components/editor/ObjectList';

/**
 * You can map everything needed to your component, for example, the whole reducer or just some 
 * property from the reducer. 
 * @param {store} state 
 */
const mapStateToProps = state => ({
    imageEditor: state.ImageEditorReducer
});

/**
 * Maps all methods (from reducer) that are going to be shared with the React component
 * @param {*} dispatch 
 */
const mapDashboardDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

/**
 * Export it as a Container, which is a composition of React component + Reducer
 */
const ImageEditorContainer = connect(
    mapStateToProps,
    mapDashboardDispatchToProps
)(ImageEditor);
export default ImageEditorContainer;

/**
 * Connects the ObjectList inspector with the reducer
 */
export const ObjectListContainer = connect(
    mapStateToProps,
    mapDashboardDispatchToProps
)(ObjectList);