import React from 'react'
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Landing from "./Landing";
import Pricing from "./Pricing";

const App = ({history}) => {
    const generateClassName = createGenerateClassName({ productionPrefix: "ma" })
    return (
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/pricing" component={Pricing} />
                </Switch>
            </Router>
        </StylesProvider>)
};


export default App;