import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Chart extends React.Component<{}, {}> {

   

    public render() {
        return <div>
            <h3>[ chart id= {  } ]</h3>
	<div className='rate-control red' rate-value="95"><p>92%</p></div>
        </div>;
    }
}

