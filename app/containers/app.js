import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, Link, hashHistory} from 'react-router'
import configureStore from '../store/index';
import UserDetails from "../components/user/UserDetails";
import GridComponent from "../components/grid/GridComponent";

const store = configureStore();

class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Our awesome app</h1>
                <ul role="nav">
                    <li><Link to="/grid">Grid</Link></li>
                    <li><Link to="/details">Details</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="grid" component={GridComponent}/>
                <Route path="details" component={UserDetails}>
                    <Route path="/details/:id" component={UserDetails}/>
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);