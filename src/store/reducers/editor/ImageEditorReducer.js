import { createActions, createReducer } from 'reduxsauce';

/**
 * Define the initial state and default values for the Toolbar view
 */
const INITIAL_STATE = {
    // stores the coordinates for each box - There's a mock data for the current photo
    coordinates: [
        {
            "x": 424.8046875,
            "y": 28.90625,
            "width": 105.21484375,
            "height": 115.52734375,
            "id": "SJMZ6YTdf",
            enabled: true
        },
        {
            "x": 320.84765625,
            "y": 278.625,
            "width": 148.74609375,
            "height": 200,
            "id": "W8ST_0y3",
            enabled: true
        }
    ]
}

/**
 * Defines the Action Types and Action Creators. Each Action may have none, one or more than a property that 
 * will be send to the reducer, for this, add as many properties as you need in the
 * array.
 */
export const { Types, Creators } = createActions({
    // adds coordinates
    addCoordinates:['coordinates'],
    // removes a coordinate
    removeCoordinates:['coordinates'],
    // disable or enable a coordinate
    disableCoordinate: ['coordinate']
    /**
     * Defines the prefix for each action because we may contain Actions with same name in different reducers. 
     * Once the app dispatch an action to the `Store`, it send the action to all reducers.
     * The Reducer verifies if it contains the Type name (inserted inside the Action payload) and it will change 
     * some structure of the state/object if there's an action with the same name, 
     * however, defining a prefix will avoid this kind of issue.
     */
}, { prefix: 'imageeditor_'});

/**
 * Adds or replaces coordinates
 * @param {*} state 
 * @param {*} action 
 */
function addCoordinates (state = INITIAL_STATE, action) {
    // first, let's deal with coordinates that aren't enabled
    let disabledCoordinates = state.coordinates.filter(c => c.enabled === false);
    return {
        ...state,
        coordinates: action.coordinates.map(e => { return {...e, enabled: disabledCoordinates.find(c => c.id === e.id) ? false : true} })
    }
}

function disableCoordinate(state = INITIAL_STATE, action) {
    return {
        ...state,
        coordinates: state.coordinates.map(coordinate => { 
            return coordinate.id === action.coordinate.id ? {...coordinate, enabled: !action.coordinate.enabled} : { ...coordinate }
        })
    }
}

export default createReducer(INITIAL_STATE, {
    [Types.ADD_COORDINATES] : addCoordinates,
    [Types.REMOVE_COORDINATES] : addCoordinates,
    [Types.DISABLE_COORDINATE] : disableCoordinate
})