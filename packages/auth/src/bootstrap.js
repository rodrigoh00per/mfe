import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
    const history = defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });
    if (onNavigate)
        history.listen(onNavigate);

    ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el)

    return {
        onParentNavigate: ({ pathname: nextPathName }) => {
            console.log("entre")
            const { pathname } = history.location;
            if (pathname !== nextPathName)
                history.push(nextPathName)
        }
    }
}


if (process.env.NODE_ENV === "development") {

    const devRoot = document.querySelector("#_auth-dev-root")
    if (devRoot)
        mount(devRoot, { defaultHistory: createBrowserHistory() })
}


export { mount };