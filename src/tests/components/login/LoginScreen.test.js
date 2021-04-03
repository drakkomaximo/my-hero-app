import { mount } from "enzyme"
import { AuthContext } from "../../../auth/AuthContex"
import LoginScreen from "../../../components/login/LoginScreen"
import { types } from "../../../types/types"

describe('Tests on <LoginScreen />', () => {

    const historyMock ={
        replace: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginScreen history={historyMock}/>
        </AuthContext.Provider>
    )

    test('It must show correctly', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test('It must do the dispatch and the navigate', () => {
        const handelClick = wrapper.find('button').prop('onClick')

        handelClick()

        expect( contextValue.dispatch ).toHaveBeenLastCalledWith({
            type: types.login,
            payload:{
                name:'Andrés'
            }
        })

        expect( historyMock.replace ).toHaveBeenCalledWith('/')

        localStorage.setItem('lastPath', '/dc')

        handelClick()

        expect( historyMock.replace ).toHaveBeenCalledWith('/dc')

    })


    
    
})
