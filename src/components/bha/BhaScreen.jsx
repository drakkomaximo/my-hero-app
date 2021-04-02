import React from 'react'
import HeroList from '../heroes/HeroList'

const BhaScreen = () => {
    return (
        <div>
            <h1>BHA Screen</h1>
            <hr/>
            <HeroList
                publisher={'Shōnen Jump'}
            />
        </div>
    )
}

export default BhaScreen
