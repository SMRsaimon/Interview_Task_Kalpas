import React, { createContext, useReducer } from 'react';
import { initialState } from '../Reducer/initialState';
import { reducer } from '../Reducer/reducer';
export const ViewContext = createContext();



const ViewContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ViewContext.Provider value={{ state, dispatch }}>
      {children}
    </ViewContext.Provider>
  );
};

export default ViewContextProvider;
