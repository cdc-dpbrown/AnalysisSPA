import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as ChartState from '../store/Chart';
import Chart from "../components/Chart";

type ChartContainerProps = ChartState.ChartState & typeof ChartState.actionCreators & RouteComponentProps<{ id: string }>; 

class ChartContainer extends React.Component<ChartContainerProps, {}> {

    //constructor(ChartProps) {
    //    super(ChartProps);
       
    //    console.log('constructor(ChartProps)');
    //    console.log(this.props);
    //    console.log(this.context);
    //    console.log(this.state);
    //    console.log(this);
    //    console.log(this.refs);
    //    this.state = {
    //        chart_id: ChartProps.chart_id,
    //        chart_type: ChartProps.chart_type,
    //        chart_inEdit: ChartProps.chart_inEdit,
    //        chart_loading: ChartProps.chart_loading,
    //    };
    //    console.log(ChartProps.chart_id);
    //}

    componentWillMount() {
        console.log('componentWillMount()_ChartContainer');
        console.log(this.props);
        console.log(this.context);
        console.log(this.state);
        console.log(this);
        console.log(this.refs);
    }

    componentWillReceiveProps(nextProps: ChartContainerProps) {
        console.log('componentWillReceiveProps()_ChartContainer');
        console.log(this.props);
        console.log(this.context);
        console.log(this.state);
        console.log(this);
        console.log(this.refs);
    }

    public render() {
        console.log('render()_chart');
        console.log(this.props);
        console.log(this.context);
        console.log(this.state);
        console.log(this);
        console.log(this.refs);
        return <div>
            {this.renderChart()}
        </div>;
    }

    private renderChart() {
        { console.log('renderChart()'); }

        console.log(this.props.chart_id);

        if (this.props.chart_id) {
            { console.log('renderChart() - chart_id not null'); }
            return <div>
                <h1>{this.props.chart_id} </h1>
                <h1>{this.props.chart_type} </h1>
                <h1> dpbrown </h1>
                <h1>{this.props.chart_id} </h1>
            </div>;
        };
    }
}

const connectedStateandProps = connect((state: ApplicationState) => state.chart, ChartState.actionCreators);
export default connectedStateandProps(ChartContainer) as typeof ChartContainer;