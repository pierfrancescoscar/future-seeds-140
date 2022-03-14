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

        },

        spanish: {

            subHead: 'SEMILLAS DEL FUTURO',

            title: 'Hacia donde fueron nuestras semillas',

            subtitle: 'Todos los países a los que ayudamos con nuestro banco de germoplasma',

            seed: ['FRÍJOLE' , 'YUCA', 'FORRAGES'],

        },

        countries: [

            /* venezuela */
            {
                name: 'VENEZUELA',
                
                ref: 'venezuela',

                rightContent: {

                    beens: '',
                    cassava: '244',
                    forages: '2006',
                },
            },

            /* united state */
            {
                name: 'UNITED STATE',
                
                ref: 'united_state',

                rightContent: {

                    beens: '1859',
                    cassava: '',
                    forages: '',
                },
            },

            /* turkey */
            {
                name: 'TURKEY',
                
                ref: 'turkey',

                rightContent: {

                    beens: '1113',
                    cassava: '',
                    forages: '',
                },
            },

            /* thailand */
            {
                name: 'THAILAND',
                
                ref: 'thailand',

                rightContent: {

                    beens: '',
                    cassava: '',
                    forages: '990',
                },
            },

            /* peru */
            {
                name: 'PERÙ',
                
                ref: 'peru',

                rightContent: {

                    beens: '3794',
                    cassava: '412',
                    forages: '',
                },
            },

            /* paraguay */
            {
                name: 'PARAGUAY',
                
                ref: 'paraguay',

                rightContent: {

                    beens: '',
                    cassava: '203',
                    forages: '',
                },
            },

            /* panama */
            {
                name: 'PANAMA',
                
                ref: 'panama',

                rightContent: {

                    beens: '',
                    cassava: '',
                    forages: '608',
                },
            },

            /* mexico */
            {
                name: 'MEXICO',
                
                ref: 'mexico',

                rightContent: {

                    beens: '6224',
                    cassava: '110',
                    forages: '689',
                },
            },

            /* malawi */
            {
                name: 'MALAWI',
                
                ref: 'malawi',

                rightContent: {

                    beens: '1008',
                    cassava: '',
                    forages: '',
                },
            },

            /* kenya */
            {
                name: 'KENYA',
                
                ref: 'kenya',

                rightContent: {

                    beens: '',
                    cassava: '',
                    forages: '447',
                },
            },

            /* indonesia */
            {
                name: 'INDONESIA',
                
                ref: 'indonesia',

                rightContent: {

                    beens: '',
                    cassava: '247',
                    forages: '1129',
                },
            },

            /* honduras */
            {
                name: 'HONDURAS',
                
                ref: 'honduras',

                rightContent: {

                    beens: '',
                    cassava: '',
                    forages: '364',
                },
            },

            /* guatemala */
            {
                name: 'GUATEMALA',
                
                ref: 'guatemala',

                rightContent: {

                    beens: '2850',
                    cassava: '',
                    forages: '',
                },
            },

            /* equador */
            {
                name: 'EQUADOR',
                
                ref: 'equador',

                rightContent: {

                    beens: '1112',
                    cassava: '112',
                    forages: '',
                },
            },

            /* costa_rica */
            {
                name: 'COSTA RICA',
                
                ref: 'costa_rica',

                rightContent: {

                    beens: '886',
                    cassava: '97',
                    forages: '',
                },
            },

            /* colombia */
            {
                name: 'COLOMBIA,',
                
                ref: 'colombia',

                rightContent: {

                    beens: '3916',
                    cassava: '2325',
                    forages: '3955',
                },
            },

            /* brazil */
            {
                name:'BRAZIL',
                
                ref: 'brazil',

                rightContent: {

                    beens: '1745',
                    cassava: '1557',
                    forages: '4905',
                },
            },

            /* cali */
            {
                name: 'CALI',
                
                ref: 'cali',

                rightContent: {

                    beens: 'ooo',
                    cassava: 'ooo',
                    forages: 'ooo',
                },
            },

            /* argentina */
            {
                name: 'ARGENTINA',
                
                ref: 'argentina',

                rightContent: {

                    beens: '',
                    cassava: '115',
                    forages: '289',
                },
            },
        ],

        
    },
    created() {
        this.languageLoop = this.english;
        this.languageSelected = 'english';

        let spanish = document.getElementById('spanish');
        spanish.classList.add('st12');
    },
    methods: {

        getBeen(event) {
            // console.log(event);
            let myBeen = event.currentTarget.id.toLowerCase();

            console.log(myBeen);

            /* let mySearch = this.countries.filter(function(country) {
                return country.ref == myBeen;
            });

            console.log(mySearch);

            let beenFilter = {

                name: `${mySearch[0].name}`,

                ref: myBeen,

                rightContent: {
                    beens: `${mySearch[0].rightContent.beens}`,
                    cassava: `${mySearch[0].rightContent.cassava}`,
                    forages: `${mySearch[0].rightContent.forages}`,
                },
            }

            this.beenLoop = beenFilter; */

        },

        setLanguage(event) {

            let language = event.currentTarget.id.toLowerCase();

            let spanish = document.getElementById('spanish');
            let english = document.getElementById('english');

            // console.log(language);

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