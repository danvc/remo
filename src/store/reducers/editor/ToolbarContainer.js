import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Creators as ToolbarsActions } from './ToolbarReducer';
// import all React components that are going to receive data or methods as props
import Toolbar from '../../../components/editor/Toolbar';

/**
 * You can map everything needed to your component, for example, the whole reducer or just some 
 * property from the reducer. 
 * @param {store} state 
 */
const mapStateToProps = state => ({
    toolbar: state.ToolbarReducer
});

/**
 * Maps all methods (from reducer) that are going to be shared with the React component
 * @param {*} dispatch 
 */
const mapDashboardDispatchToProps = dispatch => bindActionCreators(ToolbarsActions, dispatch);

/**
 * Export it as a Container, which is a composition of React component + Reducer
 */
const ToolbarContainer =  connect(
    mapStateToProps,
    mapDashboardDispatchToProps
)(Toolbar);
export default ToolbarContainer;