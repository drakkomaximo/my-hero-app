import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import BhaScreen from '../components/bha/BhaScreen'
import DcScreen from '../components/dc/DcScreen'
import HeroScreen from '../components/heroes/HeroScreen'
import { Navbar } from '../components/iu/Navbar'
import MarvelScreen from '../components/marvel/MarvelScreen'
import SearchScreen from '../components/search/SearchScreen'

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className='container mt-2'>
                <Switch>
                    <Route exact path='/marvel' component={ MarvelScreen } />
                    <Route exact path='/hero/:heroId' component={ HeroScreen } />
                    <Route exact path='/dc' component={ DcScreen } />
                    <Route exact path='/bha' component={ BhaScreen } />
                    <Route exact path='/search' component={ SearchScreen } />

                    <Redirect to='/marvel'/>

                </Switch>
            </div>
            
        </>
    )
}

export default DashboardRoutes
