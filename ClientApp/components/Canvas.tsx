import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as CanvasState from '../store/Canvas';
import ChartContainer from "../components/ChartContainer";
import Chart from "../components/Chart";

type CanvasProps = CanvasState.CanvasState; 

export default class Canvas extends React.Component<CanvasProps, {}> {

    //constructor(CanvasProps) {
    //    super(CanvasProps);
    //    this.state = {
    //        id: CanvasProps.chart_id,
    //        isLoading: CanvasProps.chart_type,
    //        json: CanvasProps.chart_inEdit,
    //        chartIds: CanvasProps.chart_loading,
    //        charts: CanvasProps....
    //    };
    //}

    constructor(CanvasProps) {
        super(CanvasProps);
        console.log('constructor');
        console.log(this.props);
    }

    public render() {
        console.log('render()_canvas');
        console.log(this.props);
        return <div><span>dpb</span>
            { this.renderCanvas() }
        </div>;
    }

    //chart_id: string;
    //chart_type: string;
    //chart_inEdit: string;
    //chart_loading: boolean;


    //key = { chartContainer.chart_id }
    //chart_id = { chartContainer.chart_id }
    //chart_type = { chartContainer.chart_type }
    //chart_inEdit = { chartContainer.chart_inEdit }
    //chart_loading = { chartContainer.chart_loading }


    private renderCanvas() {
        console.log('renderCanvas()');
        console.log(this.props);
        if (this.props.chartIds) {
            return <div>
                {this.props.chartIds.map(id =>
                    <div key={id} className='col-sm-3 cardstock'>{id}</div>
                )}

                {console.log('has chartIds')}

                {this.props.charts.map(chartContainer =>
                    <ChartContainer
                        key={chartContainer.chart_id}
                        chart_id={chartContainer.chart_id}
                        chart_type={chartContainer.chart_type}
                        chart_inEdit={chartContainer.chart_inEdit}
                        chart_loading={chartContainer.chart_loading}
                    />
                )}

            </div>;
        }
    }
}
