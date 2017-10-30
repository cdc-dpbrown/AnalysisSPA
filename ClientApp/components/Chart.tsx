import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Chart extends React.Component<{}, {}> {

   

    public render() {
        return <div>
            <h3>[ chart id={this.props.id} ]</h3>
            <div className='rate-control red' rate-value="95"><p>92%</p></div>
            <div>
                <h1>{this.props.id} </h1>
                <h1>{JSON.stringify(this.props.json)} </h1>
                <h1>{this.props.isLoading} </h1>
            </div>;
        </div>;
    }
}

