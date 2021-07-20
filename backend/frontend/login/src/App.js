import React from 'react'
import {Route,  BrowserRouter,Switch} from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'

const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            < Route path='/' exact component={Login}/>
            < Route path ='/SignUp' exact component={SignUp}/>
        </Switch>
        </BrowserRouter>
    )
}

export default App
