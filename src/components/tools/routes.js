import React from 'react';
import { Route } from 'react-router-dom';
import FactorItemCreate from '../factor/FactorItemCreate';
import CustomerShow from '../customer/CustomerShow';
import CustomerImport from '../customer/CustomerImport';
import ReportPrint from '../report/ReportPrint';
import { CustomerInspections } from '../customer/CustomerInspections';
import { AddCustomerInspection } from '../customer/AddCustomerInspection';
import { CustomerList } from '../customer/CustomerList';

export default [
    <Route exact path="/FactorItems/create/:factorId" component={FactorItemCreate} />,
    <Route exact path="/Customers/show/:id" component={CustomerShow} />,
    <Route exact path="/CustomerInspections/create" component={AddCustomerInspection} />,
    <Route exact path="/CustomerInspections/:id" component={CustomerInspections} />,
    <Route exact path="/importCustomers" component={CustomerImport} />,
    <Route exact path="/reportPrint/:id" component={ReportPrint} />,
];