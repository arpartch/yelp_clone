import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { RestaurantsContextProvider } from './context/RestaurantsContext';
import home from './routes/home';
import RestaurantDetailPage from './routes/restaurantDetailPage';
import updatePage from './routes/updatePage';

const App = () => {
    return (
    <RestaurantsContextProvider>
    <div className="container">
        <Router>
            <Switch>
            <Route exact path="/" component={home}/>
            <Route exact path="/restaurants/:id/update" component={updatePage}/>
            <Route exact path="/restaurants/:id" component={RestaurantDetailPage}/>
            </Switch>
        </Router>
    </div>
    </RestaurantsContextProvider>
    );
};

export default App;

