import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/set-data-source' component={Counter} />
    <Route path='/open' component={Counter} />
    <Route path='/save' component={Counter} />
    <Route path='/save-as' component={Counter} />
    <Route path='/variables' component={Counter} />
    <Route path='/filter' component={Counter} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata/:startDateIndex?' component={ FetchData } />
</Layout>;
