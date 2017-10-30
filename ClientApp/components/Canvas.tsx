import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as CanvasState from '../store/Canvas';
import ChartContainer from "../components/ChartContainer";
import Chart from "../components/Chart";

type CanvasProps = CanvasState.CanvasState ; 

export default class Canvas extends React.Component<CanvasProps, {}> {

    public render() {
        return <div>
            <div>
                <h1>{this.props.id} </h1>
                <h1>{JSON.stringify(this.props.json)} </h1>
                <h1>{this.props.isLoading} </h1>
                <h1>{this.props.charts} </h1>
            </div>
            <div className='col-sm-3 cardstock'><ChartContainer/></div>
            <div className='col-sm-3 cardstock'>
                <div>
                    <h1>{this.props.id} </h1>
                    <h1>{JSON.stringify(this.props.json)} </h1>
                    <h1>{this.props.isLoading} </h1>
                </div>
            </div>
            <div className='col-sm-3 cardstock'><ChartContainer/></div>
            <div className='row'>
                <div className='col-sm-7 cardstock'></div>
                <div className='col-sm-2 cardstock'></div>
            </div>
            <div className='row'>
                <div className='col-sm-9 cardstock'></div>
            </div>
            <div className='col-sm-3 cardstock'></div>
            <div className='col-sm-3 cardstock'></div>
            <div className='col-sm-3 cardstock'></div>
            <div className='col-sm-3 cardstock'></div>
            <div className='col-sm-3 cardstock'></div>
            <div className='col-sm-3 cardstock'></div>
        </div>;
    }
}
