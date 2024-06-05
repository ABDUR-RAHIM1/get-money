"use client"
import { createContext, useState } from "react"

// Create the context
export const HomeContext = createContext()

// Create a provider component
export default function HomeContextProvider({ children }) {
    const [detailsData, setDetailsData] = useState({})
    
    const value = {
        detailsData, setDetailsData
    }

    return (
        <HomeContext.Provider value={value}>
            {children}
        </HomeContext.Provider>
    )
}

