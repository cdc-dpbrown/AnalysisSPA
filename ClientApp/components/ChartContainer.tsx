import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as ChartState from '../store/Chart';
import Chart from "../components/Chart";

//type ChartProps = ChartState.ChartState & typeof ChartState.actionCreators & RouteComponentProps<{ id: string }>; 
type ChartProps = ChartState.ChartState;

class ChartContainer extends React.Component<ChartProps, {}> {

    //constructor(ChartProps) {
    //    super(ChartProps);
    //    this.state = {
    //        chart_id: ChartProps.chart_id,
    //        chart_type: ChartProps.chart_type,
    //        chart_inEdit: ChartProps.chart_inEdit,
    //        chart_loading: ChartProps.chart_loading,
    //    };
    //}

    //componentWillReceiveProps(nextProps: ChartProps) {
    //    this.props.getChart(nextProps.chart_id);
    //}

    public render() {
        console.log('render()_chart');
        console.log(this.props);
        return <div>
            {this.renderChart()}
        </div>;
    }

    private renderChart() {
        if (this.props.chart_id) {
            { console.log('renderChart()'); }
            { console.log('renderChart()'); }
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