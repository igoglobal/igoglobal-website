import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useLoader () {
    const [loading, setLoading] = useState(true)
    const location = useLocation()

    useEffect(() => {
        setLoading(true)

        const timer = setTimeout(() => {
            setLoading(false)
        }, 2500);

        return () => clearTimeout(timer)
    }, [location])

    return loading
}

export default useLoader;