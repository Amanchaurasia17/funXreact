
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const API_KEY = "a66d7690c7b5e59093f4d8a4"; 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency}`);
                
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const result = await response.json();
                console.log('API response:', result); 
                setData(result.conversion_rates); 
            } catch (err) {
                console.error('Error fetching currency data:', err);
                setError(err.message);
            }
        };

        fetchData();
    }, [currency]);

    if (error) {
        return { error }; 
    }

    return data;
}

export default useCurrencyInfo;
