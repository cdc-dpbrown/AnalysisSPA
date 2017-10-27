import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Chart from "../components/Chart";

export default class ChartContainer extends React.Component<RouteComponentProps<{}>, {}> {

    public render() {
        return <Chart/>;
    }
}

