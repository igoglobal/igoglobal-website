import { createContext, useContext, useState } from "react";


const BlogContext = createContext()

export const useBlog = () => {
    return (
        useContext(BlogContext)
    )
}

export const BlogProvider = ({ children }) => {
    
    const [blog, setBlog] = useState(null)

    return (
        
        <BlogContext.Provider value={{blog, setBlog}} >
            {children}
        </BlogContext.Provider>
    )
}
