import React from 'react';


import Product from './components/Product';
import ProductListPhone from './components/ProductListPhone';
import ProductListComputer from './components/ProductListComputer';
import ProductListTablet from './components/ProductListTablet';
import ProductListApp from './components/ProductListApp';
import NotFound from './components/NotFound';

const routes = [
    { 
        path: '/',
        exact: true,
        main: () => <Product />
    },
    { 
        path: '/phone',
        exact: true,
        main: () => <ProductListPhone />
    },
    { 
        path: '/computer',
        exact: true,
        main: () => <ProductListComputer />
    },
    { 
        path: '/tablet',
        exact: true,
        main: () => <ProductListTablet  />
    },
    { 
        path: '/app',
        exact: true,
        main: () => <ProductListApp  />
    },
    { 
        path: '',
        exact: true,
        main: () => <NotFound />
    },
];

export default routes;