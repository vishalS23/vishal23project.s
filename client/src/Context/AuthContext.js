import {createContext} from 'react';

export const myContext = createContext();

const reducer = (state, action) => {
    switch (action,type) {
        case "LOGIN":
            return { ...state, user: action.payload}
        case "Logout":
            return { ...state, user: null}
        default:
            return state        
    }

}

const initialState = {user: null}

const AuthContext = ({children}) => {
    const [state, dispatch]= userReducer(Reducer, initialState);

    const Login =(data) => {
        dispatch  ({type: "LOGIN", payload: data})

    }
    const Logout =() => {
        dispatch ({type: "LOGOUT"})
    }

    return (
        <myContext.Provider value={{state, Login, Logout}}>
            {children}
        </myContext.Provider>  
    )
}

export default AuthContext;