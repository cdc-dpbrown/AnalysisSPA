import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as CanvasState from '../store/Canvas';
import Canvas from "../components/Canvas";

type CanvasProps = CanvasState.CanvasState & typeof CanvasState.actionCreators & RouteComponentProps<{ id: string }>; 

class CanvasContainer extends React.Component<CanvasProps, {}> {

    componentWillMount() {
        let id = "";
        this.props.requestCanvas(id);
    }

    componentWillReceiveProps(nextProps: CanvasProps) {
        this.props.requestCanvas(nextProps.id);
    }

    public render() {
        return (<div>
                <Canvas id={this.props.id} isLoading={this.props.isLoading} json={this.props.json} chartIds={this.props.chartIds} charts={this.props.charts} />
                <div>
                <br/>
                <h1>{this.props.id}</h1>
                <h1>{JSON.stringify(this.props.json)}</h1>
                <h1>{this.props.isLoading ? React.createElement("span", null, "Loading...") : React.createElement("span", null, "Not loading...")}</h1>
            </div>
        </div>);
    }
}

export default connect(
    (state: ApplicationState) => state.canvas,
    CanvasState.actionCreators
)(CanvasContainer) as typeof CanvasContainer;