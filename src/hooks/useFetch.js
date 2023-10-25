import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();

                setData(json);
            } catch (err) {
                console.log(err);
            }
        };

        (async () => await fetchData())();
    }, [url]);
    
    return { data };
};
