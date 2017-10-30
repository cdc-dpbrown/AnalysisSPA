import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as ChartState from '../store/Chart';
import Chart from "../components/Chart";

type ChartProps = ChartState.ChartState & typeof ChartState.actionCreators & RouteComponentProps<{ id: string }>; 

class ChartContainer extends React.Component<ChartProps, {}> {

    public render() {
        return <div>
            <h1>{this.props.id} </h1>
        </div>;
        //return <Chart/>;
    }
}

export default connect(
    (state: ApplicationState) => state.chart,
    ChartState.actionCreators
)(ChartContainer) as typeof ChartContainer;