import React, {Fragment, Suspense, useState} from 'react';
import Routes from "./Routes";
import {useRoutes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/_custom.scss';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

const LoadingOverlay = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse">loading ...</div>
    </div>
)

function App() {

    const RoutesRendered = useRoutes(Routes())
    const [loading] = useState<boolean>(false);

    if (loading)
        return LoadingOverlay
    return (
        <Fragment>
            <ToastContainer/>
            <Suspense fallback={LoadingOverlay}>
                {RoutesRendered}
            </Suspense>
        </Fragment>
    )
}

export default App;