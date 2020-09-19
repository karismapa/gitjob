export const types = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
}

export const action = {
    login: email => {
        return {
            type: types.LOGIN,
            payload: {
                email,
                isLoggedIn: true,
            },
        }
    },
    logout: () => {
        return {
            type: types.LOGOUT,
            payload: {
                email: '',
                isLoggedIn: false,
            }
        }
    },
}

export const initialState = {
    isLoggedIn: false,
    email: '',
}

export const authReducer = (state = initialState, action) => {
    const { type, payload } = action
  
    switch (type) {
        case types.LOGIN: {
            return {
                ...state,
                ...payload,
            }
        }
        case types.LOGOUT: {
            return {
                ...state,
                ...payload,
            }
        }
    }
  
    return state
}
