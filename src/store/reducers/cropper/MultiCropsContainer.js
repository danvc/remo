import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Creators as Actions } from './../editor/ImageEditorReducer';
// import all React components that are going to receive data or methods as props
import MultiCrops from '../../../components/cropper/MultiCrops';

/**
 * Maps the toolbar state in order to active or desactive functions
 * @param {store} state 
 */
const mapStateToProps = state => ({
    toolbar: state.ToolbarReducer
});

/**
 * Maps all methods (from reducer) that are going to be shared with the React component
 * @param {*} dispatch 
 */
const mapDashboardDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

const MultiCropsContainer =  connect(
    mapStateToProps,
    mapDashboardDispatchToProps
)(MultiCrops);

export default MultiCropsContainer;