import React, { createContext, useReducer } from 'react';
import { initialState } from '../state/initialState';
import { reducer } from '../state/reducer';
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
