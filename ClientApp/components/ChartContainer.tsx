import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as ChartState from '../store/Chart';
import Chart from "../components/Chart";

type ChartProps = ChartState.ChartState;

class ChartContainer extends React.Component<ChartProps, {}> {

    public render() {
        return <div>
            {this.renderChart()}
        </div>;
    }

    private renderChart() {
        if (this.props.chart_id) {
            return <div>
                <h1>{this.props.chart_id} </h1>
                <h1>{this.props.chart_type} </h1>
                <h1> dpbrown </h1>
                <h1>{this.props.chart_id} </h1>

            </div>;
        };
    }
}

export default connect(
    (state: ApplicationState) => state.chart,
    ChartState.actionCreators
)(ChartContainer) as typeof ChartContainer;