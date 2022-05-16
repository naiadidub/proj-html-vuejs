import Vue from 'vue';

const shopArray = Vue.observable ({
    products: [
        {
            title: 'Black jacket',
            price: 125,
            salePrice: '',
            path: './assets/black_leather_jacket.jpg',
            vote: 0
        },
        {
            title: 'Black leather jacket',
            price: 235,
            salePrice: '200',
            path: './assets/black_elegant_leather_jacket.jpg',
            vote: 5
        },
        {
            title: 'Hipster black top',
            price: 57,
            salePrice: '',
            path: './assets/hipster_black_top.jpg',
            vote: 0
        },
        {
            title: 'Blue leather jacket',
            price: 80,
            salePrice: '60',
            path: './assets/blue_leather_jacket.jpg',
            vote: 0
        },
        {
            title: 'Modern leather boots',
            price: 50,
            salePrice: '30',
            path: './assets/blue_leather_jacket.jpg',
            vote: 0
        },
        {
            title: 'Modern leather boots',
            price: 50,
            salePrice: '30',
            path: './assets/modern_leather_boots.jpg',
            vote: 0
        },
        {
            title: 'Leather glaves',
            price: 45,
            salePrice: '',
            path: './assets/modern_leather_boots.jpg',
            vote: 5
        },
        {
            title: 'Spring printed dress',
            price: 47,
            salePrice: '',
            path: './assets/modern_leather_boots.jpg',
            vote: 5
        },
    ]
})

export default shopArray;
