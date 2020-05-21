const VALUE_TABLE = [
    { title: "Rule Id", field: "id" },
    { title: "Rental Lower", field: "rent_lower" },
    { title: "Rental Upper", field: "rent_upper" },
    { title: "Age Lower", field: "age_lower" },
    { title: "Age Upper", field: "age_upper" },
    { title: "ZipCode", field: "zipcode" },
    { title: "Product Category", field: "product_category" },
    { title: "Tenure Lower", field: "tenure_lower" },
    { title: "Tenure Upper", field: "tenure_upper" }
];

const PRODUCT_CATEGORY_OPTIONS = [
    {value : 'TV', label: 'Television'},
    {value : 'Sofa', label: 'Sofa'},
    {value : 'Refrigerator', label: 'Refrigerator'}
];

const RENTAL_OPTIONS = [
    { value: [0, 500], label:'$0 - $500' },
    { value: [501, 1000], label:'$500 - $1000' },
    { value: [1001, 2000], label:'$1000 - $2000' },
    { value: [2001, 3000], label:'$2000 - $3000' },
    { value: [3001, 4000], label:'$3000 - $4000' },
    { value: [4001, 5000], label:'$4000 - $5000' },
    { value: [5001, -1], label:'$5000+' },
];

const AGE_OPTIONS = [
    {value : [0,18], label: 'Under 18'},
    {value : [18,21], label: '18-21'},
    {value : [21,-1], label: 'Above 21'}
];

const RENT_TENURE = [
    {value: [0, 3], label: ' < 3 Months '},
    {value: [3, 6], label: ' 3 - 6 Months '},
    {value: [7, 12], label: ' 6 - 12 Months '},
    {value: [12, -1], label: ' > 12 Months '}
];

const ZIPCODE = [
    {value: '560037', label: '560037 Marathahalli'},
    {value: '560103', label: '560103 Kadubeesanahalli'},
    {value: '560072', label: '560072 Kukatpally'},
];

const FIELD_TYPE={ ARRAY: 0, NUMBER: 1}

const MOCK_DATA = [
    {
        id:34,
        rent_lower: null,
        rent_upper: null,
        age_lower:21,
        age_upper:-1,
        zipcode:'560072',
        product_category:'TV',
        tenure_lower:null,
        tenure_upper:null
    },
    {
        id:1,
        rent_lower: '501',
        rent_upper: '1000',
        age_lower:'18',
        age_upper:'21',
        zipcode:'560037',
        product_category:'TV',
        tenure_lower:'7',
        tenure_upper:'12'
    },
    {
        id:2,
        rent_lower: '501',
        rent_upper: '1000',
        age_lower:'18',
        age_upper:'21',
        zipcode:'560037',
        product_category:'TV',
        tenure_lower:'7',
        tenure_upper:'12'
    },
    {
        id:3,
        rent_lower: '501',
        rent_upper: '1000',
        age_lower:'18',
        age_upper:'21',
        zipcode:'560037',
        product_category:'TV',
        tenure_lower:'7',
        tenure_upper:'12'
    },
    {
        id:4,
        rent_lower: null,
        rent_upper: null,
        age_lower:null,
        age_upper:null,
        zipcode:'560037',
        product_category:'TV',
        tenure_lower:null,
        tenure_upper:null
    },
    {
        id:34,
        rent_lower: null,
        rent_upper: null,
        age_lower:21,
        age_upper:-1,
        zipcode:'560072',
        product_category:'TV',
        tenure_lower:null,
        tenure_upper:null
    },
    {
        id:1,
        rent_lower: '501',
        rent_upper: '1000',
        age_lower:'18',
        age_upper:'21',
        zipcode:'560037',
        product_category:'TV',
        tenure_lower:'7',
        tenure_upper:'12'
    },
    {
        id:2,
        rent_lower: '501',
        rent_upper: '1000',
        age_lower:'18',
        age_upper:'21',
        zipcode:'560037',
        product_category:'TV',
        tenure_lower:'7',
        tenure_upper:'12'
    },
    {
        id:3,
        rent_lower: '501',
        rent_upper: '1000',
        age_lower:'18',
        age_upper:'21',
        zipcode:'560037',
        product_category:'TV',
        tenure_lower:'7',
        tenure_upper:'12'
    },
    {
        id:4,
        rent_lower: null,
        rent_upper: null,
        age_lower:null,
        age_upper:null,
        zipcode:'560037',
        product_category:'TV',
        tenure_lower:null,
        tenure_upper:null
    },
    {
        id:4,
        rent_lower: null,
        rent_upper: null,
        age_lower:null,
        age_upper:null,
        zipcode:'560037',
        product_category:'TV',
        tenure_lower:null,
        tenure_upper:null
    }

]

export {MOCK_DATA, VALUE_TABLE, AGE_OPTIONS, PRODUCT_CATEGORY_OPTIONS, RENTAL_OPTIONS, ZIPCODE, RENT_TENURE, FIELD_TYPE}