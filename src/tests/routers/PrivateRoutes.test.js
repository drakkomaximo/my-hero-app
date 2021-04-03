import { mount } from "enzyme"
import { MemoryRouter } from "react-router"
import PrivateRoutes from "../../routers/PrivateRoutes"

describe('Tests on <PrivateRoutes />', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem= jest.fn()

    test('It must show the component if user is authenticated and save it on localStorage', () => {
        
        //When i need to render a HighOrdercomponent in my test, we can use mount(replace shallow) for that 
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoutes
                    isAuthenticated={true}
                    component={() => <span>Listo</span>}
                    {...props}
                />
            </MemoryRouter>
        )
        expect( wrapper.find('span').exists() ).toBe(true)
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel')
    })

    test('It must block the component if user is not authenticated', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoutes
                    isAuthenticated={false}
                    component={() => <span>Listo</span>}
                    {...props}
                />
            </MemoryRouter>
        )
        expect( wrapper.find('span').exists() ).toBe(false)
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel')
    })
    
})
