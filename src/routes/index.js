import React from 'react';
import Home from '../pages/Home/index';
import Login from '../pages/Login/index';
import Register from '../pages/Register/index';
import Movies from '../pages/Movies/index';
import NotFound from '../pages/NotFound/index';
import { Route, Switch } from 'react-router-dom';

function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/cadastro' exact component={Register} />
            <Route path='/filmes' exact component={Movies} />
            <Route path='/nao-encontrado' exact component={NotFound} />
        </Switch> 
    );
}

export default Routes;