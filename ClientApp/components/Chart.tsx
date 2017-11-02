import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as ChartState from '../store/Chart';

type ChartProps = ChartState.ChartState;

export default class Chart extends React.Component<ChartProps, {}> {

    handleStartEdit() {

    }

    public render() {
        return <div>
            { this.renderChart() }
        </div>;
    }

    private renderChart() {
        return <div>
            <h3>[ chart id={this.props.chart_id} ]</h3>
            <button onClick={this.handleStartEdit.bind(this)}>Eder</button>
            <div className='rate-control red' rate-value="95"><p>92%</p></div>
            <div>
                <h1>{this.props.chart_id} </h1>
            </div>;
        </div>;
    }
}

