// BaseFetcherV2.ts

import { useEffect } from "react";

interface BaseFetcherProps {
    service: (params?: any) => Promise<any>;
    onBaseFetched: (data: any) => void;
    params?: any;
}

const useBaseFetcher = ({ service, onBaseFetched, params }: BaseFetcherProps): void => {
    useEffect(() => {
        const fetchBase = async () => {
            try {
                const baseResponse = await service(params);
                onBaseFetched(baseResponse.data);
            } catch (error) {
                console.error('Error fetching base:', error);
            }
        };

        fetchBase();
    }, [service, onBaseFetched, params]);
};

export default useBaseFetcher;
