import React, { useMemo } from 'react'
import HeroList from '../heroes/HeroList'
import { getHeroesInfoByUrl } from '../selectors/getHeroesInfoByUrl'

const HeroContainer = ({location}) => {

    const { label, publisher } = useMemo(() => getHeroesInfoByUrl ( location.pathname ), [ location.pathname ])

    const renderComponent = () =>(
        <div className='animate__animated animate__fadeIn'>
            <h1>{`${label}'s Heroes List`} </h1>
            <hr/>
            <HeroList
                publisher={publisher}
            />
        </div>
    )

    return (renderComponent()
    )
}

export default HeroContainer