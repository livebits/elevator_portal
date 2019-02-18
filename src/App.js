import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Admin, Resource, Login, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './components/dashboard/Dashboard';
import authProvider from './components/auth/authProvider';
import dataProvider from './components/dataProvider/dataProvider';
import Menu from './components/tools/Menu';
import AppLayout from './components/tools/LayoutWithTheme';
// import farsiMessages from 'ra-language-farsi';
import farsiMessages from './components/tools/translates.fa';
import {createMuiTheme, jssPreset} from '@material-ui/core/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import {create} from 'jss';
import rtl from 'jss-rtl';
import { ManagerList } from './components/managers/ManagerList';
import ManagerCreate from './components/managers/ManagerCreate';
import appReducers from './reducers/';
import customRoutes from './components/tools/routes';
import { indigo, pink, red } from '@material-ui/core/colors';
import LayoutWithTheme from './components/tools/LayoutWithTheme';
import { CompanyList } from './components/companies/CompanyList';
import { CompanyEdit } from './components/companies/CompanyEdit';
import { CompanyCreate } from './components/companies/CompanyCreate';
import { RoleList } from './components/roles/RoleList';
import { RoleEdit } from './components/roles/RoleEdit';
import { RoleCreate } from './components/roles/RoleCreate';
import { ManagerEdit } from './components/managers/ManagerEdit';
import { ServiceUserList } from './components/serviceUsers/ServiceUserList';
import { ServiceUserEdit } from './components/serviceUsers/ServiceUserEdit';
import { ServiceUserCreate } from './components/serviceUsers/ServiceUserCreate';
import { CustomerList } from './components/customer/CustomerList';
import { CustomerEdit } from './components/customer/CustomerEdit';
import { CustomerCreate } from './components/customer/CustomerCreate';
import { DealList } from './components/deal/DealList';
import { DealEdit } from './components/deal/DealEdit';
import { DealCreate } from './components/deal/DealCreate';
import { DamageList } from './components/damage/DamageList';
import { DamageEdit } from './components/damage/DamageEdit';
import { DamageCreate } from './components/damage/DamageCreate';
import { ReportList } from './components/report/ReportList';
import { ReportEdit } from './components/report/ReportEdit';
import { FactorEdit } from './components/factor/FactorEdit';
import { FactorItemEdit } from './components/factor/FactorItemEdit';
import FactorItemCreate from './components/factor/FactorItemCreate';
import { FactorList } from './components/factor/FactorList';
import { FactorPaymentList } from './components/payment/FactorPaymentList';
import ServiceUsersOnMap from './components/serviceUsers/ServiceUsersOnMap';
import CustomerShow from './components/customer/CustomerShow';
import CompanyShow from './components/companies/CompanyShow';
import CustomerImport from './components/customer/CustomerImport';
import { MessageList } from './components/messages/MessageList';
import { MessageShow } from './components/messages/MessageShow';
import { MessageCreate } from './components/messages/MessageCreate';
import { AdminList } from './components/admin/AdminList';
import { AdminEdit } from './components/admin/AdminEdit';
import AdminCreate from './components/admin/AdminCreate';
import VerifiedUserRounded from '@material-ui/icons/VerifiedUserRounded';
import BookmarkRounded from '@material-ui/icons/BookmarkRounded';
import ReportRounded from '@material-ui/icons/ReportRounded';
import MapRounded from '@material-ui/icons/MapRounded';
import RoomServiceRounded from '@material-ui/icons/RoomServiceRounded';
import MessageRounded from '@material-ui/icons/MessageRounded';
import PagesRounded from '@material-ui/icons/PagesRounded';
import SupervisorAccountRounded from '@material-ui/icons/SupervisorAccountRounded';
import RefreshRounded from '@material-ui/icons/RefreshRounded';
import ReceiptRounded from '@material-ui/icons/ReceiptRounded';
import PersonPinRounded from '@material-ui/icons/PersonPinRounded';
import PaymentRounded from '@material-ui/icons/PaymentRounded';
import PeopleRounded from '@material-ui/icons/PeopleRounded';
import WarningRounded from '@material-ui/icons/WarningRounded';
import CheckBoxRounded from '@material-ui/icons/CheckBoxRounded';
import InfoRounded from '@material-ui/icons/InfoRounded';
import { EmergencyList } from './components/emergency/EmergencyList';
import { EmergencyCreate } from './components/emergency/EmergencyCreate';
import { EmergencyEdit } from './components/emergency/EmergencyEdit';
import { CheckList } from './components/checkList/CheckList';
import { CheckListCreate } from './components/checkList/CheckListCreate';
import { CheckListEdit } from './components/checkList/CheckListEdit';
import About from './components/settings/About';
import { PerformanceReport } from './components/report/PerformanceReport';
import { CustomerInspections } from './components/customer/CustomerInspections';
import { AddCustomerInspection } from './components/customer/AddCustomerInspection';

// Configure JSS
const jss = create({plugins: [...jssPreset().plugins, rtl()]});

const MyLoginPage = () => <Login backgroundImage="" style={{backgroundColor: '#584165'}} />;

const messages = {
  'fa': farsiMessages,
};

const i18nProvider = locale => messages[locale];

const myTheme = createMuiTheme({
  direction: 'rtl',
  palette: {
    primary: indigo,
    secondary: indigo,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  status: {
      danger: 'red',
  },
  typography: {
      useNextVariants: true,
  },
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        direction: 'ltr',
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        direction: 'ltr',
      },
    },
  }
});

class App extends Component {
  render() {
    return (
      <JssProvider jss={jss}>
        <div className="App">
          <Admin theme={myTheme} appLayout={LayoutWithTheme} dashboard={Dashboard} 
            customReducers={{ app: appReducers }} customRoutes={customRoutes}
            dataProvider={dataProvider} authProvider={authProvider}
            title="آسانسور" loginPage={MyLoginPage} locale="fa" i18nProvider={i18nProvider}
          >

              {permissions => [

                permissions === 'admin' 
                ? 
                [
                  <Resource options={{ label: 'ادمین' }} name="AdminManagers" list={AdminList} edit={AdminEdit} create={AdminCreate} icon={VerifiedUserRounded} />,
                  <Resource options={{ label: 'شرکت ها' }} name="Companies" list={CompanyList} edit={CompanyEdit} create={CompanyCreate} icon={SupervisorAccountRounded} /> ,
                  <Resource options={{ label: 'مدیران شرکت ها' }} name="CompanyManagers" list={ManagerList} edit={ManagerEdit} create={ManagerCreate} icon={SupervisorAccountRounded} />,
                  <Resource options={{ label: 'نقش ها' }} name="Roles" edit={RoleEdit} create={RoleCreate}/>,
                ]
                : null,

              permissions === 'company'
                ? [
                  <Resource options={{ label: 'مشتریان' }} name="Customers" list={CustomerList} edit={CustomerEdit} create={CustomerCreate} icon={PersonPinRounded} />,
                  <Resource options={{ label: 'سرویس کاران' }} name="ServiceUsers" list={ServiceUserList} edit={ServiceUserEdit} create={ServiceUserCreate} icon={PeopleRounded} />,
                  <Resource options={{ label: 'قراردادها' }} name="Deals" list={DealList} edit={DealEdit} create={DealCreate} icon={BookmarkRounded} />,
                  <Resource options={{ label: 'خرابی ها' }} name="Damages" list={DamageList} edit={DamageEdit} create={DamageCreate} icon={PagesRounded} />,
                  <Resource options={{ label: 'امداد' }} name="Emergencies" list={EmergencyList} edit={EmergencyEdit} create={EmergencyCreate} icon={WarningRounded} />,
                  <Resource options={{ label: 'گزارشات' }} name="Reports" list={ReportList} edit={ReportEdit} icon={ReportRounded} />,
                  <Resource options={{ label: 'گزارش عملکرد' }} name="serviceUsersPerformanceReport" list={PerformanceReport} icon={ReportRounded} />,
                  <Resource options={{ label: 'فاکتورها' }} name="Factors" list={FactorList} edit={FactorEdit} icon={ReceiptRounded} />,
                  <Resource options={{ label: 'پرداختی ها' }} name="Payments" list={FactorPaymentList} icon={PaymentRounded} />,
                  <Resource options={{ label: 'سرویس کار روی نقشه' }} name="ServiceUsersOnMap" list={ServiceUsersOnMap} icon={MapRounded} />,
                  <Resource options={{ label: 'امور مالی' }} name="CompanyShow" list={CompanyShow} icon={PaymentRounded} />,
                  <Resource options={{ label: 'چک لیست' }} name="CheckLists" list={CheckList} create={CheckListCreate} edit={CheckListEdit} icon={CheckBoxRounded} />,
                  <Resource options={{ label: 'پیام ها' }} name="Messages" list={MessageList} show={MessageShow} create={MessageCreate} icon={MessageRounded} />,
                  <Resource options={{ label: 'درباره ما' }} name="Settings" list={About} icon={InfoRounded} />,                  
                  // <Resource name="CustomerInspections" create={AddCustomerInspection} />,                  
                  
                  <Resource name="FactorItems" edit={FactorItemEdit}/>,
                  <Resource name="AppUsers"/>,
                  <Resource name="MyAppUsers"/>,
                  <Resource name="CustomerPayment"/>,
                  <Resource name="CompanyPayment"/>,
                  <Resource name="importCustomers"/>,
                  <Resource name="CustomerInspections" />,
                ]
                : null,  
              
            ]}
          </Admin>
        </div>
      </JssProvider>
    );
  }
}

export default App;
