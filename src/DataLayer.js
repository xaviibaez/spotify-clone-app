import React, { createContext, useContext, useReducer} from "react";

//Preparamos el objeto dataLayer
export const DataLayerContext = createContext();

//Objeto dataLayer
/*
initialState       
reducer         
childer:        Las etiquetas que hay dentro de <DataLayer> en el index.js
*/
export const DataLayer = ({initialState, reducer, children}) => (
    <DataLayerContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);