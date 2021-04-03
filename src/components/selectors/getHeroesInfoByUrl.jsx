import { heroesInfo } from '../../data/heroesInfo'

export const getHeroesInfoByUrl = (url) => {

    const findGeroInfo = heroesInfo.filter( heroInfo => heroInfo.url === url)
    return findGeroInfo[0]

}
