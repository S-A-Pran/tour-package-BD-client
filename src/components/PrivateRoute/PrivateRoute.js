import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route, useHistory } from 'react-router';
import useAuth from '../../Hook/useAuth';


const PrivateRoute = (props) => {
    const {children, ...rest} = props;
    const { user } = useAuth();
    console.log(user);

    return (
        <div>
            <Route 
            {...rest}
            render={({location}) =>
                user?.email ? (children) : (
                <Redirect 
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}></Redirect>
                )
            }
            >
            </Route>
        </div>
    );
};

export default PrivateRoute;