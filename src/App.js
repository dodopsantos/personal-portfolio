import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss";
import "./assets/demo/demo.css";

import routes from './routes';
import Main from './templates/Main';

const PrivateRoute = ({ Component, ...otherProps }) => {  
    return <Main component={Component} />;  
}

function App() {  
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
    document.body.classList.remove("profile-page");
    document.body.classList.remove("sidebar-collapse");
    };
});  
  return (
    <Router>
        {routes.map(route => <Route exact path={route.path} render={() => <PrivateRoute Component={route.component} />} />)}        
    </Router>
  );
}

export default App;
