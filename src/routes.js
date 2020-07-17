/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import TocIcon from "@material-ui/icons/Toc";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import AssessmentIcon from "@material-ui/icons/Assessment";
// core components/views for Admin layout
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/rtl-page",
    name: "Dashboard",
    rtlName: "לוח בקרה",
    icon: Dashboard,
    component: RTLPage,
    layout: "/rtl",
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "פרופילים חדשים",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "פרופילים בטיפול",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ניהול מתנדבים",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/manage",
    name: "User Profile",
    rtlName: "ניהול פניות בצ'אטבוט",
    icon: ContactMailIcon,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "יועצים זמינים לשיחה",
    icon: AddIcCallIcon,
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "מלווים זמינים",
    icon: ContactMailIcon,
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "ניתוח תוכן",
    icon: TocIcon,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "דוחות",
    icon: AssessmentIcon,
    component: NotificationsPage,
    layout: "/admin",
  },
];

export default dashboardRoutes;
