import React from 'react'
import { useRouteMatch, Route, Switch } from 'react-router-dom'

import ClientInfo from '../ClientInfo'

const SalePage: React.FC = ({ children }) => {
    const match = useRouteMatch()
    
    return (
        <Switch>
            <Route path={`${match.path}/`} component={ClientInfo} exact />
            <Route path={`${match.path}/:step`} component={ClientInfo} />
        </Switch>
    )
}

export default SalePage
