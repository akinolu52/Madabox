import React from "react";
import { Scene, Router } from "react-native-router-flux";

import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";

import Home from "./screens/main/Home/Index";
import About from "./screens/main/About/Index";
import Profile from "./screens/main/Profile/Index";
import Explore from "./screens/main/Explore/Index";
import Notification from "./screens/main/Notification/Index";
import Search from "./screens/main/Search/Index";

import Artist from "./screens/main/Artist/Index";
import Show from "./screens/main/Artist/Show";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="auth" hideNavBar={true}>
          <Scene key="login" component={Login} />
          <Scene key="register" component={Register} />
        </Scene>
        <Scene initial key="main" hideNavBar={true}>
          <Scene key="home" component={Home} />
          <Scene key="show" component={Show} />
          <Scene key="artist" component={Artist} />
          <Scene key="about" component={About} />
          <Scene key="profile" initial component={Profile} />
          <Scene key="explore" component={Explore} />
          <Scene key="notification" component={Notification} />
          <Scene key="search" component={Search} />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
