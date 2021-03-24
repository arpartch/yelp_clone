import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import home from './routes/home';
import restaurantDetailPage from './routes/restaurantDetailPage';
import updatePage from './routes/updatePage';

const App = () => {
    return <div className="container">
        <Router>
            <Switch>
            <Route exact path="/" component={home}/>
            <Route exact path="/restaurants/:id/update" component={updatePage}/>
            <Route exact path="/restaurants/:id" component={restaurantDetailPage}/>
            </Switch>
        </Router>
    </div>
};

export default App;

