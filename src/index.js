import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

import Home from "./routes/Home/Home";
import Admin from './routes/Admin/Admin'
import NotFound from './routes/NotFound/NotFound';
import Pages from './routes/Pages/Pages';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Admin} />
            <Route path="/page/:id" component={Pages} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()