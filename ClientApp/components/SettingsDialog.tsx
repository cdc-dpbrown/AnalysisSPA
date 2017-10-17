import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class SettingsDialog extends React.Component<RouteComponentProps<{}>, {}> {
    string: givenName;


    public render() {
        return <div>
            <h3>Generic Settings Dialog</h3>
        </div>;
    }
}
