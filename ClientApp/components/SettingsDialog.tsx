import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class SelectDataSource extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h3>Select Data Source</h3>
            <p><br /></p>
            <p>Recent Data Sources</p>
            <p><br /></p>
            <p>Database Type</p>
            <p><br /></p>
            <p>Data Source</p>
            <p>Browse</p>
            <p><br /></p>
            <p>Data Source Explorer</p>
            <p><br /></p>
            <p>OK</p>
            <p>Advanced</p>
            <p>Cancel</p>
            <p>Help</p>
        </div>;
    }
}
