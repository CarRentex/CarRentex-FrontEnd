const translate = (data: any) => {
    switch (data) {
        case 'AUTOMATIC':
            return 'Otomatik';
        case 'MANUAL':
            return 'Manuel';
    }
    switch (data) {
        case 'DIESEL':
            return 'Dizel';
        case 'GASOLINE':
            return 'Benzin';
        case 'ELECTRIC':
            return 'Elektrikli';
        case 'HYBRID':
            return 'Hibrit';
        case 'LPG':
            return 'LPG';
    };

    switch (data) {
        case 'ECONOMY':
            return 'Ekonomik';
        case 'MIDRANGE':
            return 'Orta';
        case 'LUXURY':
            return 'Lüks';
        case 'PRESTIGE':
            return 'Prestij';
        case 'COMMERCIAL':
            return 'Ticari';
        case 'COMFORT':
            return 'Konfor';
    };

};


export default translate;