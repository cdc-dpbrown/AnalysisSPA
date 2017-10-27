import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';

export interface CanvasState {
    id: string;
    isLoading: boolean;
    json: any;
}

export interface Chart {
    id: string;
    summary: string;
}

interface RequestCanvasAction {
    type: 'REQUEST_CANVAS',
    id: string;
}

interface ReceiveCanvasAction {
    type: 'RECEIVE_CANVAS',
    id: string;
    json: any;
}

type CanvasAction = RequestCanvasAction | ReceiveCanvasAction;

export const actionCreators = {
    requestCanvas: (id: string): AppThunkAction<CanvasAction> => (dispatch, getState) => {
        if (id !== getState().canvas.id) {
            let fetchTask = fetch(`/api/SettingsData/Canvas?id=${ id }`)
                .then(response => response.json() as Promise<any>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_CANVAS', id: id, json:data });
                });

            addTask(fetchTask); 
            dispatch({ type: 'REQUEST_CANVAS', id: id });
        }
    }
};

const unloadedState: CanvasState = {
    id: null,
    isLoading: false,
    json: null,
};

export const reducer: Reducer<CanvasState> = (state: CanvasState, action: CanvasAction) => {
    switch (action.type) {
        case 'REQUEST_CANVAS':
            return {
                id: action.id,
                json: state.json,
                isLoading: true
            };
        case 'RECEIVE_CANVAS':
            if (true) {
                return {
                    
                    id: action.json.canvas.id,
                    json: action.json,
                    isLoading: false
                };
            }
        default:
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};
