import React from "react";
import {Redirect, Route } from "react-router-dom";


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


const AuthorizedRoute = (props) => {
    return (
      <Route { ...props } />
    );
};

const AuthenticatedRoute = (props) => {
  const {component: Component, ...rest} = props;


  if (!props.authRoute) {
    return <Redirect to="/" />;
  }

  return <AuthorizedRoute {...rest} render={renderComponent(Component)} />;
};

export default AuthenticatedRoute;
