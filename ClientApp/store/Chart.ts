import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';

export interface ChartState {
    chart_id: string;
    chart_type: string;
    chart_inEdit: string;
    chart_loading: boolean;
    chart_isFullScreen: boolean;
    chart_isFullWidth: boolean;
}

interface RequestChartAction {
    type: 'REQUEST_CHART';
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

interface ToggleFullScreen {
    type: 'TOGGLE_FULL_SCREEN';
    chart_isFullScreen: boolean;
}

type ChartAction = RequestChartAction | ReceiveChartAction | GetChartAction | ToggleFullScreen;

export const actionCreators = {
    toggleFullScreen: (isFull: boolean): AppThunkAction<ChartAction> => (dispatch, getState) => {
        dispatch({ type: 'TOGGLE_FULL_SCREEN', chart_isFullScreen: getState().chart.chart_isFullScreen });
    }
};

const unloadedState: ChartState = {
    chart_id: null,
    chart_type: null,
    chart_inEdit: null,
    chart_loading: false,
    chart_isFullScreen: false,
    chart_isFullWidth: false,
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

        case 'TOGGLE_FULL_SCREEN':
            return {
                chart_isFullScreen: action.chart_isFullScreen === true ? false : true
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
