import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import * as DashboardState from '../store/Dashboard';
import ChartContainer from "../components/ChartContainer";
import Chart from "../components/Chart";

type DashboardProps = DashboardState.DashboardState; 

export default class Dashboard extends React.Component<DashboardProps, {}> {

    //constructor(DashboardProps) {
    //    super(DashboardProps);
    //    this.state = {
    //        id: DashboardProps.chart_id,
    //        isLoading: DashboardProps.chart_type,
    //        json: DashboardProps.chart_inEdit,
    //        chartIds: DashboardProps.chart_loading,
    //        charts: DashboardProps....
    //    };
    //}

    constructor(DashboardProps) {
        super(DashboardProps);
        console.log('constructor');
        console.log(this.props);
    }

    public render() {
        console.log('render()_Dashboard');
        console.log(this.props);
        return <div><span>dpb</span>
            { this.renderDashboard() }
        </div>;
    }

    //chart_id: string;
    //chart_type: string;
    //chart_inEdit: string;
    //chart_loading: boolean;


    //key = { chartContainer.chart_id }
    //chart_id = { chartContainer.chart_id }
    //chart_type = { chartContainer.chart_type }
    //chart_inEdit = { chartContainer.chart_inEdit }
    //chart_loading = { chartContainer.chart_loading }


    private renderDashboard() {
        console.log('renderDashboard()');
        console.log(this.props);
        if (this.props.chartIds) {
            return <div>
                {this.props.chartIds.map(id =>
                    <div key={id} className='col-sm-3 cardstock'>{id}</div>
                )}
                {console.log('has chartIds')}
                {
                    //this.props.charts.map(chartContainer =>
                    //    <ChartContainer
                    //        key={chartContainer.chart_id}
                    //        chart_id={chartContainer.chart_id}
                    //        chart_type={chartContainer.chart_type}
                    //        chart_inEdit={chartContainer.chart_inEdit}
                    //        chart_loading={chartContainer.chart_loading}
                    //    />
                    //)}
                }
            </div>;
        }
    }
}

//export default connect(
//    (state: ApplicationState) => state.canvas, // Selects which state properties are merged into the component's props
//    DashboardState.actionCreators                 // Selects which action creators are merged into the component's props
//)(Dashboard) as typeof Dashboard;