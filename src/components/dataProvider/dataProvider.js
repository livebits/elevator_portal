import { stringify } from 'query-string';
import {
    fetchUtils,
    GET_LIST,
    GET_ONE,
    GET_MANY,
    GET_MANY_REFERENCE,
    CREATE,
    UPDATE,
    UPDATE_MANY,
    DELETE,
    DELETE_MANY,
} from 'react-admin';


const API_URL = 'http://localhost:3030/api';

/**
 * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} { url, options } The HTTP request parameters
 */
const convertDataProviderRequestToHTTP = (type, resource, params) => {
    let url = '';
    console.log('res:', resource, ' type: ', type);
    
    const options = {
        headers : new Headers({
            Accept: 'application/json',
            "X-Access-Token": localStorage.getItem('jwt_token')
        }),
    };    
    
    switch (type) {
        case GET_LIST:
            
            // const { page, perPage } = params.pagination;
            // const { field, order } = params.sort;
            let query = "";
            // const query = {
            //     sort: JSON.stringify([field, order]),
            //     range: JSON.stringify([
            //         (page - 1) * perPage,
            //         page * perPage - 1,
            //     ]),
            //     filter: JSON.stringify(params.filter),
            // };

            switch (resource) {
                case 'Customers':
                    // query = {"include": {"where": {"roles.name": "customer"}}};
                    url = `${API_URL}/AppUsers/customers?filter=${JSON.stringify(query)}`;
                    break;
                case 'CustomerInspections':
                    console.log("params:", JSON.stringify(params));
                    let customerId = localStorage.getItem('customerId');
                    params.filter.customerId = customerId;
                    query = {
                        filter: params.filter,
                    };
                    url = `${API_URL}/Inspections/show?filter=${JSON.stringify(query)}`;
                    break;
                case 'MyAppUsers':
                    // query = {"include": {"where": {"roles.name": "customer"}}};
                    url = `${API_URL}/AppUsers/MyAppUsers?filter=${JSON.stringify(query)}`;
                    break;
                case 'ServiceUsers':
                    query = {"where": {"roles.name": "service"}};
                    url = `${API_URL}/AppUsers/serviceUsers?filter=${JSON.stringify(query)}`;
                    break;
                case 'serviceUsersPerformanceReport':
                    query = {"where": {"roles.name": "service"}};
                    url = `${API_URL}/AppUsers/serviceUsersPerformanceReport?filter=${JSON.stringify(query)}`;
                    break;
                case 'Deals':
                    query = "";
                    url = `${API_URL}/Deals/AllDeals?filter=${stringify(query)}`;
                    break;
                case 'CompanyManagers':
                    query = "";
                    url = `${API_URL}/Managers/CompanyManagers?filter=${stringify(query)}`;
                    break;
                case 'AdminManagers':
                    query = "";
                    url = `${API_URL}/Managers/AdminManagers?filter=${stringify(query)}`;
                    break;
                case 'Messages':
                    query = "";
                    url = `${API_URL}/Messages/CompanyMessages?filter=${stringify(query)}`;
                    break;
                case 'Emergencies':
                    query = "";
                    url = `${API_URL}/Damages/AllEMGDamages?filter=${stringify(query)}`;
                    break;
                case 'CheckLists':
                    query = "";
                    url = `${API_URL}/CheckLists/AllCheckLists?filter=${stringify(query)}`;
                    break;
                case 'Damages':
                    query = {
                        // sort: JSON.stringify([field, order]),
                        // range: JSON.stringify([
                        //     (page - 1) * perPage,
                        //     page * perPage - 1,
                        // ]),
                        filter: params.filter,
                    };
                    url = `${API_URL}/Damages/AllDamages?filter=${JSON.stringify(query)}`;
                    break;
                case 'Reports':
                    query = '';
                    url = `${API_URL}/Reports/AllReports?filter=${JSON.stringify(query)}`;
                    break;
                case 'Factors':
                    query = '';
                    url = `${API_URL}/Factors/AllFactors?filter=${JSON.stringify(query)}`;
                    break;
                case 'Payments':
                    query = '';
                    url = `${API_URL}/Payments/AllFactorPayments?filter=${JSON.stringify(query)}`;
                    break;    
                default:
                    url = `${API_URL}/${resource}?filter=${stringify(query)}`;
                    break;
            }
            break;
        case GET_ONE:
            switch (resource) {
                case 'Customers':
                    url = `${API_URL}/AppUsers/${params.id}`;
                    break;
                case 'CustomerInspections':
                    url = `${API_URL}/Inspections/${params.id}`;
                    break;
                case 'DamageDetail':
                    url = `${API_URL}/Damages/DamagesDetail/${params.id}`;
                    break;
                case 'GetCompanyInfo':
                    url = `${API_URL}/Settings/GetCompanyInfo`;
                    break;  
                case 'ServiceUsers':
                    url = `${API_URL}/AppUsers/${params.id}`;
                    break;
                case 'CompanyManagers':
                    url = `${API_URL}/Managers/${params.id}`;
                    break;
                case 'AdminManagers':
                    url = `${API_URL}/Managers/${params.id}`;
                    break;
                case 'Emergencies':
                    url = `${API_URL}/Damages/${params.id}`;
                    break;
                case 'CustomerShow':
                    query = '';
                    url = `${API_URL}/AppUsers/CustomerShow/${params.id}`;
                    break;
                case 'CompanyShow':
                    query = '';
                    url = `${API_URL}/Companies/CompanyShow`;
                    break;
                case 'DashboardStats':
                    query = '';
                    url = `${API_URL}/Managers/DashboardStats`;
                    break;    
                default:
                    url = `${API_URL}/${resource}/${params.id}`;
                    break;
            }
            break;
        case GET_MANY: {
            const query = {
                "where": { "id": { inq: params.ids} },
            };
            switch (resource) {
                case 'Customers':
                    url = `${API_URL}/AppUsers?filter=${JSON.stringify(query)}`;
                    break;
                case 'ServiceUsers':
                    url = `${API_URL}/AppUsers?filter=${JSON.stringify(query)}`;
                    break;
                case 'CompanyManagers':
                    url = `${API_URL}/Managers?filter=${JSON.stringify(query)}`;
                    break;
                case 'AdminManagers':
                    url = `${API_URL}/Managers?filter=${JSON.stringify(query)}`;
                    break;
                default:
                    url = `${API_URL}/${resource}?filter=${JSON.stringify(query)}`;
                    break;
            }
            
            break;
        }
        case GET_MANY_REFERENCE: {
            // console.log(params);
            
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;
            let query = {
                // sort: JSON.stringify([field, order]),
                // range: JSON.stringify([
                //     (page - 1) * perPage,
                //     page * perPage - 1,
                // ]),
                "where": {
                    ...params.filter,
                    [params.target]: params.id,
                },
            };
            switch (resource) {
                case 'CustomerPayment':
                    query = {
                        "where": {
                            ...params.filter,
                            [params.target]: params.id,
                        },
                        "include": ["factors"]
                    }
                    url = `${API_URL}/Payments?filter=${JSON.stringify(query)}`;
                    break;

                case 'CompanyPayment':
                    query = ''
                    url = `${API_URL}/Payments/AllCompanyPayments?filter=${JSON.stringify(query)}`;
                    break;
            
                default:
                    url = `${API_URL}/${resource}?filter=${JSON.stringify(query)}`;
                    break;
            }
            
            break;
        }
        case UPDATE:
            switch (resource) {
                case 'Customers':
                    params.data.username = params.data.mobile;
                    url = `${API_URL}/AppUsers/${params.data.id}`;
                    break;
                case 'Settings':
                console.log(params);
                
                    url = `${API_URL}/Settings/UpdateSettings`;
                    break;
                case 'Damages':
                    console.log(params);
                    
                        url = `${API_URL}/Damages/Update`;
                        break;  
                case 'FactorItems':
                    params.data.total = params.data.quantity * params.data.unitPrice;
                    url = `${API_URL}/FactorItems/${params.data.id}`;
                    break;
                case 'ServiceUsers':
                    params.data.username = params.data.mobile;
                    params.data.password = params.data.mobile;
                    url = `${API_URL}/AppUsers/${params.data.id}`;
                    break;
                case 'Emergencies':
                    url = `${API_URL}/Damages/${params.data.id}`;
                    break;
                case 'CompanyManagers':
                    url = `${API_URL}/Managers/${params.data.id}`;
                    break;
                case 'AdminManagers':
                    url = `${API_URL}/Managers/${params.data.id}`;
                    break;
                default:
                    url = `${API_URL}/${resource}`;
                    break;
            }
            
            options.method = 'PATCH';
            options.body = JSON.stringify(params.data);
            break;
        case CREATE:
            switch (resource) {
                case 'Customers':
                    url = `${API_URL}/AppUsers`;
                    params.data.role = "customer";
                    options.body = JSON.stringify(params.data);
                    break;
                case 'CustomerInspections':
                    url = `${API_URL}/Inspections/addNew`;
                    options.body = JSON.stringify(params.data);
                    break;
                case 'ServiceUsers':
                    url = `${API_URL}/AppUsers`;
                    params.data.role = "service";
                    options.body = JSON.stringify(params.data);
                    break;
                case 'CompanyManagers':
                    url = `${API_URL}/Managers`;
                    options.body = JSON.stringify(params.data);
                    break;
                case 'AdminManagers':
                    url = `${API_URL}/Managers`;
                    options.body = JSON.stringify(params.data);
                    break;
                case 'Emergencies':
                    url = `${API_URL}/Damages`;
                    params.data.isEMG = 1;
                    options.body = JSON.stringify(params.data);
                    break;
                case 'importCustomers':
                    url = `${API_URL}/AppUsers/ImportUsers`;
                    
                    const formData = new FormData();
                    formData.append('file', params.data.file[0]);
                    
                    options.body = formData;
                    break;
                default:
                    url = `${API_URL}/${resource}`;
                    options.body = JSON.stringify(params.data);
                    break;
            }
            
            options.method = 'POST';
            
            break;
        case DELETE:
            switch (resource) {
                case 'Customers':
                    url = `${API_URL}/AppUsers/${params.id}`;
                    break;
                case 'ServiceUsers':
                    url = `${API_URL}/AppUsers/${params.id}`;
                    break;
                case 'CompanyManagers':
                    url = `${API_URL}/Managers/${params.id}`;
                    break;
                case 'Emergencies':
                    url = `${API_URL}/Damages/${params.id}`;
                    break;    
                case 'AdminManagers':
                    url = `${API_URL}/Managers/${params.id}`;
                    break;
                default:
                    url = `${API_URL}/${resource}/${params.id}`;
                    break;
            }

            options.body = JSON.stringify(params);
            options.method = 'DELETE';
            break;
        default:
            throw new Error(`Unsupported fetch action type ${type}`);
    }
    return { url, options };
};


/**
 * @param {Object} response HTTP response from fetch()
 * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} Data Provider response
 */
const convertHTTPResponseToDataProvider = (response, type, resource, params) => {
    const { headers, json } = response;
    console.log(type, '>>>', resource);
    switch (type) {
        case GET_LIST:
        
            return {
                data: json,
                total: parseInt(json.length, 10),
            };

        // case GET_ONE:
            
            // switch (resource) {
            //     case "menu":
                    
            //         let menuData = json;
            //         let menuActionsArray = [];
            //         menuData.actions.forEach((action, index) => {
                        
            //             menuActionsArray[index] = action.id;
            //         });
            //         menuData.actions = menuActionsArray;
                    
            //         return {
            //             data: menuData
            //         };

            //     case "manager":
            //         let managerData = json;
            //         let rolesArray = [];
            //         managerData.roles.forEach((action, index) => {
                        
            //             rolesArray[index] = action.id;
            //         });
            //         managerData.roles = rolesArray;
            //         console.log(">>", json);
                    
            //         return {
            //             data: managerData
            //         };
            
            //     default:
            //         return {
            //             data: json
            //         };
            //         break;
            // };
        case UPDATE:
            // switch (resource) {
            //     case "manager":
                    
            //         let managerData = json;
            //         let rolesArray = [];
            //         // menuData.roles.forEach((action, index) => {
                        
            //         //     rolesArray[index] = action.id;
            //         // });
            //         managerData.roles = rolesArray;
            //         console.log(managerData);
                    
            //         return {
            //             data: managerData
            //         };
            
            //     default:
            //         return {
            //             data: json.map(x => x)
            //         };
            //         break;
            // };
        // case CREATE:
            
            // switch (resource) {
            //     case "menu":
            //         return { data: { ...json.menu, id: json.menu.id } };
            
            //     default:
            //         return { data: { ...params.data, id: json.id } };
            // };
        
        case DELETE:
            
            switch (resource) {
            
                default:
                    return { data: { ...params.data, id: json.id } };
            };    
            
        case GET_MANY:
            return { data: json.map(x => x) };
            
        case GET_MANY_REFERENCE:
            return {
                data: json,
                total: parseInt(json.length, 10),
            };
        default:
            return { data: json };
    }
};

const convertHTTPErrorToDataProvider = (error, type, resource, params) => {
    // const { headers, json } = response;
    let errors = "";
    switch (type) {
        // case GET_LIST:
        
        //     return {
        //         data: json,
        //         total: parseInt(json.length, 10),
        //     };

        // case GET_ONE:
            
            // switch (resource) {
            //     case "menu":
                    
            //         let menuData = json;
            //         let menuActionsArray = [];
            //         menuData.actions.forEach((action, index) => {
                        
            //             menuActionsArray[index] = action.id;
            //         });
            //         menuData.actions = menuActionsArray;
                    
            //         return {
            //             data: menuData
            //         };

            //     case "manager":
            //         let managerData = json;
            //         let rolesArray = [];
            //         managerData.roles.forEach((action, index) => {
                        
            //             rolesArray[index] = action.id;
            //         });
            //         managerData.roles = rolesArray;
            //         console.log(">>", json);
                    
            //         return {
            //             data: managerData
            //         };
            
            //     default:
            //         return {
            //             data: json
            //         };
            //         break;
            // };
        case UPDATE:
            switch (resource) {
                case 'Customers':
                    errors = parseErrors(error, "customer");
                    return Promise.reject({ message: errors});

                case 'ServiceUsers':
                    errors = parseErrors(error, "serviceUser");
                    return Promise.reject({ message: errors});

                default:
                    return ;
            };
        case CREATE:
            
            switch (resource) {
                case 'Customers':
                    errors = parseErrors(error, "customer");
                    return Promise.reject({ message: errors});

                case 'ServiceUsers':
                    errors = parseErrors(error, "serviceUser");
                    return Promise.reject({ message: errors});

                default:
                    return ;
            };
        
        // case DELETE:
            
        //     switch (resource) {
            
        //         default:
        //             return { data: { ...params.data, id: json.id } };
        //     };    
            
        // case GET_MANY:
        //     return { data: json.map(x => x) };
            
        // case GET_MANY_REFERENCE:
        //     return {
        //         data: json,
        //         total: parseInt(json.length, 10),
        //     };
        default:
            // return { data: json };
    }
};

//helper funcs
function parseErrors(err, model) {
    console.log(err);
    
    //handle error
    if(err.error.statusCode === 401){
        let errors = new Array();
        
        errors[0] = "دسترسی غیر مجاز";
        return "دسترسی غیر مجاز";
    }
    else if(err.error.name === "ValidationError") {
        
        let codes = err.error.details.codes;
        let errors = new Array();
        
        Object.keys(codes).map(function(attr_name, i) {
            errors[i] = codes[attr_name].map(error_cat => {
                if(attr_name === "email") {
                    return '';
                }
                return generateErrorMessage(attr_name, error_cat, model)
            })
            
        })
        console.log(errors);

        let message = "";
        errors.forEach(err => {
            if(err != "" ) {
                message += err;
            }
        });
        
        return message;
    }
    else {
        let errors = new Array();
        
        errors[0] = "خطای سرور رخ داده است";
        return "خطای سرور رخ داده است";
    }
};

function generateErrorMessage(attribute, error_type, model) {
    switch (error_type) {
        case 'uniqueness':
            return `${getAttribName(attribute, model)} از قبل ثبت شده است. `;
        case 'custom.email':
            return `${getAttribName(attribute, model)} وارد شده نامعتبر می باشد. `;
        case 'date':
            return `${getAttribName(attribute, model)} باید به صورت تاریخ باشد. `;
        case 'numericality.number': 
            return `${getAttribName(attribute, model)} باید به صورت مقدار عددی باشد. `;
        default:
            break;
    }
    
}

function getAttribName(attribute, model) {

    const attributes = {
        serviceUser: {
            email: 'ایمیل',
            mobile: 'موبایل',
            username: 'موبایل',
        },
        customer: {
            email: 'ایمیل',
            mobile: 'موبایل',
            username: 'موبایل',
            password: 'رمز عبور',
            birth_date: 'تاریخ تولد',
        }
    }

    return attributes[model][attribute];
}
///


/**
 * @param {string} type Request type, e.g GET_LIST
 * @param {string} resource Resource name, e.g. "posts"
 * @param {Object} payload Request parameters. Depends on the request type
 * @returns {Promise} the Promise for response
 */
export default (type, resource, params) => {

    // switch (type) {
    //     case GET_MANY: {
    //         switch (resource) {
    //             case 'action':
    //                 return {
    //                     data: []
    //                 };
    //             case 'role':
    //                 return {
    //                     data: []
    //                 };
            
    //             default:
    //                 break;
    //         }
    //         break;
    //     }
    // }

    const { fetchJson } = fetchUtils;
    const { url, options } = convertDataProviderRequestToHTTP(type, resource, params);
    return fetchJson(url, options)
        .then(response => convertHTTPResponseToDataProvider(response, type, resource, params))
        .catch(error => convertHTTPErrorToDataProvider(error.body, type, resource, params));
};












// /**
//  * Maps react-admin queries to a simple REST API
//  *


//     /**
//      * @param {Object} response HTTP response from fetch()
//      * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
//      * @param {String} resource Name of the resource to fetch, e.g. 'posts'
//      * @param {Object} params The data request params, depending on the type
//      * @returns {Object} Data response
//      */
//     const convertHTTPResponse = (response, type, resource, params) => {
//         const { headers, json } = response;
//         console.log(type);
//         switch (type) {
//             case GET_LIST:
//             case GET_MANY_REFERENCE:
//                 if (!headers.has('content-range')) {
//                     throw new Error(
//                         'The Content-Range header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?'
//                     );
//                 }
//                 return {
//                     data: json,
//                     total: parseInt(
//                         headers
//                             .get('content-range')
//                             .split('/')
//                             .pop(),
//                         10
//                     ),
//                 };
//             case CREATE:
//                 return { data: { ...params.data, id: json.id } };
//             default:
//                 return { data: json };
//         }
//     };

//     /**
//      * @param {string} type Request type, e.g GET_LIST
//      * @param {string} resource Resource name, e.g. "posts"
//      * @param {Object} payload Request parameters. Depends on the request type
//      * @returns {Promise} the Promise for a data response
//      */
//     return (type, resource, params) => {
        
//         // simple-rest doesn't handle filters on UPDATE route, so we fallback to calling UPDATE n times instead
//         if (type === UPDATE_MANY) {
//             return Promise.all(
//                 params.ids.map(id =>
//                     httpClient(`${API_URL}/${resource}/${id}`, {
//                         method: 'PUT',
//                         body: JSON.stringify(params.data),
//                     })
//                 )
//             ).then(responses => ({
//                 data: responses.map(response => response.json),
//             }));
//         }
//         // simple-rest doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
//         if (type === DELETE_MANY) {
//             return Promise.all(
//                 params.ids.map(id =>
//                     httpClient(`${API_URL}/${resource}/${id}`, {
//                         method: 'DELETE',
//                     })
//                 )
//             ).then(responses => ({
//                 data: responses.map(response => response.json),
//             }));
//         }

//         const { url, options } = convertDataRequestToHTTP(
//             type,
//             resource,
//             params
//         );
//         return httpClient(url, options).then(response =>
//             convertHTTPResponse(response, type, resource, params)
//         );
//     };
// };