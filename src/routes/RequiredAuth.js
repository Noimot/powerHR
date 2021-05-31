// import React from "react";
// import { Redirect } from "react-router-dom";


// function RequiredAuth({ component }) {
//   if (!localStorage.getItem("x-access-token")) {
//     return <Redirect to="/" />;
//   }
//   return <component />;
// }
// export default RequiredAuth;

import React from "react";
import {Redirect, Route } from "react-router-dom";
import { userToken } from '../redux/api/config';

/**
 * Renders the component if the user is authenticated
 *
 * @param {Component} Component
 *
 * @returns {JSX}
 */
const renderComponent = (Component) => (props) => {
  return <Component {...props} />;
};

/**
 * This Component returns a new
 * route based on authenticated status
 *
 * @returns {JSX}
 */

export const isAuthenticated = () => {
  const token = userToken(); 
  return !!token;
};

const AuthorizedRoute = (props) => {
    return (
      <Route { ...props } />
    );
};

const AuthenticatedRoute = (props) => {
  const {component: Component, ...rest} = props;
  const checkisAuthenticated = isAuthenticated();
  const token = userToken();
//   const user = decodeToken(token);

  if (!checkisAuthenticated) {
    return <Redirect to="/" />;
  }

  return <AuthorizedRoute {...rest} render={renderComponent(Component)} />;
};

export default AuthenticatedRoute;
