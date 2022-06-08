import React from 'react'
import {    useLocation
} from 'react-router-dom';
export const LocationListener = () => {
    const location = useLocation();
    React.useEffect(() => {
     console.log(location.pathname);
     localStorage.setItem('lastPath', location.pathname);
   }, [location]);

    return (
        <>
            
        </>
    )
}
