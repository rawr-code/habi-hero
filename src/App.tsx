import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Layout from './components/organisms/Layout'
import HomePage from './components/pages/HomePage'
import SalePage from './components/pages/SalePage'

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/vender">
                        <SalePage />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Layout>
        </Router>
    )
}

export default App
