import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as DashboardState from '../store/Dashboard';
import Dashboard from "../components/Dashboard";

type DashboardContainerProps = DashboardState.DashboardState & typeof DashboardState.actionCreators & RouteComponentProps<{ id: string }>; 

class DashboardContainer extends React.Component<DashboardContainerProps, {}> {

    componentWillMount() {
        console.log('componentWillMount()_DashboardContainer');
        let id = "";
        this.props.requestDashboard(id);
    }

    componentWillReceiveProps(nextProps: DashboardContainerProps) {
        console.log('componentWillReceiveProps()_DashboardContainer');
        this.props.requestDashboard(nextProps.id);
    }

    public render() {
        return (<div>
            <Dashboard id={this.props.id} isLoading={this.props.isLoading} json={this.props.json} chartIds={this.props.chartIds} charts={this.props.charts} />
            <div>
                <br/>
                <h1>{this.props.id}</h1>
                <h1>{JSON.stringify(this.props.json)}</h1>
                <h1>{this.props.isLoading ? React.createElement("span", null, "Loading...") : React.createElement("span", null, "Not loading...")}</h1>
            </div>
        </div>);
    }
}

const connectedStateandProps = connect((state: ApplicationState) => state.dashboard, DashboardState.actionCreators);
export default connectedStateandProps(DashboardContainer) as typeof DashboardContainer;



