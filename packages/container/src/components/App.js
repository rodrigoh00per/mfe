import React from 'react'
import MarketingApp from './MarketingApp';
import Header from "./Header";
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
const App = () =>
(<BrowserRouter>
    <Header />
    <MarketingApp />

</BrowserRouter>
);


export default App;