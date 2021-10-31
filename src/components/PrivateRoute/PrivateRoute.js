import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route, useHistory } from 'react-router';
import useAuth from '../../Hook/useAuth';


const PrivateRoute = (props) => {
    const {children, ...rest} = props;
    const { user, isLoading } = useAuth();
    console.log(user);
    const history = useHistory();

    if(isLoading){
        return <div className="text-center"><Spinner animation="border" variant="danger"></Spinner></div>
    }

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