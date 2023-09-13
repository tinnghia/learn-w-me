import React, { useState } from "react";

export const CategoryContext = React.createContext();
export const ContextProvider = ({ children }) => {
    const [category, setCategory] = useState('clean_code');
    return (
        <CategoryContext.Provider value={{ category, setCategory, }}>
            {children}
        </CategoryContext.Provider>
    );
};


export const ChunkContext = React.createContext();
export const ChunkProvider = ({ children }) => {
    const [selectedChunk, setSelectedChunk] = useState({
        id: "",
        type: 1,
        title: "",
        content: "",
        category: "clean_code",
    });

    return (
        <ChunkContext.Provider value={{ selectedChunk, setSelectedChunk }}>
            {children}
        </ChunkContext.Provider>
    );
};
