import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ChartContainer from "../components/ChartContainer";
import Chart from "../components/Chart";

export default class Canvas extends React.Component<{}, {}> {

    public render() {
        return <div>
            <div className='col-sm-3 cardstock'><ChartContainer/></div>
            <div className='col-sm-3 cardstock'></div>
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
