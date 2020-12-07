import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Nav } from './components';
import { Calc, Main, List } from './routers';

const App = () => {
    
    return(
        <Router> 
            <Nav/>
            <Switch>
                {/* <Route path='/' component={Main}/> */}
                <Route path='/calc' component={Calc}/>
                <Route path='/list' component={List}/>
                <Redirect to='/calc' />
            </Switch>
        </Router>
    );
}

export default App;