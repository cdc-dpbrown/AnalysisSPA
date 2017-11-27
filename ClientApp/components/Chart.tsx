import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as ChartState from '../store/Chart';

type ChartProps = ChartState.ChartState & typeof ChartState.actionCreators & RouteComponentProps<{ id: string }>; 

class Chart extends React.Component<ChartProps, {}> {

    componentWillMount() {
        console.log('componentWillMount()_Chart');
        console.log(this.props);
        console.log(this.context);
        console.log(this.state);
        console.log(this);
        console.log(this.refs);
    }

    componentWillReceiveProps(nextProps: ChartProps) {
        console.log('componentWillReceiveProps()_Chart');
        console.log(this.props);
        console.log(this.context);
        console.log(this.state);
        console.log(this);
        console.log(this.refs);
    }

    public render() {
        return <div>
            {this.renderChart()}
        </div>;
    }

    private renderChart() {
        if (this) {
            console.log("renderChart()");
            return <div>
                <h3>[ chart id={this.props.chart_id} ]</h3>
            </div>;
        }
    }

    handleStartEdit() {
    }
}

const ChartContainer = connect((state: ApplicationState) => state, ChartState.actionCreators);
export default ChartContainer(Chart) as typeof Chart;