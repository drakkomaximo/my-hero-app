import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router"
import { AuthContext } from "../../../auth/AuthContex"
import SearchScreen from "../../../components/search/SearchScreen"

describe('Tests on <SearchScreen />', () => {

    const historyMock = {
        push: jest.fn()
    }

    const wrapper = mount(
        <MemoryRouter initialEntries={['/search']}>
            <Route path='/search' component={SearchScreen} />
        </MemoryRouter>
    )

    test('It must show the default values correctly', () => {
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.alert').text().trim()).toBe('Search a hero')
    })

    test('It must activate reset function', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path='/search' component={SearchScreen} />
            </MemoryRouter>
        )

        expect( wrapper.find('input').prop('value') ).toBe('')
        expect( wrapper.find('HeroCard').exists() ).toBe(true)
    })

    test('It must show an error if a hero does not exist', () => {
        const queryString = 'batmanwerewrwerwe'
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search?q=${queryString}`]}>
                <Route path='/search' component={SearchScreen} />
            </MemoryRouter>
        )
        expect(wrapper.find('.alert-danger').text().trim()).toBe(`There is no a hero with ${queryString}`)
    })

    test('It must call push function of history', () => {
        const queryString = 'batman'
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search?q=${queryString}`]}>
                <Route path='/search' component={() => <SearchScreen history={ historyMock }/>} />
            </MemoryRouter>
        )

        wrapper.find('input').simulate('change', {
            target: {
                name:'searchHero',
                value: queryString
            }
        })

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        })

        expect( historyMock.push ).toHaveBeenCalledWith(`?q=${queryString}`)
    })
    
    


})
