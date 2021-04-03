import { mount } from "enzyme"
import { MemoryRouter, Router } from "react-router"
import { AuthContext } from "../../../auth/AuthContex"
import { Navbar } from "../../../components/iu/Navbar"
import { types } from "../../../types/types"
import '@testing-library/jest-dom'

describe('Tests on <Navbar />', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        heroUser: {
            logged: true,
            name: 'María'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    )

    afterEach(() => {
        jest.clearAllMocks()
    })

    test('It must show correctly', () => {
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.text-info').text().trim()).toBe('María')
    })

    test('It must call logout and use history', () => {

        wrapper.find('button').prop('onClick')()
        expect(contextValue.dispatch).toHaveBeenCalledTimes(1)
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        })
        expect( historyMock.replace ).toHaveBeenCalledWith('/login')

    })


})
