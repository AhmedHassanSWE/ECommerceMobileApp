import * as ActionTypes from '../actions/ActionTypes'

const initialState = {
    token: '',
    user: null,
    isSigningIn: false,
    signInSuccess: null,
    signInFaliure: null,
    isConfirmingCode: false,
    confirmCodeSuccess: null,
    confirmCodeFaliure: null,
}

function authReducer(state = initialState, action) {
    switch(action.type) {
        case ActionTypes.SET_TOKEN:
        return {
            ...state,
            token: action.payload.token
        }

        case ActionTypes.SET_USER:
        return {
            ...state,
            user: action.payload.user
        }

        case ActionTypes.SIGNIN_START:
            return {
                ...state,
                isSigningIn: true,
            }

            case ActionTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                isSigningIn: false,
                signInSuccess: {}
            }

            case ActionTypes.SIGNIN_FALIURE:
            return {
                ...state,
                isSigningIn: false,
                signInFaliure: {}
            }
            case ActionTypes.CONFIRM_START:
            return {
                ...state,
                isConfirmingCode: true,
            }

            case ActionTypes.CONFIRM_SUCCESS:
            return {
                ...state,
                isConfirmingCode: false,
                confirmCodeSuccess: {}
            }

            case ActionTypes.CONFIRM_FALIURE:
            return {
                ...state,
                isConfirmingCode: false,
                confirmCodeFaliure: {}
            }

        default:
            return state;
    }
}

export default authReducer;