import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';

export interface ChartState {
    chart_id: string;
    chart_type: string;
    chart_inEdit: string;
    chart_loading: boolean;
}

interface RequestChartAction {
    type: 'REQUEST_CHART',
    chart_id: string;
}

interface ReceiveChartAction {
    type: 'RECEIVE_CHART';
    chart_id: string;
    chart_json: any;
}

interface GetChartAction {
    type: 'GET_CHART';
    chart_id: string;
    chart_type: string;
    chart_inEdit: string;
    chart_loading: boolean;
}

type ChartAction = RequestChartAction | ReceiveChartAction | GetChartAction;

export const actionCreators = {
    //requestChart: (id: string): AppThunkAction<ChartAction> => (dispatch, getState) => {
    //    if (id !== getState().chart.chart_id) {
    //        let fetchTask = fetch(`/api/SettingsData/Chart?id=${ id }`)
    //            .then(response => response.json() as Promise<any>)
    //            .then(data => {
    //                dispatch({ type: 'RECEIVE_CHART', chart_id: id, chart_json: data });
    //            });
    //        addTask(fetchTask); 
    //        dispatch({ type: 'REQUEST_CHART', chart_id: id });
    //    }
    //},
    //getChart: (id: string): AppThunkAction<ChartAction> => (dispatch, getState) => {
    //    if (id !== getState().chart.chart_id) {
    //    }
    //}
};

const unloadedState: ChartState = {
    chart_id: null,
    chart_type: null,
    chart_inEdit: null,
    chart_loading: false,

};

export const reducer: Reducer<ChartState> = (state: ChartState, action: ChartAction) => {
    switch (action.type) {
        case 'REQUEST_CHART':
            return {
                chart_id: state.chart_id,
                chart_type: state.chart_type,
                chart_inEdit: state.chart_inEdit,
                chart_loading: true
            };
        case 'RECEIVE_CHART':
            return {
                chart_id: action.chart_id,
                chart_json: action.chart_json,
                chart_type: null,
                chart_inEdit: null,
                chart_loading: false
            };
        case 'GET_CHART':
            return {
                chart_id: action.chart_id,
                chart_type: action.chart_type,
                chart_inEdit: action.chart_inEdit,
                chart_loading: false
            };
        default:
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};
