import React, { lazy, Suspense, useState } from 'react'
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import Progress from './components/Progress';
const MarketingAppLazy = lazy(() => import("./components/MarketingApp"));
const AuthAppLazy = lazy(() => import("./components/AuthApp"));

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const generateClassName = createGenerateClassName({ productionPrefix: "co" })
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth" component={AuthAppLazy} >
                            <AuthAppLazy onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route path="/" component={MarketingAppLazy} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </StylesProvider>
    );
}


export default App;