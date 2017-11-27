import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as DashboardState from '../store/Dashboard';
import Chart from '../components/Chart';

type DashboardProps = DashboardState.DashboardState & typeof DashboardState.actionCreators & RouteComponentProps<{ id: string }>; 

class Dashboard extends React.Component<DashboardProps, {}> {

    componentWillMount() {
        console.log('componentWillMount()_Dashboard');
        let id = "";
        this.props.requestDashboard(id);
    }

    componentWillReceiveProps(nextProps: DashboardProps) {
        console.log('componentWillReceiveProps()_Dashboard');
        this.props.requestDashboard(nextProps.id);
    }

    public render() {
        console.log('render()_Dashboard');
        console.log(this.props);
        return <div>
            {this.renderDashboard()}
        </div>;
    }

    private renderDashboard() {
        console.log('renderDashboard()');
        console.log(this.props);
        if (this.props.chartIds) {
            return <div>
                {console.log('has chartIds')}
                {
                    this.props.charts.map(chart =>
                        <div key={chart.chart_id} className='col-sm-3 cardstock'>
                            <Chart
                                key={chart.chart_id}
                                chart_id={chart.chart_id}
                                chart_type={chart.chart_type}
                                chart_inEdit={chart.chart_inEdit}
                                chart_loading={chart.chart_loading}
                                match={this.props.match}
                                location={this.props.location}
                                history={this.props.history}
                            />
                        </div>
                    )
                }
            </div>;
        }
    }
}

const DashboardContainer = connect((state: ApplicationState) => state.dashboard, DashboardState.actionCreators);
export default DashboardContainer(Dashboard) as typeof Dashboard;



