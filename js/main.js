const app = new Vue ({
    el: '#app',
    data: {

        languageLoop: Object,
        languageSelected: 'english',
        beenLoop: [],
        
        english: {

            subHead: 'FUTURE SEEDS',

            title: 'Where our seeds went',

            subtitle: 'All the top countries that we helped with our genebank',

            seed: ['BEANS' , 'CASSAVA', 'FORAGES'],

            cardReceived: 'RECEIVED:',

            callToAction: 'Explore clicking dots',

        },

        spanish: {

            subHead: 'SEMILLAS DEL FUTURO',

            title: 'Hacia donde fueron nuestras semillas',

            subtitle: 'Todos los países a los que ayudamos con nuestro banco de germoplasma',

            seed: ['FRÍJOLE' , 'YUCA', 'FORRAGES'],

            cardReceived: 'HA RECIBIDO:',

            callToAction: 'Explora haciendo clic en los puntos',

        },

        countries: [

            /* AUSTRALIA */
            {
                name: 'AUSTRALIA',
                
                ref: 'AUSTRALIA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* FIJI */
            {
                name: 'FIJI',
                
                ref: 'FIJI',

                rightContent: {

                    beens: false,
                    cassava: true,
                    forages: true,
                },
            },

            /* NEW_CALEDONIA */
            {
                name: 'NEW CALEDONIA',
                
                ref: 'NEW_CALEDONIA',

                rightContent: {

                    beens: false,
                    cassava: false,
                    forages: true,
                },
            },

            /* NEW_ZEALAND */
            {
                name: 'NEW ZEALAND',
                
                ref: 'NEW_ZEALAND',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* PHILIPPINES */
            {
                name: 'PHILIPPINES',
                
                ref: 'PHILIPPINES',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* TIMOR_LESTE */
            {
                name: 'TIMOR LESTE',
                
                ref: 'TIMOR_LESTE',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: false,
                },
            },

            /* TONGA */
            {
                name: 'TONGA',
                
                ref: 'TONGA',

                rightContent: {

                    beens: false,
                    cassava: true,
                    forages: true,
                },
            },

            /* VANUATU */
            {
                name: 'VANUATU',
                
                ref: 'VANUATU',

                rightContent: {

                    beens: false,
                    cassava: true,
                    forages: false,
                },
            },

            /* SAMOA */
            {
                name: 'SAMOA',
                
                ref: 'SAMOA',

                rightContent: {

                    beens: false,
                    cassava: true,
                    forages: false,
                },
            },

            /* SAUDI_ARABIA */
            {
                name: 'SAUDI ARABIA',
                
                ref: 'SAUDI_ARABIA',

                rightContent: {

                    beens: false,
                    cassava: true,
                    forages: false,
                },
            },

            /* IRAN */
            {
                name: 'IRAN',
                
                ref: 'IRAN',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* TURKEY */
            {
                name: 'TURKEY',
                
                ref: 'TURKEY',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* AUSTRIA */
            {
                name: 'AUSTRIA',
                
                ref: 'AUSTRIA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: false,
                },
            },

            /* BELGIUM */
            {
                name: 'BELGIUM',
                
                ref: 'BELGIUM',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* BULGARIA */
            {
                name: 'BULGARIA',
                
                ref: 'BULGARIA',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* BELARUES */
            {
                name: 'BELARUES',
                
                ref: 'BELARUES',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: false,
                },
            },

            /* SWITZERLAND */
            {
                name: 'SWITZERLAND',
                
                ref: 'SWITZERLAND',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* CZECHOSLOVAKIA */
            {
                name: 'CZECHOSLOVAKIA',
                
                ref: 'CZECHOSLOVAKIA',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: false,
                },
            },

            /* CYPRUS */
            {
                name: 'CYPRUS',
                
                ref: 'CYPRUS',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: false,
                },
            },

            /* GERMANY */
            {
                name: 'GERMANY',
                
                ref: 'GERMANY',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* DENMARK */
            {
                name: 'DENMARK',
                
                ref: 'DENMARK',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* SPAIN */
            {
                name: 'SPAIN',
                
                ref: 'SPAIN',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* ESTONIA */
            {
                name: 'ESTONIA',
                
                ref: 'ESTONIA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* FRANCE */
            {
                name: 'FRANCE',
                
                ref: 'FRANCE',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* UNITED_KINGDOM */
            {
                name: 'UNITED KINGDOM',
                
                ref: 'UNITED_KINGDOM',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* GREECE */
            {
                name: 'GREECE',
                
                ref: 'GREECE',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: false,
                },
            },

            /* CROATIA */
            {
                name: 'CROATIA',
                
                ref: 'CROATIA',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: false,
                },
            },

            /* HUNGARY */
            {
                name: 'HUNGARY',
                
                ref: 'HUNGARY',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* IRELAND */
            {
                name: 'IRELAND',
                
                ref: 'IRELAND',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* ITALY */
            {
                name: 'ITALY',
                
                ref: 'ITALY',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* NETHERLANDS */
            {
                name: 'NETHERLANDS',
                
                ref: 'NETHERLANDS',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* POLAND */
            {
                name: 'POLAND',
                
                ref: 'POLAND',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* PORTUGAL */
            {
                name: 'PORTUGAL',
                
                ref: 'PORTUGAL',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* SLOVAKIA */
            {
                name: 'SLOVAKIA',
                
                ref: 'SLOVAKIA',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: false,
                },
            },

            /* SLOVENIA */
            {
                name: 'SLOVENIA',
                
                ref: 'SLOVENIA',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: false,
                },
            },

            /* SWEDEN */
            {
                name: 'SWEDEN',
                
                ref: 'SWEDEN',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* INDONESIA */
            {
                name: 'INDONESIA',
                
                ref: 'INDONESIA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* RUSSIA */
            {
                name: 'RUSSIA',
                
                ref: 'RUSSIA',

                rightContent: {

                    beens: false,
                    cassava: false,
                    forages: true,
                },
            },

            /* PAKISTAN */
            {
                name: 'PAKISTAN',
                
                ref: 'PAKISTAN',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* BANGLADESH */
            {
                name: 'BANGLADESH',
                
                ref: 'BANGLADESH',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* BHUTAN */
            {
                name: 'BHUTAN',
                
                ref: 'BHUTAN',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* MYANMAR_BURMA */
            {
                name: 'MYANMAR BURMA',
                
                ref: 'MYANMAR_BURMA',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: false,
                },
            },

            /* CHINA */
            {
                name: 'CHINA',
                
                ref: 'CHINA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* HONG_KONG */
            {
                name: 'HONG KONG',
                
                ref: 'HONG_KONG',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* INDIA */
            {
                name: 'INDIA',
                
                ref: 'INDIA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* JAPAN */
            {
                name: 'JAPAN',
                
                ref: 'JAPAN',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* CAMBODIA */
            {
                name: 'CAMBODIA',
                
                ref: 'CAMBODIA',

                rightContent: {

                    beens: false,
                    cassava: true,
                    forages: false,
                },
            },

            /* KOREA_REPUBLIC_OF */
            {
                name: 'KOREA REPUBLIC OF',
                
                ref: 'KOREA_REPUBLIC_OF',

                rightContent: {

                    beens: false,
                    cassava: true,
                    forages: true,
                },
            },

            /* LAO */
            {
                name: 'LAO',
                
                ref: 'LAO',

                rightContent: {

                    beens: false,
                    cassava: true,
                    forages: true,
                },
            },

            /* SRI_LANKA */
            {
                name: 'SRI LANKA',
                
                ref: 'SRI_LANKA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* MONGOLIA */
            {
                name: 'MONGOLIA',
                
                ref: 'MONGOLIA',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: false,
                },
            },

            /* MALAYSIA */
            {
                name: 'MALAYSIA',
                
                ref: 'MALAYSIA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* NEPAL */
            {
                name: 'NEPAL',
                
                ref: 'NEPAL',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* KOREA_DEMOCR_S_REPUB */
            {
                name: 'KOREA DEMOCR S REPUB',
                
                ref: 'KOREA_DEMOCR_S_REPUB',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* SINGAPORE */
            {
                name: 'SINGAPORE',
                
                ref: 'SINGAPORE',

                rightContent: {

                    beens: false,
                    cassava: true,
                    forages: false,
                },
            },

            /* THAILAND */
            {
                name: 'THAILAND',
                
                ref: 'THAILAND',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* TAIWAN_PROVINCE_OF_CHINA */
            {
                name: 'TAIWAN PROVINCE OF CHINA',
                
                ref: 'TAIWAN_PROVINCE_OF_CHINA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: false,
                },
            },

            /* VIETNAM */
            {
                name: 'VIETNAM',
                
                ref: 'VIETNAM',

                rightContent: {

                    beens: false,
                    cassava: true,
                    forages: true,
                },
            },

            /* ARGENTINA */
            {
                name: 'ARGENTINA',
                
                ref: 'ARGENTINA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* PARAGUAY */
            {
                name: 'PARAGUAY',
                
                ref: 'PARAGUAY',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* COLOMBIA */
            {
                name: 'COLOMBIA',
                
                ref: 'COLOMBIA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* BRAZIL */
            {
                name: 'BRAZIL',
                
                ref: 'BRAZIL',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* EQUADOR */
            {
                name: 'EQUADOR',
                
                ref: 'EQUADOR',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* VENEZUELA */
            {
                name: 'VENEZUELA',
                
                ref: 'VENEZUELA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* PERU */
            {
                name: 'PERU',
                
                ref: 'PERU',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* URUGUAY */
            {
                name: 'URUGUAY',
                
                ref: 'URUGUAY',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* GUYANA */
            {
                name: 'GUYANA',
                
                ref: 'GUYANA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* GUATEMALA */
            {
                name: 'GUATEMALA',
                
                ref: 'GUATEMALA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* COSTA_RICA */
            {
                name: 'COSTA RICA',
                
                ref: 'COSTA_RICA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* HONDURAS */
            {
                name: 'HONDURAS',
                
                ref: 'HONDURAS',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* PANAMA */
            {
                name: 'PANAMA',
                
                ref: 'PANAMA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* MEXICO */
            {
                name: 'MEXICO',
                
                ref: 'MEXICO',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* ANTIGUA_AND_BARBUDA */
            {
                name: 'ANTIGUA AND BARBUDA',
                
                ref: 'ANTIGUA_AND_BARBUDA',

                rightContent: {

                    beens: false,
                    cassava: false,
                    forages: true,
                },
            },

            /* BONAIRE_SAINT_EUSTATIUS_AND_SABA */
            {
                name: 'BONAIRE SAINT EUSTATIUS AND SABA',
                
                ref: 'BONAIRE_SAINT_EUSTATIUS_AND_SABA',

                rightContent: {

                    beens: false,
                    cassava: false,
                    forages: true,
                },
            },

            /* BAHAMAS */
            {
                name: 'BAHAMAS',
                
                ref: 'BAHAMAS',

                rightContent: {

                    beens: false,
                    cassava: true,
                    forages: false,
                },
            },

            /* BOLIVIA */
            {
                name: 'BOLIVIA',
                
                ref: 'BOLIVIA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* BARBADOS */
            {
                name: 'BARBADOS',
                
                ref: 'BARBADOS',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* CUBA */
            {
                name: 'CUBA',
                
                ref: 'CUBA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* DOMINICA */
            {
                name: 'DOMINICA',
                
                ref: 'DOMINICA',

                rightContent: {

                    beens: false,
                    cassava: true,
                    forages: false,
                },
            },

            /* DOMINICAN_REPUBLIC */
            {
                name: 'DOMINICAN REPUBLIC',
                
                ref: 'DOMINICAN_REPUBLIC',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* GUADELOUPE */
            {
                name: 'GUADELOUPE',
                
                ref: 'GUADELOUPE',

                rightContent: {

                    beens: false,
                    cassava: false,
                    forages: true,
                },
            },

            /* GRENADA */
            {
                name: 'GRENADA',
                
                ref: 'GRENADA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: false,
                },
            },

            /* HAITI */
            {
                name: 'HAITI',
                
                ref: 'HAITI',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* JAMAICA */
            {
                name: 'JAMAICA',
                
                ref: 'JAMAICA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /*  SAINT_LUCIA */
            {
                name: ' SAINT LUCIA',
                
                ref: ' SAINT_LUCIA',

                rightContent: {

                    beens: false,
                    cassava: true,
                    forages: true,
                },
            },

            /* MARTINIQUE */
            {
                name: 'MARTINIQUE',
                
                ref: 'MARTINIQUE',

                rightContent: {

                    beens: false,
                    cassava: true,
                    forages: true,
                },
            },

            /* NICARAGUA */
            {
                name: 'NICARAGUA',
                
                ref: 'NICARAGUA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* PUERTO_RICO */
            {
                name: 'PUERTO RICO',
                
                ref: 'PUERTO_RICO',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* EL_SALVADOR */
            {
                name: 'EL SALVADOR',
                
                ref: 'EL_SALVADOR',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* NETHERLANDS_ANTILLES */
            {
                name: 'NETHERLANDS ANTILLES',
                
                ref: 'NETHERLANDS_ANTILLES',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* TRINIDAD */
            {
                name: 'TRINIDAD',
                
                ref: 'TRINIDAD',

                rightContent: {

                    beens: false,
                    cassava: true,
                    forages: true,
                },
            },

            /* BELIZE */
            {
                name: 'BELIZE',
                
                ref: 'BELIZE',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* UNITED_STATE */
            {
                name: 'UNITED STATE',
                
                ref: 'UNITED_STATE',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* MALAWI */
            {
                name: 'MALAWI',
                
                ref: 'MALAWI',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* KENYA */
            {
                name: 'KENYA',
                
                ref: 'KENYA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* CENTRAL_AFRICAN_REPUBLIC */
            {
                name: 'CENTRAL AFRICAN REPUBLIC',
                
                ref: 'CENTRAL_AFRICAN_REPUBLIC',

                rightContent: {

                    beens: false,
                    cassava: false,
                    forages: true,
                },
            },

            /* REPUBLIC_CONGO */
            {
                name: 'REPUBLIC CONGO',
                
                ref: 'REPUBLIC_CONGO',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* CAMERON */
            {
                name: 'CAMERON',
                
                ref: 'CAMERON',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* GABON */
            {
                name: 'GABON',
                
                ref: 'GABON',

                rightContent: {

                    beens: false,
                    cassava: false,
                    forages: true,
                },
            },

            /* DEMOCRATIC_CONGO */
            {
                name: 'DEMOCRATIC CONGO',
                
                ref: 'DEMOCRATIC_CONGO',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* NIGERIA */
            {
                name: 'NIGERIA',
                
                ref: 'NIGERIA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* UGANDA */
            {
                name: 'UGANDA',
                
                ref: 'UGANDA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* RWAND */
            {
                name: 'RWAND',
                
                ref: 'RWAND',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* BURUNDI */
            {
                name: 'BURUNDI',
                
                ref: 'BURUNDI',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* ETHOPIA */
            {
                name: 'ETHOPIA',
                
                ref: 'ETHOPIA',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* SOMALIA */
            {
                name: 'SOMALIA',
                
                ref: 'SOMALIA',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: false,
                },
            },

            /* SUDAN */
            {
                name: 'SUDAN',
                
                ref: 'SUDAN',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: false,
                },
            },

            /* EGYPT */
            {
                name: 'EGYPT',
                
                ref: 'EGYPT',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* LIBYA */
            {
                name: 'LIBYA',
                
                ref: 'LIBYA',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: false,
                },
            },

            /* MOROCCO */
            {
                name: 'MOROCCO',
                
                ref: 'MOROCCO',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* MALI */
            {
                name: 'MALI',
                
                ref: 'MALI',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* SENEGAL */
            {
                name: 'SENEGAL',
                
                ref: 'SENEGAL',

                rightContent: {

                    beens: false,
                    cassava: false,
                    forages: true,
                },
            },

            /* BURKINA_FASO */
            {
                name: 'BURKINA FASO',
                
                ref: 'BURKINA_FASO',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* GHANA */
            {
                name: 'GHANA',
                
                ref: 'GHANA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* GUINEA */
            {
                name: 'GUINEA',
                
                ref: 'GUINEA',

                rightContent: {

                    beens: false,
                    cassava: false,
                    forages: true,
                },
            },

            /* IVORY */
            {
                name: 'IVORY',
                
                ref: 'IVORY',

                rightContent: {

                    beens: false,
                    cassava: false,
                    forages: true,
                },
            },

            /* SIERRA_LEONE */
            {
                name: 'SIERRA LEONE',
                
                ref: 'SIERRA_LEONE',

                rightContent: {

                    beens: false,
                    cassava: false,
                    forages: true,
                },
            },

            /* LIBERIA */
            {
                name: 'LIBERIA',
                
                ref: 'LIBERIA',

                rightContent: {

                    beens: false,
                    cassava: false,
                    forages: true,
                },
            },

            /* TOGO */
            {
                name: 'TOGO',
                
                ref: 'TOGO',

                rightContent: {

                    beens: false,
                    cassava: false,
                    forages: true,
                },
            },

            /* BENIN */
            {
                name: 'BENIN',
                
                ref: 'BENIN',

                rightContent: {

                    beens: false,
                    cassava: false,
                    forages: true,
                },
            },

            /* TANZANIA */
            {
                name: 'TANZANIA',
                
                ref: 'TANZANIA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* ZAMBIA */
            {
                name: 'ZAMBIA',
                
                ref: 'ZAMBIA',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* ZIMBAWE */
            {
                name: 'ZIMBAWE',
                
                ref: 'ZIMBAWE',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },

            /* BOTSWANA */
            {
                name: 'BOTSWANA',
                
                ref: 'BOTSWANA',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: true,
                },
            },

            /* ESWATINI */
            {
                name: 'ESWATINI',
                
                ref: 'ESWATINI',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: false,
                },
            },

            /* LESOTHO */
            {
                name: 'LESOTHO',
                
                ref: 'LESOTHO',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: false,
                },
            },

            /* MADAGASCAR */
            {
                name: 'MADAGASCAR',
                
                ref: 'MADAGASCAR',

                rightContent: {

                    beens: true,
                    cassava: false,
                    forages: false,
                },
            },

            /* MAYOTTE */
            {
                name: 'MAYOTTE',
                
                ref: 'MAYOTTE',

                rightContent: {

                    beens: false,
                    cassava: true,
                    forages: false,
                },
            },

            /* SOUTH_AFRICA */
            {
                name: 'SOUTH AFRICA',
                
                ref: 'SOUTH_AFRICA',

                rightContent: {

                    beens: true,
                    cassava: true,
                    forages: true,
                },
            },
        ],

        
    },
    created() {
        this.languageLoop = this.english;
        this.languageSelected = 'english';

        this.beenLoop = this.countries[0];

        let spanish = document.getElementById('spanish');
        spanish.classList.add('st12');
    },
    methods: {

        getBeen(event) {

            let myBeen = event.currentTarget.id;


            let mySearch = this.countries.filter(function(country) {
                return country.ref == myBeen;
            });

            let beans = document.getElementById('beansContainer');
            let cassava = document.getElementById('cassavaContainer');
            let forages = document.getElementById('foragesContainer');

            if (mySearch[0].rightContent.beens == false) {
                beans.classList.add('st35');
            } else {
                beans.classList.remove('st35');
            }

            if (mySearch[0].rightContent.cassava == false) {
                cassava.classList.add('st35');
            } else {
                cassava.classList.remove('st35');
            }

            if (mySearch[0].rightContent.forages == false) {
                forages.classList.add('st35');
            } else {
                forages.classList.remove('st35');
            }

            let beenFilter = {

                name: `${mySearch[0].name}`,

                ref: myBeen,

                rightContent: {
                    
                    beens: `${mySearch[0].rightContent.beens}`,
                    cassava: `${mySearch[0].rightContent.cassava}`,
                    forages: `${mySearch[0].rightContent.forages}`,
                },
            }

            this.beenLoop = beenFilter;

        },

        setLanguage(event) {

            let language = event.currentTarget.id.toLowerCase();

            let spanish = document.getElementById('spanish');
            let english = document.getElementById('english');

            if(language == 'spanish'){

                this.languageLoop = this.spanish;
                this.languageSelected = 'spanish';

                spanish.classList.remove('st12');
                english.classList.add('st12');

            } else {

                this.languageLoop = this.english;

                this.languageSelected = 'english';

                spanish.classList.add('st12');
                english.classList.remove('st12');

            }


        }
        
    },

});