import React from 'react'
import { Switch, Router, Route } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import SignIn from "./Signin";
import SignUp from "./Signup";

const App = ({ history, onSignIn }) => {
    
    const generateClassName = createGenerateClassName({ productionPrefix: "au" })
    return (
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/auth/signin"  >
                        <SignIn onSignIn={onSignIn} />
                    </Route>
                    <Route exact path="/auth/signup"  >
                        <SignUp  onSignIn={onSignIn}/>
                    </Route>

                </Switch>
            </Router>
        </StylesProvider>)
};


export default App;