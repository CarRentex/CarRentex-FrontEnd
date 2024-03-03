import React, { useEffect } from "react";

interface BaseFetcherProps {
    service: (...params: any[]) => Promise<any>; // Değişen sayıda parametre desteklemek için rest parametresi kullanılır
    onBaseFetched: (data: any) => void;
    params?: any[];
}

const BaseFetcherV3: React.FC<BaseFetcherProps> = ({ service, onBaseFetched, params = [] } : BaseFetcherProps) => {
    useEffect(() => {
        const fetchBase = async () => {
            try {
                const baseResponse = await service(...params); // Rest parametrelerini spread operatörü ile geçir
                onBaseFetched(baseResponse.data);
            } catch (error) {
                console.error('Error fetching base:', error);
            }
        };

        fetchBase();
    }, []); // useEffect bağımlılıklarına params ekleyin

    return null;
};

export default BaseFetcherV3;