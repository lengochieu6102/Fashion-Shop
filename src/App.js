import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import routes from './routes';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header></Header>
                    <div className="container">
                        {this.showPage(routes)}
                    </div>
                </div >
            </Router>
        );
    }

    showPage= (routes)=>{
        var result=null;
        result=routes.map((route,index)=>{
            return(
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

}

export default App;
