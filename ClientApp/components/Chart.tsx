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
            var wrapperDivClassName = "chartRender col-sm-3 cardstock";

            if (this.props.chart_isFullScreen) {
                wrapperDivClassName = "chartRender col-sm-12 cardstock";
            }

            return <div key={this.props.chart_id} className={wrapperDivClassName}>
                <div className='chart'>
                    <div className='chartSettingsButton' id='settingsButton' onClick={this.handleStartEdit.bind(this)}>...</div>
                    <h3>[ chart id={this.props.chart_id} ]</h3>
                </div>
                <div className='chartSettings'>
                    <button className='chartSettingsButton' id='settingsButton' onClick={this.handleStartEdit.bind(this)}>...</button>
                    <button className='chartFullButton' id='fullButton' onClick={() => { this.props.toggleFullScreen(this.props.chart_isFullScreen).bind(this) }}>[]</button>
                    <p>[ chart id={this.props.chart_id} ]</p>
                    <p>[ chart_isFullScreen={this.props.chart_isFullScreen} ]</p>
                </div>
            </div>;
        }
    }

    handleStartEdit() {
    }
}

const ChartContainer = connect((state: ApplicationState) => state.chart, ChartState.actionCreators);
export default ChartContainer(Chart) as typeof Chart;