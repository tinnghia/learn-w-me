import React, { useState } from "react";

export const CategoryContext = React.createContext();
export const ContextProvider = ({ children }) => {
    const [category, setCategory] = useState('database');

    return (
        <CategoryContext.Provider value={{ category, setCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};