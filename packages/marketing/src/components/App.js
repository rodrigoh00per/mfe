import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Landing from "./Landing";
import Pricing from "./Pricing";

const App = () => {
    const generateClassName = createGenerateClassName({ productionPrefix: "ma" })
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/pricing" component={Pricing} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>)
};


export default App;