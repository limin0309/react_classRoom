import React from "react";
import { render } from "react-dom";
// hash router 主要是borwserRouter 主要是 /
import { HashRouter, Route, Switch } from "react-router-dom";
// 此处渲染App组件，外层增加路由组件
import Home from "./containers/Home/index";
import Lesson from "./containers/Home/index";
import Profile from "./containers/Home/index";

render(
  <HashRouter>
    {/* /* switch 只匹配一次*/}
    <App>
      <Switch>
        <Route path={"/home"} component={Home} />
        <Route path={"/lesson"} component={Lesson} />
        <Route path={"/profile"} component={Profile} />
      </Switch>
    </App>
  </HashRouter>,
  document.getElementById("app")
);
