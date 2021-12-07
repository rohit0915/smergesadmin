import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

//components
import Login from "./Components/Login/Login";
import Home from "./Components/SuperAdmin/Home/Home";

//for notification
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import EmailVerify from "./Components/ForgotPassword/EmailVerify";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import AddNews from "./Components/SuperAdmin/AddNews/AddNews";
import AddTestimony from "./Components/SuperAdmin/AddTestimony/AddTestimony";
import PressCategory from "./Components/SuperAdmin/Press/PressCategory";
import AddPress from "./Components/SuperAdmin/Press/AddPress";
import Category from "./Components/SuperAdmin/Category/Category";
import Faq from "./Components/SuperAdmin/Faq/Faq";
import Contactinfo from "./Components/SuperAdmin/ContactInfo/Contactinfo";
import UserInformation from "./Components/SuperAdmin/UserInformation/UserInformation";

function App() {
  return (
    <>
      <ReactNotification />

      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/verify-email" component={EmailVerify} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/add-news" component={AddNews} />
        <Route exact path="/add-testimony" component={AddTestimony} />
        <Route exact path="/press-category" component={PressCategory} />
        <Route exact path="/add-press" component={AddPress} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/contact-info" component={Contactinfo} />
        <Route exact path="/user-information" component={UserInformation} />

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
