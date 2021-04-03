import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import HeroContainer from '../components/heroContainer/HeroContainer'
import HeroScreen from '../components/heroes/HeroScreen'
import { Navbar } from '../components/iu/Navbar'
import SearchScreen from '../components/search/SearchScreen'

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className='container mt-2'>
                <Switch>
                    <Route exact path='/marvel' component={ HeroContainer } />
                    <Route exact path='/dc' component={ HeroContainer } />
                    <Route exact path='/bha' component={ HeroContainer } />
                    <Route exact path='/hero/:heroId' component={ HeroScreen } />
                    <Route exact path='/search' component={ SearchScreen } />

                    <Redirect to='/marvel'/>

                </Switch>
            </div>
            
        </>
    )
}

export default DashboardRoutes
