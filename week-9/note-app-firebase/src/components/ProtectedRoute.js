import React from 'react';
import {
  Redirect,
  Route,
} from 'react-router-dom';

import { getAuthStatus } from '../services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthed = getAuthStatus();

  return (
    <Route
      {...rest}
      render={props =>
        isAuthed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
