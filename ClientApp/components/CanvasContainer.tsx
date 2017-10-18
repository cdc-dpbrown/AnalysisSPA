import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Canvas from "../components/Canvas";

export default class CanvasContainer extends React.Component<RouteComponentProps<{}>, {}> {

    public render() {
        return <Canvas/>;
    }
}

