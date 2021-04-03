import { mount } from "enzyme"
import { AuthContext } from "../../auth/AuthContex"
import AppRouter from "../../routers/AppRouter"

describe('Tests on <AppRouter />', () => {

    test('It must login if user is not autenticated', () => {

        const contextValue = {
            dispatch: jest.fn(),
            heroUser: {
                logged: false
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        )

        expect( wrapper ).toMatchSnapshot()
    })

    test('It must marvel component if user is autenticated', () => {
        const contextValue = {
            dispatch: jest.fn(),
            heroUser: {
                logged: true,
                name:'Andrés'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        )

        expect( wrapper.find('.navbar').exists() ).toBe(true)
    })
    
    
})
