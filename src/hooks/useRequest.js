import { useState, useEffect } from 'react';

function useRequest(url, err) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchResource() {
            try {
                setLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
                // setData([]);
            } catch (error) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchResource();
    }, [url]);

    return { data, error, loading };
}

export default useRequest;
