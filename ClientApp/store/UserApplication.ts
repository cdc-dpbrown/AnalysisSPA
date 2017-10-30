import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface UserApplicationState {
    isLoading: boolean;
    path: string;
    recents: Recent[];
}

export interface Recent {
    path: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestPathAction {
    type: 'REQUEST_CANVAS_PATH',
}

interface ReceivePathAction {
    type: 'RECEIVE_CANVAS_PATH',
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestPathAction | ReceivePathAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    //requestCards: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
    //    // Only load data if it's something we don't already have (and are not already loading)
    //    if (true) {
    //        let fetchTask = fetch(`/api/SampleData/Cards?startDateIndex=${ startDateIndex }`)
    //            .then(response => response.json() as Promise<Card[]>)
    //            .then(data => {
    //                dispatch({ type: 'RECEIVE_CANVAS_PATH', startDateIndex: startDateIndex, forecasts: data });
    //            });

    //        addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
    //        dispatch({ type: 'REQUEST_CANVAS_PATH', startDateIndex: startDateIndex });
    //    }
    //}
    //request
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: ApplicationState = { path: null, recents: [], isLoading: false };

export const reducer: Reducer<ApplicationState> = (state: ApplicationState, action: KnownAction) => {
    switch (action.type) {
        case 'REQUEST_CANVAS_PATH':
            return {
                path: 'na',
                isLoading: true,
                recents: state.recents
            };
        case 'RECEIVE_CANVAS_PATH':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (null === state.path) {
                return {
                    path: 'na',
                    isLoading: false,
                    recents: state.recents
                };
            }
            break;
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};