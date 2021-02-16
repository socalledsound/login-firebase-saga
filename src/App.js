import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from './firebase/firebase.utils';

import Header from './components/Header';
import HomePage from './components/HomePage';
import SignInPage from './components/SignInPage';

console.log(auth);

class App extends Component {
    state = {  }

    // componentDidMount(){
    //     // const { currentUser } = this.props;
    //     // console.log(currentUser);
    // }

    render() { 
        return ( 
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route 
                        exact path='/login'
                        render={() => this.props.currentUser ? (
                            <Redirect to='/' />
                        ) : (
                            <SignInPage />
                        )}
                    />
                </Switch>
            </div>
         );
    }
}

const mapStateToPops = state => ({
    currentuser: state.currentUser,
})
 
export default connect(mapStateToPops)(App);