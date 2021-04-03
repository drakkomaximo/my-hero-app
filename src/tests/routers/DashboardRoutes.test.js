import { mount } from "enzyme"
import { MemoryRouter } from "react-router"
import { AuthContext } from "../../auth/AuthContex"
import DashboardRoutes from "../../routers/DashboardRoutes"

describe('Tests on <DashboardRoutes />', () => {
    test('It must show correctly', () => {

        const contextValue = {
            dispatch: jest.fn(),
            heroUser: {
                logged: true,
                name: 'Andrés'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot()
        expect( wrapper.find('.text-info').text().trim() ).toBe('Andrés')

    })

})
