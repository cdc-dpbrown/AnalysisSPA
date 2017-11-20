import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';
import { ChartState } from 'ClientApp/store/Chart';

export interface DashboardState {
    id: string;
    isLoading: boolean;
    json: any;
    chartIds: string[];
    charts: ChartState[];
}

interface RequestDashboardAction {
    type: 'REQUEST_DASHBOARD';
    id: string;
}

interface ReceiveDashboardAction {
    type: 'RECEIVE_DASHBOARD';
    id: string;
    json: any;
    charts: any;
}

type DashboardAction = RequestDashboardAction | ReceiveDashboardAction;

export const actionCreators = {
    requestDashboard: (id: string): AppThunkAction<DashboardAction> => (dispatch, getState) => {
        if (id !== getState().dashboard.id) {
            let fetchTask = fetch(`/api/SettingsData/Dashboard?id=${ id }`)
                .then(response => response.json() as Promise<any>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_DASHBOARD', id: id, json:data, charts: null });
                });

            addTask(fetchTask); 
            dispatch({ type: 'REQUEST_DASHBOARD', id: id });
        }
    }
};

const unloadedState: DashboardState = {
    id: null,
    isLoading: false,
    json: null,
    chartIds: null,
    charts: null
};

export const reducer: Reducer<DashboardState> = (state: DashboardState, action: DashboardAction) => {
    switch (action.type) {

        case 'REQUEST_DASHBOARD':
            return {
                id: action.id,
                json: state.json,
                isLoading: true,
                chartIds: state.chartIds,
                charts: state.charts
            };

        case 'RECEIVE_DASHBOARD':
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