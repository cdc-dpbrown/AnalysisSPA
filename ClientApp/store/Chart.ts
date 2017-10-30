import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';

export interface ChartState {
    id: string;
    isLoading: boolean;
    isInEdit: boolean;
    json: any;
}

interface RequestChartAction {
    type: 'REQUEST_CHART',
    id: string;
}

interface ReceiveChartAction {
    type: 'RECEIVE_CHART';
    id: string;
    json: any;
}

type ChartAction = RequestChartAction | ReceiveChartAction;

export const actionCreators = {
    requestCards: (id: string): AppThunkAction<ChartAction> => (dispatch, getState) => {
        if (id !== getState().chart.id) {
            let fetchTask = fetch(`/api/SettingsData/Chart?id=${ id }`)
                .then(response => response.json() as Promise<any>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_CHART', id: id, json: data });
                });

            addTask(fetchTask); 
            dispatch({ type: 'REQUEST_CHART', id: id });
        }
    }
};

const unloadedState: ChartState = {
    id: null,
    isLoading: false,
    isInEdit: false,
    json: null
};

export const reducer: Reducer<ChartState> = (state: ChartState, action: ChartAction) => {
    switch (action.type) {
        case 'REQUEST_CHART':
            return {
                id: action.id,
                json: state.json,
                isLoading: true
            };
        case 'RECEIVE_CHART':
            return {
                id: action.json.canvas.id,
                json: action.json,
                isLoading: false,
            };
        default:
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};
