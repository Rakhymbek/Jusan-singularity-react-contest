import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import reduxStore from "./redux/store";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/home/home";
import LatestNews from "./pages/latest-news.js/latest-news";
import PopularNews from "./pages/popular-news/popular-news";

const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={reduxStore}>
    <Router history={history}>
      <App>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/latest-news' element={<LatestNews />} />
          <Route exact path='/popular-news' element={<PopularNews />} />
        </Routes>
      </App>
    </Router>
  </Provider>
);
