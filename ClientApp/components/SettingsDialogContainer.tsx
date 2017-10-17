import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SettingsDialog from 'ClientApp/components/SettingsDialog';

type SettingsProps =
    CounterStore.CounterState
    & typeof CounterStore.actionCreators
    & RouteComponentProps<{}>;

export default class SettingsDialogContainer extends React.Component<RouteComponentProps<{}>, {}> {

    public render() {
        return <SettingsDialog />;
    }
}
