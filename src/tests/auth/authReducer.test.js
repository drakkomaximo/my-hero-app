import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"

describe('Tests on authReducer', () => {

/*     const init = {
        name: 'Andrés',
        logged: true
    } */

    test('It must return the default state', () => {
        const state = authReducer({ logged: false }, {})
        expect(state).toEqual({ logged: false })
    })

    test('It must authenticate and set username', () => {
        const state = authReducer({ logged: false }, {
            type: types.login,
            payload: {
                name: 'Andrés'
            }
        })
        expect(state).toEqual({
            logged: true,
            name: 'Andrés'
        })
    })

    test('It must delete the username and set logged:false', () => {
        const state = authReducer({
            name: 'Andrés',
            logged: true
        }, {
            type: types.logout
        })
        expect(state).toEqual({
            logged: false
        })
    })
})
