import React, { createContext, useContext, useState } from "react";

interface BlogTypeProps {
    id: string, tag: string, date: string, 
    content: string, quote: string, header: string,
    statement: string, img: string, title: string,
    link: string;

}

interface BlogContextType {
    blog: BlogTypeProps | null;
    setBlog: (blog: BlogTypeProps) => void;
}

interface BlogProviderProps {
    children: any;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const useBlog = () => {
    return (
        useContext(BlogContext)
    )
}

export const BlogProvider : React.FC<BlogProviderProps> = ({ children }) => {
    
    const [blog, setBlog] = useState<BlogTypeProps | null>(null)

    return (
        
        <BlogContext.Provider value={{blog, setBlog}} >
            {children}
        </BlogContext.Provider>
    )
}
