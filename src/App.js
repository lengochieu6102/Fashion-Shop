import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import routes from './routes';

function App(props) {
    function showPage(routes) {
        var result = null;
        result = routes.map((route, index) => {
            return (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            )
        })
        return <Switch>{result}</Switch>;
    }
    return (
        <Router>
            <div>
                <Header></Header>
                <div className="container">
                    {showPage(routes)}
                </div>
            </div >
        </Router>
    );
}

export default App;
