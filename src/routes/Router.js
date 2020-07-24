import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Component imports
import SignIn from '../components/auth/signin';
import SignUp from '../components/auth/signup';
import Users from '../views/users';
import Posts from '../views/posts';
import Admins from '../views/admins';
import Principal from '../views/principal';
import NewAdmin from '../views/newAdmin';
//PrivateRoutes
// import PrivateRoute from '../components/private';
// import PrivateSignIn from '../components/private/privateSignIn';
const Router = () => {
    return (
        <Switch>
            {/* <PrivateSignIn exact path='/sign-in' component={SignIn}></PrivateSignIn>
            <Route exact path='/sign-up' component={SignUp}></Route>
            <PrivateRoute exact path='/projects' component={Projects}></PrivateRoute> */}
            <Route exact path='/sign-in' component={SignIn}></Route>
            <Route exact path='/sign-up' component={SignUp}></Route>
            <Route exact path='/principal' component={Principal}></Route>
            <Route exact path='/users' component={Users}></Route>
            <Route exact path='/posts' component={Posts}></Route>
            <Route exact path='/admins' component={Admins}></Route>
            <Route exact path='/new-admin' component={NewAdmin}></Route>
            <Redirect from="/" to="/sign-in" />
            {/*<Route component={NotFound}></Route> */}
        </Switch>
    );
}

export default Router;
