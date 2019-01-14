import React, { createElement } from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources } from 'react-admin';
import { withRouter } from 'react-router-dom';
import LabelIcon from '@material-ui/icons/Label';
import { withStyles } from '@material-ui/core/styles';
import DashboardRounded from "@material-ui/icons/DashboardRounded";
import SupervisedUserCircleRounded from "@material-ui/icons/SupervisedUserCircleRounded";
import QuestionAnswerRounded from "@material-ui/icons/QuestionAnswerRounded";
import VerifiedUserRounded from "@material-ui/icons/VerifiedUserRounded";
import BarChartRounded from "@material-ui/icons/BarChartRounded";
import LockRounded from "@material-ui/icons/LockRounded";
import MenuRounded from "@material-ui/icons/MenuRounded";
import MapRounded from "@material-ui/icons/MapRounded";
import MessageRounded from "@material-ui/icons/MessageRounded";
import ReportOutlined from "@material-ui/icons/ReportOutlined";
import ContactSupportRounded from "@material-ui/icons/ContactSupportRounded";
import SettingsApplicationsRounded from "@material-ui/icons/SettingsApplicationsRounded";
import { Responsive } from 'react-admin';
import { Tooltip, ListItemIcon, ListItemText } from '@material-ui/core';
import {Link} from "react-router-dom";
const styles = {
    root: {}, // Style applied to the MenuItem from material-ui
    active: { color: 'black' }, // Style applied when the menu item is the active one
    icon: {}, // Style applied to the icon
};


const Menu = ({ classes, resources, onMenuClick, logout }) => {
    
    return (

    <div>
        <MenuItemLink
            classes={classes}
            to={`/`}
            primaryText="داشبورد"
            leftIcon={<DashboardRounded />}
            onClick={onMenuClick} />

        <MenuItemLink
                classes={classes}
                to={`/manager`}
                primaryText='مدیریت کاربران'
                leftIcon={<SupervisedUserCircleRounded />}
                onClick={onMenuClick} />

        <MenuItemLink
            classes={classes}
            to={`/user`}
            primaryText='کاربران اپ'
            leftIcon={<DashboardRounded />}
            onClick={onMenuClick} />    

        <MenuItemLink
            classes={classes}
            to={`/quiz`}
            primaryText='بانک سوالات'
            leftIcon={<QuestionAnswerRounded />}
            onClick={onMenuClick} />

        <MenuItemLink
            classes={classes}
            to={`/verifications`}
            primaryText='کدهای احراز هویت'
            leftIcon={<VerifiedUserRounded />}
            onClick={onMenuClick} />

        <MenuItemLink
            classes={classes}
            to={`/charts`}
            primaryText='آمار'
            leftIcon={<BarChartRounded />}
            onClick={onMenuClick} />

        <MenuItemLink
            classes={classes}
            to={`/role`}
            primaryText='نقش ها'
            leftIcon={<LockRounded />}
            onClick={onMenuClick} />

        <MenuItemLink
            classes={classes}
            to={`/menu`}
            primaryText='منوها'
            leftIcon={<MenuRounded />}
            onClick={onMenuClick}/>

        <MenuItemLink
            classes={classes}
            to={`/users-on-map`}
            primaryText='کاربران روی نقشه'
            leftIcon={<MapRounded />}
            onClick={onMenuClick}/>    

        <MenuItemLink
            classes={classes}
            to={`/message`}
            primaryText='پیام ها'
            leftIcon={<MessageRounded />}
            onClick={onMenuClick} />

        <MenuItemLink
            classes={classes}
            to={`/bots`}
            primaryText='مدیریت بات ها'
            leftIcon={<DashboardRounded />}
            onClick={onMenuClick} />

        <MenuItemLink
            classes={classes}
            to={`/popup`}
            primaryText='پاپ آپ ها'
            leftIcon={<DashboardRounded />}
            onClick={onMenuClick} />

        <MenuItemLink
            classes={classes}
            to={`/log`}
            primaryText='گزارشات'
            leftIcon={<ReportOutlined />}
            onClick={onMenuClick} />

        <MenuItemLink
            classes={classes}
            to={`/support`}
            primaryText='پشتیبانی'
            leftIcon={<ContactSupportRounded />}
            onClick={onMenuClick} />
        
        <MenuItemLink
            classes={classes}
            to={`/setting`}
            primaryText='تنظیمات اصلی'
            leftIcon={<SettingsApplicationsRounded />}
            onClick={onMenuClick} />

        <Responsive
            small={logout}
            medium={null} // Pass null to render nothing on larger devices
        />
    </div>
)};

const mapStateToProps = state => ({
    resources: getResources(state),
});

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Menu)));