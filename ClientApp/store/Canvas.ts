import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface CanvasState {
    isLoading: boolean;
    path: string;
    cards: Card[];
}

export interface Card {
    summary: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestCardsAction {
    type: 'REQUEST_CANVAS_CARDS',
    startDateIndex: number;
}

interface ReceiveCardsAction {
    type: 'RECEIVE_CANVAS_CARDS',
    startDateIndex: number;
    forecasts: Card[]
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestCardsAction | ReceiveCardsAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestCards: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        if (true) {
            let fetchTask = fetch(`/api/SampleData/Cards?startDateIndex=${ startDateIndex }`)
                .then(response => response.json() as Promise<Card[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_CANVAS_CARDS', startDateIndex: startDateIndex, forecasts: data });
                });

            addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
            dispatch({ type: 'REQUEST_CANVAS_CARDS', startDateIndex: startDateIndex });
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: CanvasState = { path: null, cards: [], isLoading: false };

export const reducer: Reducer<CanvasState> = (state: CanvasState, action: KnownAction) => {
    switch (action.type) {
        case 'REQUEST_CANVAS_CARDS':
            return {
                path: 'na',
                cards: state.cards,
                isLoading: true
            };
        case 'RECEIVE_CANVAS_CARDS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (null === state.path) {
                return {
                    path: 'na',
                    cards: action.forecasts,
                    isLoading: false
                };
            }
            break;
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};
