
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import routes from './routes';
import Footer from './components/Footer/Footer';

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
                <div className="container mt-5 mb-5">
                    {showPage(routes)}
                </div>
                <Footer></Footer>
            </div >
        </Router>
    );
}

export default App;
