import { createActions, createReducer } from 'reduxsauce';

/**
 * Define the initial state and default values for the Toolbar view
 */
const INITIAL_STATE = {
    // when the user clicks in the button to add a new box
    allowCreateNewBox : false
}

/**
 * Defines the Action Types and Action Creators. Each Action may have none, one or more than a property that 
 * will be send to the reducer, for this, add as many properties as you need in the
 * array.
 */
export const { Types, Creators } = createActions({
    setAllowCreateNewBox: ['isLoading'],
    /**
     * Defines the prefix for each action because we may contain Actions with same name in different reducers. 
     * Once the app dispatch an action to the `Store`, it send the action to all reducers.
     * The Reducer verifies if it contains the Type name (inserted inside the Action payload) and it will change 
     * some structure of the state/object if there's an action with the same name, 
     * however, defining a prefix will avoid this kind of issue.
     */
}, { prefix: 'toolbar_'});

/**
 * Set true or false to allow the user add a new box
 * @param {*} state 
 */
function setAllowCreateNewBox (state = INITIAL_STATE, action) {
    return {
        ...state,
        allowCreateNewBox: !state.allowCreateNewBox
    }
}

/**
 * Create a reducer mapping each type with its function
 */
export default createReducer(INITIAL_STATE, {
    [Types.SET_ALLOW_CREATE_NEW_BOX]: setAllowCreateNewBox,
})