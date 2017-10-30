import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as CanvasState from '../store/Canvas';
import ChartContainer from "../components/ChartContainer";
import Chart from "../components/Chart";

type CanvasProps = CanvasState.CanvasState ; 

export default class Canvas extends React.Component<CanvasProps, {}> {

    public render() {
        return <div>
            { this.renderCharts() }
        </div>;
    }

    private renderCharts() {
        if (this.props.charts) {
            return <div>
                {this.props.charts.map(id =>
                    <div className='col-sm-3 cardstock'>{id}</div>
                )}
            </div>;
        }
    }
}
