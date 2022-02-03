import AuthReducer from './AuthReducer';
import { createContext, useEffect, } from 'react';
import { useReducer } from 'react';
const INITIAL_STATE={
    user:JSON.parse(localStorage.getItem('user')) || null,
    isFetching:false,
    error:false,
};
export const AuthContex=createContext(INITIAL_STATE);

export const AuthContextProvider=({children})=>{
    const [state, dispatch]=useReducer(AuthReducer,INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(state.user));
    }, [state.user]);

    return(
        <AuthContex.Provider 
        value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch,
        }}
        >
        {children}
        </AuthContex.Provider>
    )
}