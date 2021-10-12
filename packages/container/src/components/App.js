import React from 'react'
import MarketingApp from './MarketingApp';
import Header from "./Header";
import { BrowserRouter } from 'react-router-dom';

const App = () =>
(<BrowserRouter>
container
    <div>
        <Header />
        <MarketingApp />
    </div>
</BrowserRouter>
);


export default App;