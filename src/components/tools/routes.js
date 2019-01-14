import React from 'react';
import { Route } from 'react-router-dom';
import FactorItemCreate from '../factor/FactorItemCreate';
import CustomerShow from '../customer/CustomerShow';
import CustomerImport from '../customer/CustomerImport';

export default [
    <Route exact path="/FactorItems/create/:factorId" component={FactorItemCreate} />,
    <Route exact path="/Customers/show/:id" component={CustomerShow} />,
    <Route exact path="/importCustomers" component={CustomerImport} />,
];