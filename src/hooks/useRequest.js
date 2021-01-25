import { useState, useEffect } from 'react';

function useRequest(getMethod, url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchResource() {
            try {
                setLoading(true);
                const response = await getMethod(url);
                setData(response);
                // setData([]);
            } catch (e) {
                setError(e.toString());
            } finally {
                setLoading(false);
            }
        }

        fetchResource();
    }, [getMethod, url]);

    return { data, error, loading };
}

export default useRequest;
