import { useEffect, useState } from 'react';

const useRevenue = () => {
    const [revenue,setRevenue] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setRevenue(data))
    },[])
    return [revenue,setRevenue]
};

export default useRevenue;