import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';
import { ChartState } from 'ClientApp/store/Chart';

export interface CanvasState {
    id: string;
    isLoading: boolean;
    json: any;
    chartIds: string[];
    charts: ChartState[];
}

interface RequestCanvasAction {
    type: 'REQUEST_CANVAS';
    id: string;
}

interface ReceiveCanvasAction {
    type: 'RECEIVE_CANVAS';
    id: string;
    json: any;
    charts: any;
}

type CanvasAction = RequestCanvasAction | ReceiveCanvasAction;

export const actionCreators = {
    requestCanvas: (id: string): AppThunkAction<CanvasAction> => (dispatch, getState) => {
        if (id !== getState().canvas.id) {
            let fetchTask = fetch(`/api/SettingsData/Canvas?id=${ id }`)
                .then(response => response.json() as Promise<any>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_CANVAS', id: id, json:data, charts: null });
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
    chartIds: null,
    charts: null
};

export const reducer: Reducer<CanvasState> = (state: CanvasState, action: CanvasAction) => {
    switch (action.type) {

        case 'REQUEST_CANVAS':
            return {
                id: action.id,
                json: state.json,
                isLoading: true,
                chartIds: state.chartIds,
                charts: state.charts
            };

        case 'RECEIVE_CANVAS':
            let ids: string[] = [];
            let chartStates: ChartState[] = []; 

            action.json.canvas.charts.forEach((c) => {
                ids.push(c.chart_id as string);
            })

            action.json.canvas.charts.forEach((c) => {
                chartStates.push(c);
            })

            return {
                id: action.json.canvas.id,
                json: action.json,
                isLoading: false,
                chartIds: ids,
                charts: chartStates
            };
   
        default:
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};
