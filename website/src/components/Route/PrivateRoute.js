import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, loginDetails, ...rest }) => {
    
    console.log(rest);

    return <Route {...rest} render={() => (loginDetails.jwtToken ? <Component {...rest} /> : <Redirect to="/auth" />)} />;
};

export default PrivateRoute;
