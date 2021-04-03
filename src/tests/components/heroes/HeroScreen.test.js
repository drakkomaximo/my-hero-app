import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router"
import HeroScreen from "../../../components/heroes/HeroScreen"

describe('Tests on <HeroScreen />', () => {
    
    const historyMock = {
        replace: jest.fn(),
    }
    
    test('It must show correctly', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={ historyMock }/>
            </MemoryRouter>
        )

        expect( wrapper ).toMatchSnapshot()
    })

    test('It must show redirect component if there are not arguments in the URL', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={ historyMock }/>
            </MemoryRouter>
        )

        expect( wrapper.find('Redirect').exists() ).toBe(true)
    })

    test('It must show a hero if the parameter exists and finds it', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/bha-dynamight']}>
                <Route path='/hero/:heroId' component={ HeroScreen }/>
            </MemoryRouter>
        )

        expect( wrapper.find('.row').exists() ).toBe(true)
    })

    test('It must call the HandleReturn function and replace function should have been called', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/bha-dynamight']}>
                <Route 
                    path='/hero/:heroId' 
                    component={ () => <HeroScreen history={historyMock}/>  }/>
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')()
        expect( historyMock.replace ).toHaveBeenCalledTimes(1)
        expect( historyMock.replace ).toHaveBeenCalledWith('/bha')

    })

    test('It must call redirect if the hero does not exists', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/bha-dynamightdfsfdsdf']}>
                <Route 
                    path='/hero/:heroId' 
                    component={ () => <HeroScreen history={historyMock}/>  }/>
            </MemoryRouter>
        )

        expect( wrapper.text() ).toBe('')
    })
    
    
    
    
})
