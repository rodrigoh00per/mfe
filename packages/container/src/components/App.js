import React from 'react'
import MarketingApp from './MarketingApp';
import Header from "./Header";
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
const App = () => {
    const generateClassName = createGenerateClassName({ productionPrefix: "co" })
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Header />
                <MarketingApp />
            </BrowserRouter>
        </StylesProvider>
    );
}


export default App;