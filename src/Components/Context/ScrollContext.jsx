import React, { createContext, useContext } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => (
    <ScrollContext.Provider value={{}}>{children}</ScrollContext.Provider>
);

export const useScroll = () => {
    const context = useContext(ScrollContext);
    return context;
};